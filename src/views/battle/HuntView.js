import React from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';

const HuntView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Hunt view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default HuntView;