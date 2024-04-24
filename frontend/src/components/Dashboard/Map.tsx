import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Grid,
} from "@mui/material";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
import Map from "../../images/map.png";
import Nav from "../NavBar/SideNav.tsx";
import UserSettings from "./UserSettings.tsx";
import { Link } from "react-router-dom";

const ImageWithControls: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [zoom, setZoom] = useState<number>(100);
  const [imageType, setImageType] = useState<"Sat" | "Def">("Sat"); 

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 10);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(10, prevZoom - 10));
  };

  const handleViewModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "list" | "map"
  ) => {
    setViewMode(newValue);
  };

  const handleImageTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "Sat" | "Def"
  ) => {
    setImageType(newValue);
  };

  const navigateToHprofile = () => {
    window.location.href = "/hostprofile"; 
  };

  return (
    <div>
      <UserSettings></UserSettings>
      <Nav></Nav>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        paddingRight="4em"
        paddingTop={2}
      >
        <Grid item>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
          >
            <Link to="../Dashboard">
              <ToggleButton
                value="list"
                sx={{ height: "30px", padding: "0px 10px" }}
              >
                List
              </ToggleButton>
            </Link>
            <ToggleButton
              value="map"
              sx={{ height: "30px", padding: "0px 10px" }}
            >
              Map
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          paddingLeft: "4em",
          paddingRight: "4em",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
            paddingRight: "4em",
          }}
        >
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                value={imageType}
                exclusive
                onChange={handleImageTypeChange}
              >
                <ToggleButton value="Sat">Sat</ToggleButton>
                <ToggleButton value="Def">Def</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>

          <IconButton onClick={handleZoomIn}>
            <ZoomIn />
          </IconButton>
          <IconButton onClick={handleZoomOut}>
            <ZoomOut />
          </IconButton>
        </div>
        <img
          src={Map}
          alt="Your Image"
          style={{
            width: `${zoom}%`,
            transition: "width 0.5s",
            paddingLeft: "5em",
          }}
        />
      </div>
    </div>
  );
};

export default ImageWithControls;
