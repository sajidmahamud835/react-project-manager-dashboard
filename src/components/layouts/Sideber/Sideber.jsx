import { BusinessCenter, Dashboard, Payment, Person, VerifiedUser } from '@mui/icons-material';
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import './Sideber.scss';
const userProjects = [
    {
        name: 'Project 1',
        id: '1',
        link: '/project/1'
    },
    {
        name: 'Project 2',
        id: '2',
        link: '/project/2'
    },
    {
        name: 'Project 3',
        id: '3',
        link: '/project/3'
    }
];

const Sideber = () => {
    return (
        <aside>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<Dashboard />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <SubMenu title="Projects" icon={<BusinessCenter />}>
                        {userProjects.map(project => (
                            <MenuItem key={project.id}>
                                <Link to={project.link}>{project.name}</Link>
                            </MenuItem>
                        ))}
                        <MenuItem>
                            <Link to="/projects">All Projects</Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Payment" icon={<Payment />}>
                        <MenuItem>
                            <Link to="/payment/history">History</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/payment/withdraw">Withdraw</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/payment/update">Payment Methods</Link>
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<Person />}>
                        <Link to="/profile">My Profile</Link>
                    </MenuItem>
                    <MenuItem icon={<VerifiedUser />}>
                        <Link to="/kyc">KYC Verification</Link>
                    </MenuItem>
                </Menu>

            </ProSidebar>
        </aside>
    );
};

export default Sideber;