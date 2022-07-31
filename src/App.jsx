import React from 'react';
import Main from './layouts/Main/Main';
import Sideber from './components/layouts/Sideber/Sideber';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Projects from './pages/Projects/Projects';
import ViewProject from './pages/Projects/ViewProject/ViewProject';
import EditProject from './pages/Projects/EditProject/EditProject';
import Profile from './pages/Profile/Profile';
import ChangePassword from './pages/Settings/ChangePassword/ChangePassword';
import CloseAccount from './pages/Settings/CloseAccount/CloseAccount';
import PaymentHistory from './pages/Payment/PaymentHistory/PaymentHistory';
import Withdraw from './pages/Payment/Withdraw/Withdraw';
import Deposit from './pages/Payment/Deposit/Deposit';
import PaymentMethods from './pages/Payment/PaymentMethods/PaymentMethods';
import KycVerification from './pages/KycVerification/KycVerification';
import NotFound from './pages/ErrorPages/NotFound';

const App = () => {
    return (
        <div className='app'>
            <Sideber />
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projects/view/:id" element={<ViewProject />} />
                    <Route path="projects/edit/:id" element={<EditProject />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings/changePassword" element={<ChangePassword />} />
                    <Route path="settings/closeAccount" element={<CloseAccount />} />
                    <Route path="payment/history" element={<PaymentHistory />} />
                    <Route path="payment/withdraw" element={<Withdraw />} />
                    <Route path="payment/deposit" element={<Deposit />} />
                    <Route path="payment/update" element={<PaymentMethods />} />
                    <Route path="kyc" element={<KycVerification />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;