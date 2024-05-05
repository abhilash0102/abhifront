import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const { itemId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save order to the database
    try {
      await axios.post('http://localhost:3006/order', {
        itemId,
        customerName,
        customerAddress
      });
      // Redirect to home page
      navigate('/Orderthankyou');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Order Form
      </Typography>
      <Box
        boxShadow={3} // Shadow effect
        bgcolor="background.paper" // Background color
        p={4} // Padding
        borderRadius={16} // Rounded corners
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Delivery Address"
            variant="outlined"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Place Order
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default OrderForm;
