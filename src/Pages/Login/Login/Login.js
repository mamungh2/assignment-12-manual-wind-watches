import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import login from '../../../images/login.jpg';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, loginUser, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={6} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            type="password"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New user? Please register</Button></NavLink>
                        <p>---------------or----------------</p>
                        <Button sx={{ width: '75%', m: 1 }} variant="contained">Google sing in</Button>
                    </form>}
                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;