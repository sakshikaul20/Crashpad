import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material/styles';

// Import your logo image here
import logoImage from '../../images/CPlogo.png';


const StyledListItem = styled(ListItem)({
    justifyContent: 'center',
    // '& .MuiListItemIcon-root' : {
    //   minWidth: 'initial'
    // }

  });
  
const StyledListItemIcon = styled(ListItemIcon)({
    // justifyContent: 'center', // Center horizontally in the flex container
    // minWidth: '0', // Override Material-UI's default minWidth
    // marginRight: '55px', // This combined with marginLeft auto will center the icon
    // marginLeft: '55px',
    minWidth: 'initial',
    padding: '10px'

  });

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px'
});

const SideNav: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      // sx={{
      //   width: 240,
      //   '& .MuiDrawer-paper': { width: 140, boxSizing: 'border-box' },
      // }}
    >
      <DrawerHeader>
        {/* <img src={logoImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} /> */}
        <img src={logoImage} alt="Logo" style={{ width: '80px', maxHeight: '80px' }} />
      </DrawerHeader>
      <Divider />
      <List>
        {/* Dashboard Link */}
        <StyledListItem  components={Link} to="/dashboard">
          <StyledListItemIcon>
            <DashboardIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Dashboard" /> */}
        </StyledListItem>
        {/* Other Links */}
        <StyledListItem >
          <StyledListItemIcon>
            <HomeIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Home" /> */}
        </StyledListItem>
        <StyledListItem >
          <StyledListItemIcon>
            <FavoriteIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Favorites" /> */}
        </StyledListItem>
        <StyledListItem >
          <StyledListItemIcon>
            <EmailIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Messages" /> */}
        </StyledListItem>
        <StyledListItem >
          <StyledListItemIcon>
            <EventIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Trips" /> */}
        </StyledListItem>
        <StyledListItem >
          <StyledListItemIcon>
            <SettingsIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Settings" /> */}
        </StyledListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;
