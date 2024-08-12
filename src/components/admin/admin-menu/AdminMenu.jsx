import './AdminMenu.css';

import { Link } from 'react-router-dom';

function AdminMenu() {



    return (
        <ul className="admin menu-container">
            <Link to='/'>
                <li className="menu-item">
                    <i className='bx bx-tachometer menu-icon'></i>
                    <span className="menu-name">Dashboard</span>
                    <span className="menu-hover">Dashboard</span>
                </li>
            </Link>
            <Link to='payroll'>
                <li className="menu-item">
                    <i className='bx bx-money-withdraw menu-icon'></i>
                    <span className="menu-name">Payroll</span>
                    <span className="menu-hover">Payroll</span>
                </li>
            </Link>
            <Link to='reports'>
                <li className="menu-item">
                    <i className='bx bxs-report menu-icon'></i>
                    <span className="menu-name">Reports</span>
                    <span className="menu-hover">Reports</span>
                </li>
            </Link>
            <Link to='rates'>
                <li className="menu-item">
                    <i className='bx bx-time-five menu-icon'></i>
                    <span className="menu-name">Rates</span>
                    <span className="menu-hover">Rates</span>
                </li>
            </Link>
            <Link to='settings'>
                <li className="menu-item">
                    <i className='bx bxs-cog menu-icon' ></i>
                    <span className="menu-name">Settings</span>
                    <span className="menu-hover">Settings</span>
                </li>
            </Link>
            <Link to='logout' className='logout'>
                <li className="menu-item logout">
                    <i className='bx bx-log-out menu-icon' ></i>
                    <span className="menu-name">Logout</span>
                    <span className="menu-hover">Logout</span>
                </li>
            </Link>
        </ul>
    );
}

export default AdminMenu;
