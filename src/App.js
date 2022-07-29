import React from 'react';
import Main from './layouts/Main/Main';
import Sideber from './components/layouts/Sideber/Sideber';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <app>
            <Sideber />
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="about" element={<h1>This is about</h1>} />
                </Route>
            </Routes>
        </app>
    );
};

export default App;