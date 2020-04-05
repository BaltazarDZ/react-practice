import React from 'react';
import Expander from './Expander';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <a href="#">Home</a>
            <Expander name='Battle' >
            <a href="#abyss">Abyss</a>
                <a href="#automaton-tower">Automaton Tower</a>
                <a href="#hall-of-trials">Hall of Trials</a>
                <a href="#hunt">Hunt</a>
                <a href="#labyrinth">Labyrinth</a>
                <a href="#spirit-altar">Spirit Altar</a>
                <a href="#side-story">Side Story</a>
            </Expander>
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