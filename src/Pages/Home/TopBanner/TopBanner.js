import React from 'react';
import Box from '@mui/material/Box';
import bg from '../../../images/topbanner6.jpg';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    const bannerBg = {
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '480px'
    };
    return (
        <Box style={{ ...bannerBg, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left', paddingLeft: '7%' }}>
            <Box>
                <Typography variant="h4" sx={{ color: '#4caf50' }} component="div" gutterBottom>
                    The Gentleman's
                </Typography>
                <Typography variant="h4" sx={{ color: '#4caf50' }} component="div" gutterBottom>
                    Standard then and now
                </Typography>
                <Typography variant="h6" sx={{ color: 'lightGray', mb: 4 }} component="div" gutterBottom>
                    Precision, sophistication and bold design
                </Typography>
                <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore the Collection</Button></Link>
            </Box>
        </Box>
    );
};

export default TopBanner;