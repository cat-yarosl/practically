// src/components/Sidebar.tsx

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {collapsed ? 'Expand' : 'Collapse'}
            </button>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                {/* Add more items here */}
            </ul>
        </div>
    );
};

export default Sidebar;
