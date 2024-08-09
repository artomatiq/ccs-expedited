import './Header.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header({showSidebar, setShowSidebar}) {

    const handleMenuClick = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="header-container">
            <div className="menu-button">
                <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={handleMenuClick}/>
            </div>
            <div className="profile-container">
                <div className="profile-pic">
                    <img src='assets/icon.png' alt='profile' />
                </div>
                
            </div>
        </div>
    );
}

export default Header;