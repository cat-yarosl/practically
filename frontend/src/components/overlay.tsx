import React from 'react';

interface OverlayProps {
    collapsed: boolean;
    onCloseSidebar: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ collapsed, onCloseSidebar }) => {
    return (
        <div onClick={onCloseSidebar} className={`overlay ${collapsed ? '' : 'active'}`}></div>
    );
};

export default Overlay;