import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, CardActions, Box, Collapse } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import cardImage from '../../images/loginBG5.jpg';



// Mock data for a single property, replicated 12 times to simulate a list of properties
const properties = Array(18).fill({
  title: "YS, Teton",
  distance: "2,776 kilometers away",
  dateRange: "23-28 June",
  price: "$100",
  imageUrl: cardImage,
  isNew: true,
  rating: "4.9",
});

const PropertyCard = ({ property }) => (
  <Card sx={{ maxWidth: 345, position: 'relative' }}>
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
 {/* Expandable section */}
 {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
//  <CardContent>
//    {/* Add your additional images, calendar, and reservation info here */}
//    <Typography paragraph>More images and details here...</Typography>
//    {/* Placeholder for a calendar */}
//    <Typography paragraph>Calendar will be here</Typography>
//    {/* Placeholder for reservation info */}
//    <Typography paragraph>Reservation info here...</Typography>
//  </CardContent>
// </Collapse>
// </Card> */}





const PropertyGrid = () => (
  <Grid container spacing={2} sx={{ paddingTop: '16px', paddingLeft: '100px' }}> {/* Adjust paddingLeft according to the width of the side navigation panel */}
    {properties.map((property, index) => (
      <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
        <PropertyCard property={property} />
      </Grid>
    ))}
  </Grid>
);

export default PropertyGrid;



