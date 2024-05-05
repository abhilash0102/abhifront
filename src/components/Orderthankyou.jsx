import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Orderthankyou = () => {
  return (
    <div style={{ backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiah7X9jXihgnJ60RybdnEHk6ZdVPleku5Ar8d47PBdHlkbxkhMlbHZyx8lawtxAbhBJl8UY91iJUjVCi50PqcpiQ6FlGGLzDlgRPueVEWndSF7TGoQvhvMshERqIUQCIUN0WDWr261vBkYnR1zsnaSqQNdNxQ4YH28cawWlnFYoimo2CR7ITErZ08nlaY/w640-h366/fotor-ai-2024042904615.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h2" style={{ marginBottom: '30px', fontFamily: 'sans-serif', color: 'white' }}>
          <CheckIcon style={{ verticalAlign: 'middle', marginRight: '10px', fontSize: "60px", color: "green" }} />
          THANK YOU FOR YOUR ORDER!!!
        </Typography>
        {/* <Typography variant="h5" style={{ marginBottom: '40px', fontFamily: 'Arial', color: 'white' }}>
          What's next?
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '40px', fontFamily: 'Arial', color: 'white' }}>
          * We will send confirmation of the order and information about its progress by email.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '40px', fontFamily: 'Arial', color: 'white' }}>
          * The order will be processed after your payment is confirmed.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '40px', fontFamily: 'Arial', color: 'white' }}>
          * In case of problems with the payment, you will receive a new link to renew the payment to the email address provided.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '40px', fontFamily: 'Arial', color: 'white' }}>
          * Please feel free to contact us if you have any questions.
        </Typography> */}

        <Button variant="contained" style={{ marginBottom: "40px" }}>
          <Link to={'/Navbar2'} style={{ textDecoration: 'none', color: 'white' }}>BACK TO HOME</Link>
        </Button>
      </div>

      {/* <div style={{ alignSelf: 'flex-end', marginBottom: '50px' }}>
        <img
          src="https://th.bing.com/th/id/R.aa0d0dc83d234f6bc0cd6ece33dac192?rik=%2f28D4njMm0BpXA&riu=http%3a%2f%2fwww.maharajaindiancuisineca.com%2ffiles%2fimages%2fmaharaja-indian-cuisine-circle-bg.png&ehk=xWyp07sKIx3zO7HT21hQcGGLph3N73cUJk%2f3nck2EtI%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          style={{ width: '350px', height: '350px' }} // Adjust width and height here
        />
      </div> */}

      <Box
        sx={{
          width: '300px',
          padding: '20px',
          backgroundColor: 'transparent',
          textAlign: 'center',
        }}
      >
        <Typography variant='body1' color="textSecondary" gutterBottom style={{ fontFamily: 'Arial', color: 'white' }}>
          Follow us on social media:
        </Typography>
        <Box>
          <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ fontSize: '50px', marginRight: '10px', color: '#3b5998' }} />
          </a>
          <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ fontSize: '50px', marginRight: '10px', color: '#c32aa3' }} />
          </a>
          <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ fontSize: '50px', color: '#1da1f2' }} />
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default Orderthankyou;
