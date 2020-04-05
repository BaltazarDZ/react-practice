import React from 'react';
import Dropdown from './Dropdown';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <a href="#">Home</a>
            <Dropdown />
            <a href="#contact">Pets DD</a>
            <a href="#about">Shop DD</a>
            <a href="#about">Adventure DD</a>
            <a href="#about">Guild DD</a>
            <a href="#about">Sanctuary L</a>
            <a href="#about">Summon L</a>
            <a href="#about">Reputation L</a>
            <a href="#about">Hero DD</a>
            <a href="#about">Secret Shop L</a>
            <a href="#about">Arena L</a>
        </div>
    );
}

export default Sidebar;