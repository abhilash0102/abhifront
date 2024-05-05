import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Dash2 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <AppBar position="static" color='' elevation={0}>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT8wj6UxwpLeo_c-NBeGR56ioJYn_qVKgbZZ6IfyD9ZzcrW9DP3CIrXj-TY5oiMRiJ3HIMV4VhGxf6JEgqGLOI6ADmesG1VOEZrJ-L0hKfI0rmzod7Tqok9J-7fcvNfHtR04bVUwU5JtfTFfGiz_lhmLwpba7s1s5Gu5Grq9jeoSIxXgsTSK4ydEolITc/s320/IMG-20240417-WA0060.jpg"
              sx={{ width: 60, height: 60 }}
            />
          </Stack>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily:'-moz-initial', fontSize:50}}>
            FUSION FOOD
          </Typography>
          <Button color="inherit"> 
            <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'white' }}>
              Signup
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/Login'} style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL7sQtepLWnm0mgxBfTQZ6wbutRrTsNi9_RDndybyf4AVeH7mncvlOLyWdGUzM7mnKxAg1RgW9ByXfNh4Zy1gx5cjMVtsefrB5FP-u4ouPpefdnGsMl-H34nf6nV3U-oJx7HTe08MTW3D6_SRsIne9L-MWS0dSL2kCz8sEA6vYBRoI2KDtVlnZnfjErlA/w640-h312/WhatsApp%20Image%202024-05-02%20at%2011.44.19%20AM%20(2).jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Adjust the height as needed
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
};

export default Dash2;
