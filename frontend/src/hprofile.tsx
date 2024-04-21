import React from "react";
import Nav from './components/SideNav.tsx';
import Header from "./components/Header.tsx";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HUserProfile from "./components/HUserProfile.tsx";
import BasicTabs from "./components/Tabs.tsx";
import Hprofile from './components/Hprofile.tsx'



const hprofile: React.FC = () => {

    return (
        <>
          <Header></Header>
          <Nav></Nav>
          <Box sx={{ flexGrow: 1, m:6, paddingLeft:'5em'}} >
              <Grid container spacing={1}>
                  <Grid item xs={5}>
                      <HUserProfile></HUserProfile>
                      {/* <Hprofile></Hprofile> */}
                  </Grid>
                  {/* <Grid item xs={6}>
                      <Accommodation></Accommodation>
                  </Grid> */}
              </Grid>
            <BasicTabs></BasicTabs>
          </Box>
        </>
    );
}

export default hprofile;

