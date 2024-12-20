import './Sidebar.css';
import AdminMenu from '../admin/admin-menu/AdminMenu';
import DriverMenu from '../driver/driver-menu/DriverMenu';
import { useAuth0 } from '@auth0/auth0-react';
import { useRole } from '../context/RoleContext.js'

function Sidebar({ className, showSidebar, setShowSidebar }) {

    const role = useRole();

    const handleMenuClick = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className={`sidebar-container ${className}`}>
            <div className="menu-button">
                < i className=' bx bx-menu menu-icon' onClick={handleMenuClick} />
            </div>
            <div className="logo-container">
                <img src="/assets/logo.png" alt="Logo" className='logo-img' />
                <h3>Carolina's Courier Services</h3>
            </div>
            { role === 'admin' ? <AdminMenu /> : <DriverMenu /> }
        </div>
    );
}

export default Sidebar;