import '../../admin/admin-menu/AdminMenu.css';

import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function DriverMenu() {

    const { logout } = useAuth0();
    
    return (
        <ul className="driver menu-container">
            <Link to='/driver/clock'>
                <li className="menu-item">
                    <i className='bx bx-time-five menu-icon'></i>
                    <span className="menu-name">Clock-In</span>
                    <span className="menu-hover">Clock-In</span>
                </li>
            </Link>
            <Link to='/driver/dashboard'>
                <li className="menu-item">
                    <i className='bx bx-tachometer menu-icon'></i>
                    <span className="menu-name">Dashboard</span>
                    <span className="menu-hover">Dashboard</span>
                </li>
            </Link>
            <Link to='/driver/earnings'>
                <li className="menu-item">
                    <i className='bx bx-dollar menu-icon' ></i>
                    <span className="menu-name">Earnings</span>
                    <span className="menu-hover">Earnings</span>
                </li>
            </Link>
            <Link to='/driver/reports'>
                <li className="menu-item">
                    <i className='bx bxs-report menu-icon'></i>
                    <span className="menu-name">Reports</span>
                    <span className="menu-hover">Reports</span>
                </li>
            </Link>
            <Link to='/driver/settings'>
                <li className="menu-item">
                    <i className='bx bxs-cog menu-icon' ></i>
                    <span className="menu-name">Settings</span>
                    <span className="menu-hover">Settings</span>
                </li>
            </Link>
            <div to='/driver/logout' className='logout' onClick={() => logout({ returnTo: `${window.location.origin}/welcome` })}>
                <li className="menu-item logout">
                    <i className='bx bx-log-out menu-icon' ></i>
                    <span className="menu-name">Logout</span>
                    <span className="menu-hover">Logout</span>
                </li>
            </div>
        </ul>
    );
}

export default DriverMenu;