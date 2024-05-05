import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ViewBookedTables = () => {
  // State variable to store booked tables
  const [bookedTables, setBookedTables] = useState([]);

  // Function to fetch booked tables data from the backend
  const fetchBookedTables = async () => {
    const response = await axios.get('http://localhost:3006/api/bookings');
    setBookedTables(response.data);
  };

  // Fetch booked tables data on component mount
  useEffect(() => {
    fetchBookedTables();
  }, []);

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
        }}
      >
        <Typography variant='h4' color="textSecondary" gutterBottom>
          Booked Tables
        </Typography>
        {bookedTables.length === 0 ? (
          <Typography variant="body1">No tables booked.</Typography>
        ) : (
          <List>
            {bookedTables.map((table, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={table.name}
                  secondary={`Date: ${table.date}, Time: ${table.time}, Number of People: ${table.numberOfPeople}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}

export default ViewBookedTables;
