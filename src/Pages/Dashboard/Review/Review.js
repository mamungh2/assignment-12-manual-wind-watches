import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const initialData = { customerName: user.displayName, email: user.email };
    const [reviewData, setReviewData] = useState(initialData);
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...reviewData };
        newReview[field] = value;
        setReviewData(newReview);
    }

    // handle review of user
    const handleReviewSubmit = e => {
        fetch('https://glacial-forest-82707.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <Grid item xs={12} md={12}>
                {success && <Alert severity="success">Review submitted successfully!</Alert>}
                <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        label="Your Name"
                        variant="standard"
                        sx={{ width: '50%' }}
                        name="customerName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        type="email"
                        sx={{ width: '50%' }}
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                    />
                    <TextField
                        label="Write Your Review here ..."
                        variant="standard"
                        multiline
                        rows={4}
                        sx={{ width: '50%', mb: 2 }}
                        name="review"
                        id="outlined-multiline-static"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" variant="contained" sx={{ width: '50%' }}>Submit</Button>
                </form>
                { }

            </Grid>
        </Container>
    );
};

export default Review;