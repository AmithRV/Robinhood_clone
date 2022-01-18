import '../style/newsfeed.css';
import LineGraph from './LineGraph';
import TimeLine from './TimeLine';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'
function Newsfeed()
{
    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
      ]);

    return(
        <div className='newsfeed'>
            <div className='newsfeed_container'>
                  <div className='newsfeed_chartsection'>
                      <div className='newsfeed_portfolio'>
                          <h1>$114,656</h1>
                          <p>+$44.63 (+0.04%) Today</p>
                      </div>

                      <div className='newsfeed_chart'>
                          <LineGraph/>
                          <TimeLine/>
                      </div>
                  </div>

                  <div className='newsfeed_buying_section'>
                      <h2> Buying Power</h2>
                      <h2> $4.11 </h2>
                  </div>

                  <div className='newsfeed_marketsection'>
                      <div className='newsdfeed_market_box'>
                          <p>Markets Closed</p>
                          <h1>Happy Thanksgiving</h1>
                      </div>
                  </div>

                  <div className="newsfeed__popularlists__section">
                        <div className="newsfeed__popularlists__intro">
                            <h1>Popular lists</h1>
                            <p>Show More</p>
                        </div>
                        <div className="newsfeed_popularlists_badges">
                        {
                            popularTopics.map((topic) => 
                            (
                                <Chip 
                                    style={{color:' #7B858A', fontWeight:'500',border:'1px solid #31363A'}}
                                    className="topic__badge"
                                    variant="outlined"
                                    label={topic}
                                    avatar={<Avatar src={`https://avatars.dicebear.com/api/bottts/${topic}.svg`}/>}
                                />
                            )
                            )
                        }                                
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Newsfeed;
