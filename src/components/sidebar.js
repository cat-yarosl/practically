// src/components/Sidebar.tsx

import React, { useState } from 'react';
import './sidebar.css';

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
                <li>{collapsed ? '' : 'Home'}</li>
                <li>{collapsed ? '' : 'About'}</li>
                <li>{collapsed ? '' : 'Projects'}</li>
                <li>{collapsed ? '' : 'Contact'}</li>
            </ul>
        </div>
    );
};

export default Sidebar;
