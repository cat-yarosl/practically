import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {collapsed ? '' : 'Collapse'}
            </button>
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