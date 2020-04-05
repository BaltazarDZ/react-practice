import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Column from './components/Column';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='content'>
        <Header />
        <div class="row">
          <Column/>
        </div>
      </div>
    </div>
  );
}

export default App;
