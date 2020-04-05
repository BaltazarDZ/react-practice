import React from 'react';
import Header from '../components/Header';
import Column from '../components/Column';

const Home = () => {
    return (
        <div>
            <div className='content'>
                <Header heading='Home view'/>
                <div class="row">
                    <Column />
                </div>
            </div>
        </div>
    );
}

export default Home;