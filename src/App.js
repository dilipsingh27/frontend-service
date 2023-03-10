import React from 'react';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Register from './screens/Register';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <div className='App' id ="app">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    
                </Routes>               
            </BrowserRouter>
        </div>
    );
};

export default App;
