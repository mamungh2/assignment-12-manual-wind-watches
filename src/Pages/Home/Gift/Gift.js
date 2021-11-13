import { Grid, Box, Typography, Button } from '@mui/material';
import React from 'react';
import gift from '../../../images/gift.webp';

const Gift = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{ width: '100%', borderRadius: '0 160px 20px 0' }} src={gift} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                    <Typography variant="h6">Gift your beloved one</Typography>
                    <Typography variant="h4" sx={{ my: 4, fontWeight: 'bold' }}>Helping you find <br /> the perfect gift</Typography>
                    <Typography variant="body1">Find the perfect gift for any occasion thanks to our Gift Finder. Browse the whole collection and filter by style, gender, material, or occasion to find the watch of their dreams.</Typography>
                    <Button variant="contained" sx={{ mt: 4 }}>Get your gift</Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Gift;