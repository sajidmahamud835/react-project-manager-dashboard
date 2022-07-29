import React from 'react';
import Main from './layouts/Main/Main';
import Sideber from './components/layouts/Sideber/Sideber';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='app'>
            <Sideber />
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="dashboard" element={<h1>This is dashboard</h1>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;