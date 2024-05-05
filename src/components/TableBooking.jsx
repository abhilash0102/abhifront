import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const TableBooking = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State variables to store user input
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    numberOfPeople: 1,
    date: '',
    time: ''
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send booking details to the backend
    await axios.post('http://localhost:3006/api/bookings', bookingDetails)
      .then(() => {
        console.log('Booking Details:', bookingDetails);
        alert('Booking successful!');
      })
      .catch((error) => {
        console.error('Error booking table:', error);
        alert('Error booking table. Please try again.');
      });
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  // Function to navigate to view booked tables
  const handleViewBookings = () => {
    navigate('/view-bookings'); // Redirect to view booked tables page
  };

  return (
    <Box
      sx={{
        background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh38KLkK4jmGwzAjYCuN3NI65AbIiNGhLky-pYg-syEsU7K_Nb-BhHa7ZbA1qnJqMKXFkA3Myl0Zx-kPkg1s9uEkCwPexi_K9lddkN9HbT76ONrVKPcR0leSjd-esobvdtkmvQYZHURqXDPn5lE9D7YnUDTNa6tLMrTx-JSge4Xylec-9wwmm9NcqOi4TQ/w640-h366/pixlr-image-generator-83a9f001-fb09-40e9-a3bf-377867e992a8.png")',
        backgroundSize: 'cover',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px'
      }}
    >
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.9)',
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
          Table Reservation
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Name'
            variant='standard'
            name='name'
            value={bookingDetails.name}
            onChange={handleInputChange}
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
            label='Number of People'
            variant='standard'
            type="number"
            name='numberOfPeople'
            value={bookingDetails.numberOfPeople}
            onChange={handleInputChange}
            min="1"
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
            // label='Date'
            // variant='standard'
            type="date"
            name='date'
            value={bookingDetails.date}
            onChange={handleInputChange}
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
            // label='Time'
            // variant='standard'
            type="time"
            name='time'
            value={bookingDetails.time}
            onChange={handleInputChange}
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
            Book Table
          </Button>
        </form>
        <Button
          variant='contained'
          color='primary'
          onClick={handleViewBookings}
          fullWidth
          sx={{ marginTop: '10px' }}
        >
          View Booked Tables
        </Button>
      </Box>
    </Box>
  );
}

export default TableBooking;
