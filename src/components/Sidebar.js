import React from 'react';

const Sidebar = () => {
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



    return (
        <div className="sidebar">
            <a href="#">Home</a>
            <div className="dropdown">
                <div onClick={() => myFunction()} className="dropbtn">Battle</div>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Abyss</a>
                    <a href="#">Automaton Tower</a>
                    <a href="#">Hall of Trials</a>
                    <a href="#">Hunt</a>
                    <a href="#">Labyrinth</a>
                    <a href="#">Spirit Altar</a>
                    <a href="#">Side Story</a>
                </div>
            </div>
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