import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled } from "@mui/material/styles";
import logoImage from "../../images/CPlogo.png";

const StyledListItem = styled(ListItem)({
  justifyContent: "center",
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "initial",
  padding: "10px",
});

const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
});

const SideNav: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <DrawerHeader>
        <img
          src={logoImage}
          alt="Logo"
          style={{ width: "80px", maxHeight: "80px" }}
        />
      </DrawerHeader>
      <Divider />
      <List>
        {/* Dashboard Link */}
        <StyledListItem components={Link} to="/dashboard" onClick={handleLogin}>
          <StyledListItemIcon>
            <DashboardIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Dashboard" /> */}
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <HomeIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Home" /> */}
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <FavoriteIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Favorites" /> */}
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <EmailIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Messages" /> */}
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <EventIcon />
          </StyledListItemIcon>
          {/* <ListItemText primary="Trips" /> */}
        </StyledListItem>
        <StyledListItem>
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
