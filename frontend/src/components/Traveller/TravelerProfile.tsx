import React from "react";
// import ResponsiveAppBar from './Navbar.tsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicTabs from "./CustomTabs.tsx";
import ShowAccomodation from "./ShowAccomodation.tsx";
import ShowUserProfile from "./ShowUserProfile.tsx";
import Nav from '../NavBar/SideNav.tsx';


const Booking: React.FC = () => {

    return (
        <>
          <Nav/>
          <Box sx={{ flexGrow: 1, m:5, marginLeft: '8em'}} >
              <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <ShowUserProfile/>
                  </Grid>
                  <Grid item xs={6}>
                    <ShowAccomodation/>
                  </Grid>
              </Grid>
            <BasicTabs></BasicTabs>
          </Box>
        </>
    );
}

export default Booking;