import { Dashboard, HeartBroken } from '@mui/icons-material';
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sideber.scss';

const Sideber = () => {
    return (
        <aside>
            <ProSidebar>
                <SidebarHeader>

                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<Dashboard />}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<HeartBroken />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
            </ProSidebar>
        </aside>
    );
};

export default Sideber;