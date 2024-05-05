import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login1() {
  const [inputs, setInputs] = useState({
    onumber: "",
    opass: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginHandler = () => {
    axios.post("http://localhost:3006/login", inputs)
      .then((response) => {
        console.log(response.data);
        if (response.data === "success") {
          navigate('/Navbar2'); // Redirect to dashboard upon successful login
        } else {
          setMessage(response.data);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ 
      background: 'url("https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg")',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Box
        height={310}
        width={300}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={7}
        bgcolor="white" // Transparent background
        boxShadow={3} // 3D effect
        borderRadius={16} // Rounded corners
      >
        <Typography variant='h4' color="dimgray">
          LOGIN PAGE
        </Typography>
        <TextField
          label='Enter mobile number'
          variant='outlined'
          name='onumber'
          value={inputs.onumber}
          onChange={inputHandler}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          name='opass'
          value={inputs.opass}
          onChange={inputHandler}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={loginHandler}
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
        >
          Login
        </Button>
        {message && (
          <Typography variant="body1" color="error" style={{ marginTop: '8px' }}>
            {message}
          </Typography>
        )}
        <Typography variant='body2' color='textSecondary' component={Link} to={'/signup'} style={{ marginTop: '16px', textDecoration: 'none' }}>
          Don't have an account? Sign up here
        </Typography>
      </Box>
    </div>
  );
}

export default Login1;
