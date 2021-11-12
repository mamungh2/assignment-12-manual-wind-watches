import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({});

    // get product data from input field and set to state
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...productData };
        newProduct[field] = value;
        setProductData(newProduct);
    }

    // function for submitting a product to database
    const handleProductSubmit = e => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('product added success');
                    e.target.reset();
                }
            })

        e.preventDefault();
        console.log(productData);
    }
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Add Product</Typography>
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={8}>
                    <form onSubmit={handleProductSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Product Name"
                            variant="standard"
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Price"
                            variant="standard"
                            name="price"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-multiline-static"
                            label="Product Description"
                            multiline
                            rows={4}
                            name="description"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Image URL"
                            variant="standard"
                            name="image"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;