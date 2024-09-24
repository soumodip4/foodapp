import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profile_details } from '../../Redux/AuthSlice';
import {
    Container,
    Paper,
    Typography,
    Avatar,
    Box,
    Grid,
  } from '@mui/material';

const ProfileD = () => {
    const { profile } = useSelector((s) => s. contents);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profile_details());
    }, [dispatch]);
    // if (!Array.isArray(profile)) {
    //     return <div>No profile data available.</div>;
    // }

    return (
        <div>
            <Container maxWidth="sm" sx={{ mt: 7, mb:7 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            alt={profile?.first_name}
            src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profile?.profile_pic}`}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          {profile?.first_name} {profile?.last_name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1"><strong>Email:</strong> {profile?.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
               
           
        </div>
    );
};

export default ProfileD;
