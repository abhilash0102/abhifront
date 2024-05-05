import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">&copy; 2024 Fusion Food. All rights reserved.</Typography>
    </Box>
  );
};

const Slideshow = () => {
  const [foodOffers, setFoodOffers] = useState([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    // Fetch food offers data from the server
    axios.get("http://localhost:3006/foodOffers")
      .then(response => {
        setFoodOffers(response.data);
      })
      .catch(error => {
        console.error("Error fetching food offers:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex(prevIndex =>
        prevIndex === foodOffers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [foodOffers.length]);

  const handlePaginationClick = index => {
    setCurrentOfferIndex(index);
  };

  return (
    <div style={{
        backgroundImage: 'url("https://www.elizabethannedesigns.com/blog/wp-content/uploads/2011/02/Restaurant-Wedding-Reception.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw', // Make the component width full viewport width
        height: '100vh', // Make the component height full viewport height
        position: 'relative', // Position relative for footer to stick to the bottom
    }}>    
      <Box>
        <Typography variant="h4" align="center" gutterBottom sx={{fontWeight:'bold', fontSize:50, color:'lightblue'}}>
          Special Offers
        </Typography>
        <Box display="flex" justifyContent="center">
          <Box width="70%" maxWidth={600} position="relative">
            {foodOffers.map((offer, index) => (
              <Box
                key={offer.id}
                display={index === currentOfferIndex ? 'block' : 'none'}
                position="absolute"
                width="100%"
              >
                <Link to="/DataView">
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                      src={offer.image}
                      alt={offer.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '8px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                      <Typography variant="h5" gutterBottom>{offer.name}</Typography>
                      <Typography variant="body1">{offer.description}</Typography>
                    </div>
                  </div>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {foodOffers.map((offer, index) => (
            <Button
              key={offer.id}
              onClick={() => handlePaginationClick(index)}
              variant={index === currentOfferIndex ? 'contained' : 'outlined'}
              color="primary"
              style={{ margin: '0 4px' }}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
        <Footer /> {/* Include the Footer component */}
      </Box>
    </div>
  );
};

export default Slideshow;
