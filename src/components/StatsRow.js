import StockChart from '../images/stock.svg';
import '../style/statsrow.css';

function StatsRow(props)
{
    const percentage = ((props.price - props.openprice)/props.openprice)*100;
    return(
        <div className="row">
            <div className="row_intro">
                <h1>{props.name}</h1>
                <p>{/**props.Volume && (props.volume + "shares") */}200 shares</p>
            </div>

            <div className="row_chart">
                <img src={StockChart} height={16} alt="chart"/>
            </div>

            <div className="row_numbers">
                <p className="row_price">{props.price}</p>
                <p className="row_percentage">+{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    );
}

export default StatsRow;