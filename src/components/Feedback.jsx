import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3006/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({
        name: '',
        email: '',
        rating: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <Box
      sx={{
        background: ' url("https://restaurant.eatapp.co/hubfs/1_6JH-c2b39zGkYBrRVmHVOw.jpeg")',
        backgroundSize: 'cover',
        // backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Typography variant='h4' color="textSecondary" gutterBottom>
          Feedback 
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Name'
            variant='outlined'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '10px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <TextField
            label='Email'
            variant='outlined'
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '10px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <TextField
            // label='Rating'
            // variant='outlined'
            select
            name='rating'
            value={formData.rating}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '10px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select rating</option>
            <option value="5">Excellent (5)</option>
            <option value="4">Very Good (4)</option>
            <option value="3">Good (3)</option>
            <option value="2">Fair (2)</option>
            <option value="1">Poor (1)</option>
          </TextField>
          <TextField
            label='Message'
            variant='outlined'
            multiline
            rows={4}
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '20px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <Button
            variant='contained'
            color='secondary'
            type="submit"
            fullWidth
          >
            Submit Feedback
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Feedback;
