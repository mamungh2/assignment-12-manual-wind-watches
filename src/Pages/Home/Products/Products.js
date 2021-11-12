import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation().pathname;

    // get products from database
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <Container >
            <Typography variant="h3" sx={{ mt: 5, mb: 5 }}>{location === '/' ? "Our Collections" : "Our all Collections"}</Typography>
            <Grid container spacing={2} >
                {
                    location === '/' ? products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>) :
                        products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default Products;