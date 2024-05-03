import React from "react";
import Nav from '../NavBar/SideNav.tsx';
import UserSettings from "../Dashboard/UserSettings.tsx";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HUserProfile from "./HUserProfile.tsx";
import BasicTabs from "./Tabs.tsx";




const hprofile: React.FC = () => {

    return (
        <>
          <UserSettings></UserSettings>
          <Nav></Nav>
          <Box sx={{ flexGrow: 1, m:6, paddingLeft:'5em'}} >
              <Grid container spacing={1}>
                  <Grid item xs={5}>
                      <HUserProfile></HUserProfile>
                  </Grid>
                 
              </Grid>
            <BasicTabs></BasicTabs>
          </Box>
        </>
    );
}

export default hprofile;