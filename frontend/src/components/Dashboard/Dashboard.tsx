import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, CardActions, Box, Collapse, Modal, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import cardImage from '../../images/loginBG5.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SideNav from '../NavBar/SideNav.tsx';
import SearchAndToggleBar from './SearchAndToggleBar.tsx';
import UserSettings from './UserSettings.tsx';
import MoreInfoModal from './MoreInfoModal.tsx';
import { useNavigate } from 'react-router-dom';
import properties from './properties.js';



// const properties = Array(12).fill({
//   title: "YS, Teton",
//   distance: "2,776 kilometers away",
//   dateRange: "23-28 June",
//   price: "$100",
//   imageUrl: cardImage,
//   isNew: true,
//   rating: "4.9",
// });
const DetailedModal = ({ property, open, onClose }) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          {property.title}
        </Typography>
        {/* Here you could add more details about the property */}
       
      </Box>
    </Modal>
  );
};

const PropertyCard = ({ property }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Define the function to handle navigation
  const handleNavigate = () => {
    navigate('/propertyreservation', { state: { property } }); // Navigate to the detail page and pass property data via state
  };

  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }} onClick={handleNavigate}>
      <CardMedia
        component="img"
        height="194"
        image={property.imageUrl}
        alt={property.title}
      />
      <IconButton 
        aria-label="add to favorites" 
        sx={{ position: 'absolute', top: 8, right: 8, color: 'grey' }}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            {property.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {property.isNew && (
              <Typography variant="caption" sx={{ backgroundColor: 'orange', color: 'white', borderRadius: 1, p: '2px 4px', marginRight: '8px' }}>
                New
              </Typography>
            )}
           
            <Typography component="span" variant="caption" sx={{ marginLeft: '2px' }}>
              {property.rating}
              <StarBorderIcon />
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {property.distance}
        </Typography>
        <Typography variant="body2" color="text.primary" gutterBottom>
          {property.dateRange}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {property.price} / night
        </Typography>
      </CardContent>
    </Card>
  );
};


// const PropertyGrid = () => (
//   <Grid container spacing={2} sx={{ paddingTop: '16px', paddingLeft: '100px' }}> {/* Adjust paddingLeft according to the width of the side navigation panel */}
//     {properties.map((property, index) => (
//       <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
//         <PropertyCard property={property} />
//       </Grid>
//     ))}
//   </Grid>
// );
const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState(null); // Track the selected property
  const [modalOpen, setModalOpen] = useState(false); // Track if the modal is open

  // Function to handle card click
  const handleCardClick = (property) => {
    setSelectedProperty(property); // Set the clicked property
    setModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: '16px', paddingLeft: '100px' }}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            {/* Add an onClick handler to each PropertyCard */}
            <PropertyCard property={property} onClick={() => handleNavigate} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 , paddingTop: '0px'}}>
        <Button variant="contained" sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }} onClick={() => console.log('Load more properties...')}>
          Show More
        </Button>
      </Box>
    </>
  );
};

// export default PropertyGrid;

const Dashboard = () => {
  return (
    <>
      <SideNav />
      <UserSettings />
      <SearchAndToggleBar />
      <PropertyGrid />
    </>
  );
};


export default Dashboard;



