import React from 'react';
import { Button, Grid, Typography, Card, CardContent, CardActions, CardMedia, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, price, image, description } = product;
    const location = useLocation().pathname;

    const handleUpdate = () => {
        alert("It is optional work for assignment");
    }

    // delete a product from database
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {
            fetch(`https://glacial-forest-82707.herokuapp.com/products/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product deleted successfully');
                    }
                })
        }
    }

    return (
        <Grid item xs={12} sm={12} md={4} style={{ display: 'flex' }}>
            <Card elevation={7} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <CardMedia
                    style={{ height: '175px', width: 'auto', margin: '0 auto', paddingTop: '10px' }}
                    component="img"
                    image={image}
                    alt="image here"
                />
                <CardContent sx={{ paddingTop: '5px' }}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontWeight: 'bold' }}>
                        Price: $ {price}
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: 'left' }}>
                        {description.slice(0, 116)}...
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        location === "/dashboard/manageProducts" ?
                            <Box >
                                <Button onClick={handleDelete} variant="contained" style={{ marginRight: '15px' }}>Delete</Button>
                                <Button onClick={handleUpdate} variant="contained">Update</Button>
                            </Box> :
                            <Link to={`/placeorder/${_id}`} style={{ textDecoration: 'none' }}><Button style={{ margin: '0 auto' }} variant="contained">Buy Now</Button></Link>
                    }
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;