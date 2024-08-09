import './Sidebar.css';
import AdminMenu from '../admin/menu/Menu';

function Sidebar({className}) {
    return (
        <div className={`sidebar-container ${className}`}>
            <div className="logo-container">
                <img src="/assets/logo.png" alt="Logo" className='logo-img'/>
                <h3>Carolinas Courier Services</h3>
            </div>
            <AdminMenu/>
        </div>
    );
}

export default Sidebar;