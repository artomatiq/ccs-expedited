import './AdminMenu.css';

function AdminMenu() {
    return (
        <ul className="menu-container">
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bx-tachometer menu-icon'></i>
                    <span className="menu-name">Dashboard</span>
                </a>
                <span className="menu-hover">Dashboard</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bx-money-withdraw menu-icon'></i>
                    <span className="menu-name">Payroll</span>
                </a>
                <span className="menu-hover">Payroll</span>
            </li>
            <li className="menu-item">
                <a href='#1'>
                    <i className='bx bxs-report menu-icon'></i>
                    <span className="menu-name">Reports</span>
                </a>
                <span className="menu-hover">Reports</span>
            </li>
        </ul>
    );
}

export default AdminMenu;