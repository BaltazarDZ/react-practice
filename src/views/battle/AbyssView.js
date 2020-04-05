import React from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';

const AbyssView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Abyss view'/>
                <div className="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default AbyssView;