import React from 'react';

const Header = (props) => {
    return (
    <div class="header">
        <h1>{props.heading}</h1>
        <p>Some pretty banner here.</p>
    </div>
    );
}

export default Header;