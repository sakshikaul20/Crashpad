import React, { useState} from 'react';
import { styled } from '@mui/material/styles';
import SideNav from '../components/NavBar/SideNav.tsx';
import Header from '../components/Header.tsx';
import Map from './images/map.png';
import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import StreetViewIcon from '@mui/icons-material/Streetview';
import SatelliteIcon from '@mui/icons-material/Satellite';




//Styled components for the root container
const RootContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
      
});

const ContentContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
});

const MapContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
});

const MapOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    pointerEvents: 'none', // Ensure the overlay doesn't interfere with clicking on the map
});

const MapFilter = styled('div')({
    background: 'rgba(255, 255, 255, 0.7)', // Example background color for the filter
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
});

const ZoomControl = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    pointerEvents: 'auto', // Allow clicking on the zoom controls
});

// const ZoomControl = styled('div')({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px',
//     pointerEvents: 'none', // Ensure the zoom controls don't interfere with clicking on the map
// });

const Maps: React.FC = () => {
    const navigateToHprofile = () => {
        window.location.href = '/hprofile';
    };

    // State for controlling the view mode (list or map)
    const [viewMode, setViewMode] = useState<'list' | 'map'>('map');

    // Function to toggle between list and map view
    const handleViewModeChange = (event: React.MouseEvent<HTMLElement>, newViewMode: 'list' | 'map') => {
        if (newViewMode !== null) {
            setViewMode(newViewMode);
        }
    };

    return (
        <RootContainer>
            <Header />
            <SideNav />
            <ContentContainer>
                <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={handleViewModeChange}
                    style={{ position: 'absolute', top: '10px', left: '10px' }}
                >
                    <ToggleButton value="list">List</ToggleButton>
                    <ToggleButton value="map">Map</ToggleButton>
                </ToggleButtonGroup>
                <MapContainer>
                    <img src={Map} alt="Map" width="100%" height="100%" />
                    <MapOverlay>
                        <MapFilter>Map Filter</MapFilter>
                        <ZoomControl>
                            <ZoomInIcon />
                            <ZoomOutIcon />
                            <StreetViewIcon />
                            <SatelliteIcon />
                        </ZoomControl>
                    </MapOverlay>
                </MapContainer>
                <button onClick={navigateToHprofile}>Back to Profile</button>
            </ContentContainer>
        </RootContainer>
    );
};

export default Maps;