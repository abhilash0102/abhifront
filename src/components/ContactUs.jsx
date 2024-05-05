import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactUs = () => {
    return (
        <Box
            sx={{
                width: '300px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                textAlign: 'center'
            }}
        >
            <Typography variant='h4' color="textSecondary" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant='body1' color="textSecondary" gutterBottom>
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
    );
}

export default ContactUs;
