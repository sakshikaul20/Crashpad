// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Grid } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

// const PropertyCard = ({ property }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={property.imageUrl}
//         alt="Property image"
//       />
//       <CardContent>
//         <Typography variant="subtitle1" component="h2">
//           {property.title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           <LocationOnIcon fontSize="small" />
//           {`${property.distance} kilometers away`}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           {property.dateRange}
//         </Typography>
//         <Typography variant="h6" color="textPrimary">
//           {`$${property.price} night`}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteBorderIcon />
//         </IconButton>
//         <IconButton aria-label="rating">
//           <StarBorderIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

// const PropertyGrid = ({ properties }) => {
//   return (
//     <Grid container spacing={4}>
//       {properties.map((property, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
//           <PropertyCard property={property} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// // Example usage:
// const properties = [
//   // Replace with actual property data
//   {
//     title: 'MV, Maldives',
//     imageUrl: '/path-to-maldives', 
//     distance: '600miles',
//     daterange: '4/4/2020',
//     price: '$90'
//   }
// ]

import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, CardActions, Badge } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Mock data for the properties
const properties = [
  // Repeat this object or replace with actual data to fill the grid
  {
    title: "MV, Maldives",
    distance: "2,776 kilometers away",
    dateRange: "23-28 June",
    price: "$100",
    imageUrl: "path-to-your-image", // replace with the path to your image
    isNew: true,
    rating: "New",
  },
  // ...more properties
];

const PropertyCard = ({ property }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={property.imageUrl}
      alt={property.title}
    />
    <CardContent>
      <Typography gutterBottom variant="body1" component="div">
        {property.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {property.distance}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {property.dateRange}
      </Typography>
      <Typography variant="h6">
        {property.price} / night
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteBorderIcon />
      </IconButton>
      <Badge badgeContent={property.rating} color="primary">
        <StarBorderIcon />
      </Badge>
    </CardActions>
  </Card>
);

const PropertyGrid = () => (
  <Grid container spacing={2} sx={{marginLeft: '150px'}}>
    {properties.map((property, index) => (
      <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
        <PropertyCard property={property} />
      </Grid>
    ))}
  </Grid>
);

export default PropertyGrid;

