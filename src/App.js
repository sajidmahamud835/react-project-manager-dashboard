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
                    <Route path="projects" element={<h1>This is all projects</h1>} />
                    <Route path="projects/view/:id" element={<h1>This is single project</h1>} />
                    <Route path="projects/edit/:id" element={<h1>This is edit single project</h1>} />
                    <Route path="profile" element={<h1>This is profile</h1>} />
                    <Route path="settings/changePassword" element={<h1>This is settings for changing password.</h1>} />
                    <Route path="settings/closeAccount" element={<h1>This is settings for closing account.</h1>} />
                    <Route path="payment/history" element={<h1>This is history</h1>} />
                    <Route path="payment/withdraw" element={<h1>This is withdraw</h1>} />
                    <Route path="payment/deposit" element={<h1>This is withdraw</h1>} />
                    <Route path="payment/update" element={<h1>This is payments</h1>} />
                    <Route path="kyc" element={<h1>This is kyc</h1>} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;