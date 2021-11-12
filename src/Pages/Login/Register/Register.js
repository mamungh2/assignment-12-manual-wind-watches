import { Alert, Button, Container, Grid, TextField, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    // set register data to state
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    // handle registration a user
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Password does not match');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
    }

    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Name"
                                variant="standard"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                name="email"
                                type="email"
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
                            <TextField
                                type="password"
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype password"
                                variant="standard"
                                name="password2"
                                onBlur={handleOnBlur}
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already registered? Please login</Button></NavLink>
                        </form>}
                        {isLoading && <CircularProgress color="success" />}
                        {user?.email && <Alert severity="success">User created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;