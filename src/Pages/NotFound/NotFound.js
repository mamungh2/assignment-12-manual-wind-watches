import { Container, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Container>
            <Typography variant="h1" sx={{ fontSize: 200, fontWeight: 'bold', color: 'red' }}>404</Typography>
            <Typography variant="h2">Sorry, Page not found</Typography>
        </Container>
    );
};

export default NotFound;