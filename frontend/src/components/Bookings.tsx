import React from "react";
import ResponsiveAppBar from './Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserProfile from "./Booking/UserProfile";
import Accommodation from "./Booking/Accommodation";
import BasicTabs from "./Booking/CustomTabs";
import CurrentBooking from "./Booking/CurrentBooking";


const Booking: React.FC = () => {

    return (
        <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Box sx={{ flexGrow: 1, m:5, }} >
              <Grid container spacing={1}>
                  <Grid item xs={6}>
                      <UserProfile></UserProfile>
                  </Grid>
                  <Grid item xs={6}>
                      <Accommodation></Accommodation>
                  </Grid>
              </Grid>
            <BasicTabs></BasicTabs>
          </Box>
        </>
    );
}

export default Booking;