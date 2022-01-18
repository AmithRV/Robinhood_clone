import Logo from '../images/robinhood.svg';
//import { Search } from '@mui/icons-material';
import '../style/Header.css';

function Header()
{
    return(
        <div className="header_wrapper">
            <div className="header_logo">
               <img src={Logo} width={25} alt='logo'/>
            </div>

            <div className='header_search'>
                <div className='header_searchContainer'>
                    {/*< Search style={{color:'white'}} />
                    */}<input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header_menuitems'>
                <a href='#'>Free Stocks</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Cash</a>
                <a href='#'>Messages</a>
                <a href='#'>Account</a>
            </div>
            
        </div>
    );
}

export default Header;