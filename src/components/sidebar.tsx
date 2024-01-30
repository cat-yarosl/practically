import React from 'react';
import { Link } from 'react-router-dom'

interface SidebarProps {
    collapsed: boolean;
    onLinkClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onLinkClick }) => {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <hr></hr>
            <ul className={`options ${collapsed ? 'collapsed' : ''}`}>
                <li><Link to='/' onClick={onLinkClick}>{collapsed ? '' : '> Home'}</Link></li>
                <li><Link to='/about' onClick={onLinkClick}>{collapsed ? '' : '> About'}</Link></li>
                <li><Link to='/projects' onClick={onLinkClick}>{collapsed ? '' : '> Projects'}</Link></li>
                <li><Link to='/contact' onClick={onLinkClick}>{collapsed ? '' : '> Contact'}</Link></li>
            </ul>
            <hr></hr>
        </div>
    );
};

export default Sidebar;