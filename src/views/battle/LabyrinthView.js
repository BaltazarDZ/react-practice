import React from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';

const LabyrinthView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Labyrinth view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default LabyrinthView;