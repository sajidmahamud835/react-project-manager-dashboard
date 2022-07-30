import { AccountCircle } from '@mui/icons-material';
import { AppBar, Avatar, createTheme, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../../api/context/useContext';

const Navber = () => {
    const settings = useContext(SettingsContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });
    return (
        <nav>
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" >
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {settings.title}
                            </Typography>
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </nav>
    );
};

export default Navber;