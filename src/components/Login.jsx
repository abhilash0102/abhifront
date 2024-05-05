import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = () => {
    // Implement your login logic here
    console.log("Login button clicked");
  };

  return (
    <div style={{ 
      background: 'url("https://twincitieskidsclub.com/wp-content/uploads/2020/01/AdobeStock_279757406-scaled.jpeg")', // Add your background image here
      backgroundSize: 'cover',
      // backdropFilter: 'blur(8px)', // Add blur effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Box
        height={400}
        width={300}
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={4}
        p={7}
        bgcolor="white" // Add transparency
        boxShadow={3} // Add shadow for 3D effect
        borderRadius={16} // Add rounded corners
      >
        <Typography variant='h4' color={"dimgray"}>
          LOGIN PAGE
        </Typography>
        <TextField label='mobile number' variant='outlined'  />
        <TextField id="outlined-password-input"
          label="Password"
          type="password"  />
        <Button 
          variant='contained' 
          color='secondary' 
          onClick={handleSubmit} // Add onClick handler
          component={Link} // Wrap Link around the button
          to={'/Home5'} // Specify the destination route
          style={{ textDecoration: 'none', color: 'white' }}
        >
          LOGIN
        </Button><br/>
        <Typography variant='h6' color={'dimgray'}><Link to={'/Signup'} > don't have an account</Link></Typography>
      </Box>
    </div>
  );
}

export default Login;
