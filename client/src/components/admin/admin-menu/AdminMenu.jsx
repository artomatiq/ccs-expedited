import './AdminMenu.css';

import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function AdminMenu() {

    const { logout } = useAuth0();

    return (
        <ul className="admin menu-container">
            <Link to='/'>
                <li className="menu-item">
                    <i className='bx bx-tachometer menu-icon'></i>
                    <span className="menu-name">Dashboard</span>
                    <span className="menu-hover">Dashboard</span>
                </li>
            </Link>
            <Link to='/admin/payroll'>
                <li className="menu-item">
                    <i className='bx bx-money-withdraw menu-icon'></i>
                    <span className="menu-name">Payroll</span>
                    <span className="menu-hover">Payroll</span>
                </li>
            </Link>
            <Link to='/admin/reports'>
                <li className="menu-item">
                    <i className='bx bxs-report menu-icon'></i>
                    <span className="menu-name">Reports</span>
                    <span className="menu-hover">Reports</span>
                </li>
            </Link>
            <Link to='/admin/rates'>
                <li className="menu-item">
                    <i className='bx bx-time-five menu-icon'></i>
                    <span className="menu-name">Rates</span>
                    <span className="menu-hover">Rates</span>
                </li>
            </Link>
            <Link to='/admin/settings'>
                <li className="menu-item">
                    <i className='bx bxs-cog menu-icon' ></i>
                    <span className="menu-name">Settings</span>
                    <span className="menu-hover">Settings</span>
                </li>
            </Link>
            <div to='/admin/logout' className='logout' onClick={() => logout({ returnTo: `${window.location.origin}/welcome` })}>
                <li className="menu-item logout">
                    <i className='bx bx-log-out menu-icon' ></i>
                    <span className="menu-name">Logout</span>
                    <span className="menu-hover">Logout</span>
                </li>
            </div>
        </ul>
    );
}

export default AdminMenu;
