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
import logoImage from '../../images/CPlogo1.png';


const StyledListItemIcon = styled(ListItemIcon)({
    justifyContent: 'center', // Center horizontally in the flex container
    minWidth: '0', // Override Material-UI's default minWidth
    marginRight: '55px', // This combined with marginLeft auto will center the icon
    marginLeft: '55px'
  });

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
});

const SideNav: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': { width: 100, boxSizing: 'border-box' },
      }}
    >
      <DrawerHeader>
        <img src={logoImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
      </DrawerHeader>
      <Divider />
      <List>
        {/* Dashboard Link */}
        <ListItem  component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Dashboard" /> */}
        </ListItem>
        {/* Other Links */}
        <ListItem >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Home" /> */}
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Favorites" /> */}
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Messages" /> */}
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Trips" /> */}
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Settings" /> */}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;