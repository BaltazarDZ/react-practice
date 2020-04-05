import React from 'react';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <div onClick={props.myFunction} className="dropbtn">Battle</div>
            <div id="myDropdown" className="dropdown-content">
                <a href="#abyss">Abyss</a>
                <a href="#automaton-tower">Automaton Tower</a>
                <a href="#hall-of-trials">Hall of Trials</a>
                <a href="#hunt">Hunt</a>
                <a href="#labyrinth">Labyrinth</a>
                <a href="#spirit-altar">Spirit Altar</a>
                <a href="#side-story">Side Story</a>
            </div>
        </div>
    )
}

export default Dropdown;