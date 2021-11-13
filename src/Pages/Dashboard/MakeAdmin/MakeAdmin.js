import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    // get email from input field
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // function to update a user admin 
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://glacial-forest-82707.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h3">
                Make a user admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '45%' }}
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {success && <Alert severity="success">Admin creation successful!</Alert>}
        </div>
    );
};

export default MakeAdmin;