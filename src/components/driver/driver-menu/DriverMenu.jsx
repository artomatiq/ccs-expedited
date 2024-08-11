import '../../admin/admin-menu/AdminMenu.css';

function DriverMenu() {
    return (
        <ul className="driver menu-container">
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bx-tachometer menu-icon'></i>
                    <span className="menu-name">Clock</span>
                </a>
                <span className="menu-hover">Clock</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bx-money-withdraw menu-icon'></i>
                    <span className="menu-name">Dashboard</span>
                </a>
                <span className="menu-hover">Dashboard</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bxs-report menu-icon'></i>
                    <span className="menu-name">Earnings</span>
                </a>
                <span className="menu-hover">Earnings</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i class='bx bx-time-five menu-icon'></i>
                    <span className="menu-name">Reports</span>
                </a>
                <span className="menu-hover">Reports</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i class='bx bxs-cog menu-icon' ></i>
                    <span className="menu-name">Settings</span>
                </a>
                <span className="menu-hover">Settings</span>
            </li>
            <li className="menu-item logout">
                <a href='#1'>
                <i class='bx bx-log-out menu-icon' ></i>
                    <span className="menu-name">Logout</span>
                </a>
                <span className="menu-hover">Logout</span>
            </li>
        </ul>
    );
}

export default DriverMenu;