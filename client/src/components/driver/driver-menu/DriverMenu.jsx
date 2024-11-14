import '../../admin/admin-menu/AdminMenu.css';

import { Link } from 'react-router-dom';

function DriverMenu() {
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
            <Link to='/driver/logout'>
                <li className="menu-item logout">
                    <i className='bx bx-log-out menu-icon' ></i>
                    <span className="menu-name">Logout</span>
                    <span className="menu-hover">Logout</span>
                </li>
            </Link>
        </ul>
    );
}

export default DriverMenu;