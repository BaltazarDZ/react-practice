import React, {useState} from 'react';

const Dropdown = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div onClick={() => setOpen(!open)} className="dropbtn">Battle</div>

            {open &&
            <div id="myDropdown" className="dropdown-content show">
                <a href="#abyss">Abyss</a>
                <a href="#automaton-tower">Automaton Tower</a>
                <a href="#hall-of-trials">Hall of Trials</a>
                <a href="#hunt">Hunt</a>
                <a href="#labyrinth">Labyrinth</a>
                <a href="#spirit-altar">Spirit Altar</a>
                <a href="#side-story">Side Story</a>
            </div>}
        </div>
    )
}

export default Dropdown;