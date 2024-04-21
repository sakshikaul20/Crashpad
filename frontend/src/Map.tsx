// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import SideNav from './components/SideNav.tsx';
// import Header from './components/Header.tsx';
// import Map from './images/map.png';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import ZoomOutIcon from '@mui/icons-material/ZoomOut';


// const RootContainer = styled('div')({
//     height: '100vh',
//     width: '100vw',
//     display: 'flex',
//     flexDirection: 'column',
// });
// const ContentContainer = styled('div')({  
//     display: 'flex',
//     flexDirection: 'column',
//     flexGrow: 1, // Grow to fill available space
//     padding: '6rem', // Add padding for spacing
// });

// // const FilterContainer = styled('div')({
// // position: 'absolute',
// // top: 60,
// // right: 15,
// // display: 'flex',
// // padding: '10px',
// // });

// const FilterContainer = styled('div')({  //it works
//     top: 15,
//     right: 15,
//     // display: 'flex',
//     // flexDirection: 'column',
//     // alignItems: 'flex-start',
//     flex: '0 0 auto', // Ensure it doesn't grow or shrink
//     padding: '1rem',
// });

// const MapFilter = styled('div')({
//     background: 'rgba(255, 255, 255, 0.7)', // Example background color for the filter
//     padding: '10px',
//     borderRadius: '5px',
//     marginBottom: '20px',
// });


// const MapContainer = styled('div')({
//     position: 'relative',
//     flex: '1 1 auto', // Allow it to grow and shrink
// });
// const MapOverlay = styled('div')({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     padding: '20px',
//     pointerEvents: 'none', // Ensure the overlay doesn't interfere with clicking on the map
// });


// const LayerControl = styled('div')({
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     display: 'flex',
//     padding: '10px',
//     pointerEvents: 'none', // Ensure the zoom controls don't interfere with clicking on the map
// });

// const ZoomControl = styled('div')({
//     position: 'absolute',
//     top: 60,
//     right: 15,
//     display: 'flex',
//     padding: '10px',
//     pointerEvents: 'none', // Ensure the zoom controls don't interfere with clicking on the map
// });

// const LargeZoomInIcon = styled(ZoomInIcon)({
//     fontSize: '2rem', // Adjust the size as needed
//     marginRight: '10px', // Add some space between icons
// });

// const LargeZoomOutIcon = styled(ZoomOutIcon)({
//     fontSize: '2rem', // Adjust the size as needed
// });

// const Maps: React.FC = () => {
//     const navigateToHprofile = () => {
//         window.location.href = '/hprofile';
//     };

//     // State for controlling the view mode (list or map)
//     const [viewMode, setViewMode] = useState<'list' | 'map'>('map');

//     // Function to toggle between list and map view
//     const handleViewModeChange = (event: React.MouseEvent<HTMLElement>, newViewMode: 'list' | 'map') => {
//         if (newViewMode !== null) {
//             setViewMode(newViewMode);
//         }
//     };

//     return (
//         <RootContainer>
//             <SideNav />
//             <Header />
//             <ContentContainer>
//                 <FilterContainer>
//                     <MapFilter>Map Filter</MapFilter>
//                     <ToggleButtonGroup
//                         value={viewMode}
//                         exclusive
//                         onChange={handleViewModeChange}
//                         style={{ marginRight: 'auto' }}
//                         >
//                         <ToggleButton value="list">List</ToggleButton>
//                         <ToggleButton value="map">Map</ToggleButton>
//                     </ToggleButtonGroup>
//                 </FilterContainer>
//                 <MapContainer>
//                     <img src={Map} alt="Map" width="100%" height="100%" />
//                     <MapOverlay>
//                         <LayerControl>
//                             <ToggleButtonGroup
//                                 value={viewMode}
//                                 exclusive
//                                 onChange={handleViewModeChange}
//                                 style={{ marginRight: 'auto' }}
//                             >
//                                 <ToggleButton value="Sat">Sat</ToggleButton>
//                                 <ToggleButton value="Def">Def</ToggleButton>
//                             </ToggleButtonGroup>
//                         </LayerControl>
//                         <ZoomControl>
//                             <LargeZoomInIcon />
//                             <LargeZoomOutIcon />
//                         </ZoomControl>
//                     </MapOverlay>
//                 </MapContainer>
//                 <button onClick={navigateToHprofile}>Back to Profile</button>
//             </ContentContainer>
//         </RootContainer>
//     );
// };

// export default Maps;

import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, IconButton, Grid } from '@mui/material';
import { ZoomIn, ZoomOut } from '@mui/icons-material';
import Map from './images/map.png';
import SideNav from './components/SideNav.tsx';
import Header from './components/Header.tsx';

const ImageWithControls: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [zoom, setZoom] = useState<number>(100);
  const [imageType, setImageType] = useState<'Sat' | 'Def'>('Sat'); // Initial image type is 'Sat'

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 10);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(10, prevZoom - 10));
  };

  const handleViewModeChange = (event: React.MouseEvent<HTMLElement>, newValue: 'list' | 'map') => {
    setViewMode(newValue);
  };

  const handleImageTypeChange = (event: React.MouseEvent<HTMLElement>, newValue: 'Sat' | 'Def') => {
    setImageType(newValue);
  };

  const navigateToHprofile = () => {
    window.location.href = '/hprofile'; // Change the window location to navigate to hprofile page
  };

  return (
    
    <div>
        <Header></Header>
        <SideNav></SideNav>
      <Grid container justifyContent="flex-end" alignItems="center" paddingRight= '4em' paddingTop={2}>
        <Grid item>
          <ToggleButtonGroup value={viewMode} exclusive onChange={handleViewModeChange}>
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="map">Map</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', paddingLeft: '4em',paddingRight: '4em'}}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1, paddingRight: '4em' }}>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <ToggleButtonGroup value={imageType} exclusive onChange={handleImageTypeChange}>
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
        <img src={Map} alt="Your Image" style={{ width: `${zoom}%`, transition: 'width 0.5s', paddingLeft: '5em' }} />
      </div>
      <button onClick={navigateToHprofile} style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 1 }}>
          Back to Profile
        </button>
    </div>
  );
};

export default ImageWithControls;