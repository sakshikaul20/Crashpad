import React from "react";
import ResponsiveAppBar from './Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicTabs from "./Traveller/CustomTabs";
import ShowAccomodation from "./Traveller/ShowAccomodation";
import ShowUserProfile from "./Traveller/ShowUserProfile";


const Booking: React.FC = () => {

    return (
        <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Box sx={{ flexGrow: 1, m:5, marginLeft: '8em'}} >
              <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <ShowUserProfile></ShowUserProfile>
                  </Grid>
                  <Grid item xs={6}>
                    <ShowAccomodation></ShowAccomodation>
                  </Grid>
              </Grid>
            <BasicTabs></BasicTabs>
          </Box>
        </>
    );
}

export default Booking;