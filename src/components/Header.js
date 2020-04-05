import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.heading}</h1>
            <p>{props.text ? props.text : 'No custom text given'}</p>
        </div>
    );
}

export default Header;