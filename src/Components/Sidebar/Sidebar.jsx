import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './index.css'
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

import { Link } from 'react-router-dom';


const Sidebar = ({lightIsOn}) => {
    return (
        <aside id='sidebar'>
            <WbIncandescentIcon className={`lightbulb  ${lightIsOn ? "color-yellow" : ""}`}/>
            <AccountCircleIcon/>
            <div>Name</div>
            <button>Login</button>
            <Link to="/new">
                <button>New Book</button>
            </Link>
            <Link to="/">
                <button>Light Switch</button>
            </Link>
            <Link to="/library">
                <button>View Book</button>
            </Link>
        </aside>
    )
};

export default Sidebar;
