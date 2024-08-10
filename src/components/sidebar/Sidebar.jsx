import './Sidebar.css';
import AdminMenu from '../admin/AdminMenu/AdminMenu';

function Sidebar({ className, showSidebar, setShowSidebar }) {

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
                <h3>Carolinas Courier Services</h3>
            </div>
            <AdminMenu />
        </div>
    );
}

export default Sidebar;