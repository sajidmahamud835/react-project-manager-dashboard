import React from 'react';
import FeaturedCardGrid from '../../components/FeaturedCardGrid/FeaturedCardGrid';
import { BusinessCenter } from '@mui/icons-material';
import EarningsChart from '../../components/EarningsChart/EarningsChart';
import UserAnalytics from '../../components/UserAnalytics/UserAnalytics';

const Dashboard = () => {
    return (
        <section>
            <h1>Dashboard</h1>

            <FeaturedCardGrid data={[
                {
                    id: 1,
                    title: '5',
                    subtitle: 'Open Projects',
                    Icon: BusinessCenter,
                },
                {
                    id: 2,
                    title: '100%',
                    subtitle: 'Project Completaion Rate',
                    Icon: BusinessCenter,
                },
                {
                    id: 3,
                    title: '500$',
                    subtitle: 'Balance',
                    Icon: BusinessCenter,
                },

            ]} />

            <UserAnalytics />

        </section>
    );
};

export default Dashboard;