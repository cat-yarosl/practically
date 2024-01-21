import React from 'react';

interface OverlayProps {
    collapsed: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ collapsed }) => {
    return (
        <div className={`overlay ${collapsed ? 'active' : ''}`}></div>
    );
};

export default Overlay;