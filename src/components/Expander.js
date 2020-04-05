import React, { useState } from 'react';

const Expander = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div onClick={() => setOpen(!open)} className="dropbtn">{props.name}</div>
            {open && props.children}
        </div>
    )
}

export default Expander;