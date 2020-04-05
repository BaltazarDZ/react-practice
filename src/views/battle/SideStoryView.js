import React from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';

const SideStoryView = () => {
    return(
        <div>
            <div className='content'>
                <Header heading='Side Story view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default SideStoryView;