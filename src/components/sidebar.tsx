import React from 'react';
import { Link } from 'react-router-dom'

interface SidebarProps {
    collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <hr></hr>
            <ul className={`options ${collapsed ? 'collapsed' : ''}`}>
                <li><Link to='/'>{collapsed ? '' : 'Home'}</Link></li>
                <li><Link to='/about'>{collapsed ? '' : 'About'}</Link></li>
                <li><Link to='/projects'>{collapsed ? '' : 'Projects'}</Link></li>
                <li><Link to='/contact'>{collapsed ? '' : 'Contact'}</Link></li>
            </ul>
            <hr></hr>
        </div>
    );
};

export default Sidebar;