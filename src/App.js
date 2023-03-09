import React from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import './App.css';
import AddField from './components/AddField';

const App = () => {
    return (
        <div className='App'>
            <div className='xyz'>
                <Header/>
            </div>
            <div className='abc'>
                <Middle/>
            </div>
            <div className='def'>
                <AddField/>
            </div>
        </div>
    );
};

export default App;
