import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const displayName = user.displayName;
    const loggedInUser = { name: displayName };
    const valueArr = Object.values(loggedInUser);

    useEffect(() => {
        fetch('https://glacial-forest-82707.herokuapp.com/orders/byName', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(valueArr)
        })
            .then(res => res.json())
            .then(orders => setOrders(orders))
    }, [orders]);

    return (
        <Container>
            <Typography variant="h4" component="div">
                Manage my orders
            </Typography>
            <Grid container spacing={2}>
                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;