import { Grid, Box, Typography, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import companylogo from '../../../images/companylogo.jpg';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'black', color: 'gray', mt: 8 }}>
            <Container>
                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', textAlign: 'left', paddingTop: '40px' }}>
                    <Grid item xs={6} md={3}>
                        <img style={{ width: '51%', display: 'block' }} src={companylogo} alt="" />
                        <Typography variant="sx" style={{ color: 'lightGray', fontSize: '18px' }}>
                            1/3, toms road, florida, <br />
                            USA.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Our Story</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Review</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Blog</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Affiliate Program</Link>
                    </Grid>
                    <Grid item xs={6} md={3} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Brands</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Collection</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>New</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Bonus</Link>

                    </Grid>
                    <Grid item xs={6} md={3} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Terms and Condition</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Privacy Policy</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Contact Us</Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'lightGray' }}>Refund Policy</Link>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="gray" sx={{ py: 5 }}>
                    © 2099 Manual Wind Watches Inc.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;