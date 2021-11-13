import { Button, Card, CardActions, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user, isLoading } = useAuth();

    const initialData = { customerName: user.displayName, email: user.email, phone: '' };
    const [orderData, setOrderData] = useState(initialData);

    useEffect(() => {
        fetch(`https://glacial-forest-82707.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    // get order informatino and set to state
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...orderData };
        newOrder[field] = value;
        setOrderData(newOrder);
    }

    // submit a order to database
    const handleOrderSubmit = e => {
        const orderInfo = {
            ...orderData,
            productRef: product._id,
            productName: product.name,
            image: product.image,
            status: 'pending',
            orderTime: new Date().toDateString()
        }

        fetch('https://glacial-forest-82707.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                }
            })
        console.log(orderInfo)

        e.target.reset();
        orderData.phone = '';
        orderData.address1 = '';
        orderData.address2 = '';
        e.preventDefault();
    }

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant="h4">
                Confirm your order
            </Typography>
            {!isLoading && <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Your selected product:</Typography>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{ textAlign: 'left' }}>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontWeight: 'bold' }}>
                                Price: $ {product.price}
                            </Typography>
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="customerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                        />
                        <TextField
                            id="standard-basic"
                            label="Address1"
                            variant="standard"
                            name="address1"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            id="standard-basic"
                            label="Address2"
                            variant="standard"
                            name="address2"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            id="standard-basic"
                            label="Phone number"
                            variant="standard"
                            name="phone"
                            onBlur={handleOnBlur}
                        />
                        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Submit</Button>
                    </form>
                </Grid>
            </Grid>}
            {isLoading && <CircularProgress color="success" />}
        </Container>
    );
};

export default PlaceOrder;