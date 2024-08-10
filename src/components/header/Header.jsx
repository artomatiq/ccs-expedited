import './Header.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header() {

    return (
        <div className="header-container">
            <div className="profile-container">
                <div className="profile-pic">
                    <img src='assets/icon.png' alt='profile' />
                </div>
                
            </div>
        </div>
    );
}

export default Header;