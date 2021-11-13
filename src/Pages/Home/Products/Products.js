import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation().pathname;
    const { isLoading } = useAuth();

    // get products from database
    useEffect(() => {
        fetch('https://glacial-forest-82707.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <Container >
            <Typography variant="h3" sx={{ mt: 7, mb: 5 }}>{location === '/' ? "Our Collections" : "Our all Collections"}</Typography>
            {!isLoading && <Grid container spacing={2} >
                {
                    location === '/' ? products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>) :
                        products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Grid>}
            {isLoading && <CircularProgress color="success" />}
        </Container>
    );
};

export default Products;