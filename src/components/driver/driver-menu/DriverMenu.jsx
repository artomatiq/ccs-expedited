import '../../admin/admin-menu/AdminMenu.css';

function DriverMenu() {
    return (
        <ul className="driver menu-container">
            <li className="menu-item">
                <i className='bx bx-time-five menu-icon'></i>
                <span className="menu-name">Clock-In</span>
                <span className="menu-hover">Clock-In</span>
            </li>
            <li className="menu-item">
                <i className='bx bx-tachometer menu-icon'></i>
                <span className="menu-name">Dashboard</span>
                <span className="menu-hover">Dashboard</span>
            </li>
            <li className="menu-item">
                <i class='bx bx-dollar menu-icon' ></i>
                <span className="menu-name">Earnings</span>
                <span className="menu-hover">Earnings</span>
            </li>
            <li className="menu-item">
                <i className='bx bxs-report menu-icon'></i>
                <span className="menu-name">Reports</span>
                <span className="menu-hover">Reports</span>
            </li>
            <li className="menu-item">
                <i class='bx bxs-cog menu-icon' ></i>
                <span className="menu-name">Settings</span>
                <span className="menu-hover">Settings</span>
            </li>
            <li className="menu-item logout">
                <i class='bx bx-log-out menu-icon' ></i>
                <span className="menu-name">Logout</span>
                <span className="menu-hover">Logout</span>
            </li>
        </ul>
    );
}

export default DriverMenu;