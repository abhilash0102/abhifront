import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md" sx={{color:'white', backgroundImage:'blur'}}>
        <Typography variant="h4" gutterBottom>
          Welcome to Food Fusion
        </Typography>
        <Typography variant="body1" paragraph>
          Where culinary boundaries are meant to be crossed and flavors collide in delightful harmony.
        </Typography>
        <Typography variant="body1" paragraph>
          Located in the vibrant heart of [City/Area], Food Fusion is a culinary adventure like no other.
        </Typography>
        <Typography variant="body1" paragraph>
          At Food Fusion, we believe in the power of bringing together diverse culinary traditions to create something truly extraordinary.
          Our menu is a celebration of global flavors, expertly curated to tantalize your taste buds and ignite your senses.
        </Typography>
        <Typography variant="body1" paragraph>
          From Asian-inspired tacos to Mediterranean-infused pasta dishes, our chefs skillfully blend ingredients and techniques from around the world to craft innovative and unforgettable creations.
          Each dish is a symphony of flavors, textures, and colors, inviting you on a journey of culinary exploration with every bite.
        </Typography>
        <Typography variant="body1" paragraph>
          But Food Fusion is more than just a restaurant; it's a melting pot of cultures, where food becomes a language that bridges divides and fosters connection.
          Our warm and inviting atmosphere welcomes guests to come together, share stories, and celebrate the universal joy of good food.
        </Typography>
        <Typography variant="body1" paragraph>
          Join us at Food Fusion and embark on a gastronomic voyage that transcends borders and embraces the rich tapestry of global cuisine.
          Here, every meal is an opportunity to experience the beauty of fusion in every flavorful bite.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
