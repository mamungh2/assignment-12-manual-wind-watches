import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from '../../Home/Product/Product';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://glacial-forest-82707.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    return (
        <Container >
            <Typography variant="h3" sx={{ mt: 4, mb: 5 }}>Manage all Products</Typography>
            {!isLoading && <Grid container spacing={2} >
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Grid>}
            {isLoading && <CircularProgress color="success" />}
        </Container>
    );
};

export default ManageProducts;