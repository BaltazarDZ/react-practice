import React from 'react';
import Header from '../components/Header';
import Column from '../components/Column';

const DifferentView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Different view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default DifferentView;