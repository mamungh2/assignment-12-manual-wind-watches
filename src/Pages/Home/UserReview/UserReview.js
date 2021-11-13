import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Container } from '@mui/material'
import { Typography, Box } from '@mui/material';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    // fetch data from database
    useEffect(() => {
        fetch('https://glacial-forest-82707.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <Container sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 7, mb: 7 }}>Customer Reviews</Typography>
            <Box style={{ marginBottom: '70px' }}>
                <Carousel>
                    {
                        reviews.map((item) =>
                            <Paper key={item._id} item={item} elevation={10} sx={{ width: '50%', margin: '0 auto', p: 1, backgroundColor: '#D5DBDB' }}>
                                <Typography variant="h5" >{item.customerName}</Typography>
                                <Typography variant="body2">{item.email}</Typography>
                                <Typography variant="body1" style={{ marginBottom: '25px', marginTop: '15px' }}>{item.review}</Typography>
                            </Paper>)
                    }
                </Carousel>
            </Box>
        </Container>
    );
};

export default UserReview;