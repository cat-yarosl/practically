import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Sidebar(collapsed) {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className={`overlay ${collapsed ? 'active' : ''}`}></div>
            <ul className={`options ${collapsed ? 'collapsed' : ''}`}>
                <li><Link to='/'>{collapsed ? '' : 'Home'}</Link></li>
                <li><Link to='/about'>{collapsed ? '' : 'About'}</Link></li>
                <li><Link to='/projects'>{collapsed ? '' : 'Projects'}</Link></li>
                <li><Link to='/contact'>{collapsed ? '' : 'Contact'}</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;