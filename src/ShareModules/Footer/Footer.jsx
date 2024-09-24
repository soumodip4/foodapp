import React from 'react';
import "./Footer.css"
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      className='foot'
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container  maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Help Center
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Returns
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Product Recalls
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Accessibility
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Our Story
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Careers
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Press
            </Link>
            <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
              Blog
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              Email: contact@yourwebsite.com
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              Address: 123 Your Street, Your City, Your State, Your Country
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;





