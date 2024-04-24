import React, { useState } from 'react';
import { styled, Box, InputBase, ToggleButton, ToggleButtonGroup, IconButton, Paper, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
// Import icons for each toggle
import PoolIcon from '@mui/icons-material/Pool'; // Example icon for swimming pool
import BathtubIcon from '@mui/icons-material/Bathtub'; // Example icon for bathtub
import LocalBarIcon from '@mui/icons-material/LocalBar'; // Replace with your actual icons
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';


// Custom style for the ToggleButtonGroup
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.1),
    border: 0,
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const SearchAndToggleBar = () => {
  const [search, setSearch] = useState('');
  const [selectedToggle, setSelectedToggle] = useState(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const handleViewModeChange = (event: React.MouseEvent<HTMLElement>, newValue: 'list' | 'map') => {
    setViewMode(newValue);
  };

  const handleToggle = (event, newToggle) => {
    setSelectedToggle(newToggle);
  };
  const toggleStyle = {
    '&.MuiToggleButton-root': {
      color: 'black',
      border: 'none',
      marginRight: '8px', 
      '&.Mui-selected': {
        backgroundColor: 'darkorange',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkorange',
        },
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '110px', gap: '8px', backgroundColor: 'white' }}>
      <StyledToggleButtonGroup
        size="small" 
        value={selectedToggle}
        exclusive
        onChange={handleToggle}
        sx={toggleStyle}
      >
        {/* Define buttons for each filter. Replace with your icons and labels. */}
        <ToggleButton value="pool" aria-label="pool" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <PoolIcon />
        </ToggleButton>
        <ToggleButton value="baths" aria-label="baths" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' }, ml: 2 }}>
          <BathtubIcon />
        </ToggleButton>
        <ToggleButton value="bar" aria-label="bar" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <LocalBarIcon />
        </ToggleButton>
        <ToggleButton value="restaurant" aria-label="restaurant" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <RestaurantIcon />
        </ToggleButton>
        <ToggleButton value="wifi" aria-label="wifi" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <WifiIcon />
        </ToggleButton>
        <ToggleButton value="pets" aria-label="pets" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <PetsIcon />
        </ToggleButton>
        <ToggleButton value="car" aria-label="car" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <DirectionsCarIcon />
        </ToggleButton>
        {/* <ToggleButton value="fitness" aria-label="fitness" sx={{ '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: 'darkorange', color: 'white' } }}>
          <FitnessCenterIcon />
        </ToggleButton> */}
      </StyledToggleButtonGroup>
      <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ToggleButtonGroup value={viewMode} exclusive onChange={handleViewModeChange}>
            
            <Link to="../dashboard">
            <ToggleButton value="list">List</ToggleButton>
          </Link>
          <Link to="../map">
            <ToggleButton value="map">Map</ToggleButton>
         
        </Link>
        </ToggleButtonGroup>
        </Box>
      </Box>
    
  );
};

export default SearchAndToggleBar;
