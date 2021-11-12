import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import companylogo from '../../../images/companylogo.jpg';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                    <img style={{ width: '125px' }} src={companylogo} alt="" />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Manual Wind Watches
                    </Typography>
                    {
                        !user?.email ? <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></Link> :
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;