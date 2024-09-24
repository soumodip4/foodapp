import React,{useEffect} from 'react'
// import AddProducts from '../Crud/AddProducts'
// import ProfileD from '../profile/Profile'
import "./Contact.css"
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import {Button} from '@mui/material';

// import Aos from 'aos'
// import 'aos/dist/aos.css';


const Contact = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 2000,
  //   });
  // }, []);
  return (
    <>

<div className="contact-banner">
  <h1>Contact Us</h1>
</div>
    <div>

      {/* <ProfileD/> */}
      {/* <h2>this sis content</h2> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335868.31742264336!2d2.45992!3d48.877825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1719495752732!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   
    <Box className="mainBox">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className="formBox">
            <Box component="form">
              <TextField
                className="textField"
                id="name"
                label="Name"
                variant="filled"
                InputProps={{ className: 'customInput' }}
                fullWidth
              />
            </Box>
            <Box component="form">
              <TextField
                className="textField"
                id="email"
                label="Email"
                variant="filled"
                InputProps={{ className: 'customInput' }}
                fullWidth
              />
            </Box>
            <Box component="form">
              <TextField
                className="textField"
                id="subject"
                label="Subject"
                variant="filled"
                InputProps={{ className: 'customInput' }}
                fullWidth
              />
            </Box>
            <Button className='submit'>Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="contactInfo">
            <h2>Contact Information</h2>
            <p>Address: 1234 Main St, Anytown, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@example.com</p>
          </Box>
        </Grid>
      </Grid>
    </Box>


    
    
    </>
  )
}

export default Contact
