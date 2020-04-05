import React from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';

const HallOfTrialsView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Hall of Trials view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default HallOfTrialsView;