import { Button, Card, CardActions, CardContent, Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to delete this order?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
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

    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))

        order.status = "approved";
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order status update successfully');
                    setOrder({});
                }
            })
    }

    return (
        <Container>
            <Typography variant="h4" component="div">
                Manage all Orders
            </Typography>
            <Grid container spacing={2}>
                {
                    orders.map(order =>
                        <Grid key={order._id} item xs={12} sm={12} md={12}>
                            <Card elevation={7} style={{ display: 'flex', marginTop: '25px', flexDirection: 'row', padding: '6px', justifyContent: 'space-between' }}>
                                <CardContent style={{ textAlign: 'left' }}>
                                    <Typography variant="h6" component="div">
                                        Order Id: {order._id}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} component="div">
                                        Customer Name: {order.customerName}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} component="div">
                                        Email: {order.email}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} component="div">
                                        Phone Number: {order.phone}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} component="div">
                                        Product Name: {order.productName}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 18 }} component="div">
                                        Order Status: {order.status}
                                    </Typography>
                                    <Box>
                                        <Button onClick={() => handleDeleteOrder(order._id)} variant="contained" style={{ marginRight: '5px' }}>Delete</Button>
                                        <Button onClick={() => handleUpdateStatus(order._id)} variant="contained">Update Status</Button>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;