import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Order = ({ order }) => {
    const { _id, customerName, email, phone, productName, status } = order;

    // delete a order 
    const handleDeleteOrder = () => {
        const proceed = window.confirm('Are you sure to delete this order?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully');
                    }
                })
        }
    }

    return (
        <Grid item xs={12} sm={12} md={12}>
            <Card elevation={7} style={{ display: 'flex', marginTop: '25px', flexDirection: 'row', padding: '6px', justifyContent: 'space-between' }}>
                <CardContent style={{ textAlign: 'left' }}>
                    <Typography variant="h6" component="div">
                        Order Id: {_id}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        Customer Name: {customerName}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        Email: {email}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        Phone Number: {phone}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        Product Name: {productName}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        Order Status: {status}
                    </Typography>
                    <Button onClick={handleDeleteOrder} variant="contained">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Order;