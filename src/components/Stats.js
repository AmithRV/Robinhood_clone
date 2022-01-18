import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/stats.css';
import StatsRow from './StatsRow';
import { db  } from '../firebase';

function Stats()
{
    const TOKEN = 'c7i6umiad3if83qgendg';
    const BASE_URL = 'https://finnhub.io/api/v1/quote';


    const [stockData, setstockData] = useState([]);
    const [myStocks, setmyStocks]   = useState([]);
    
    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = []
            snapshot.docs.map((doc) => {
                //console.log(doc.data());
              promises.push(getStocksData(doc.data().ticker)
              .then(res => {
                tempData.push({
                  id: doc.id,
                  data: doc.data(),
                  info: res.data
                })
              })
            )})
            Promise.all(promises).then(()=>{
              setmyStocks(tempData);
            })
        })
      }

    const  getStocksData = (stock) => {
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch( (error) => {
            console.log('Error : ', error.message);
        });
    };
    useEffect( ()=>{
        let tempstockData = []
        const stockList = ["MSFT", "AAPL", "AMZN", "FB", "GOOGL", "GOOG", "TSLA", "NVDA", "BRK.A", "JPM"]

         getStocksData();

        let promises = [];
        getMyStocks();

        stockList.map( (stock)=> {
            promises.push(
                 getStocksData(stock)
                .then( (res) => {
                    //console.log(res)
                    tempstockData.push({
                        name:stock,
                        ...res.data
                    });
                })
            )
        });

        Promise.all(promises).then( ()=>{
            setstockData(tempstockData);
            //console.log('temp : ',tempstockData);
        });

    },[]);
    

    return(
        <div className='stats'>
            <div className='stats_container'>
                <div className='stats_header' >
                    <p>Stocks</p>
                </div>

                <div className='stats_content'>
                    <div className='stats_rows'>
                    {
                            myStocks.map( (stock)=>(
                                <StatsRow
                                    key={stock.data.ticker}
                                    name={stock.data.ticker}
                                    openprice={stock.info.o}
                                    volume={stock.data.shares}
                                    price={stock.info.c}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='stats_header'>
                    <p>Lists</p>
                </div>

                <div className='stats_content' >
                    <div className='stats_rows' >
                        {
                            stockData.map( (stock)=>(
                                <StatsRow
                                    key={stock.name}
                                    name={stock.name}
                                    openprice={stock.o}
                                    price={stock.c}
                                />
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
