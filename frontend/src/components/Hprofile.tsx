import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, TextField, Button } from '@mui/material';
import ProfileImg from '../images/ProfileImg.png'; // Import host profile image

const Hprofile: React.FC = () => {
  // Sample demographic data
  const [demographics, setDemographics] = useState({
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    location: 'New York, USA',
  });

  interface Property {
    image: string;
    description: string;
    // Add other properties as needed
  }

  //  // State to keep track of selected property
  //  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);


   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = event.target;
     setDemographics({ ...demographics, [name]: value });
   };
 
   const handleSaveDemographics = () => {
     // Function to save demographics
     console.log('Demographics saved:', demographics);
     // Here you would typically send the updated demographics to your backend for storage
   };
 
   // Handler to select a property
  //  const handlePropertySelection = (property: any) => {
  //    setSelectedProperty(property);
  //  };

   return (
    <Card>
      <CardHeader
        title="Host Profile"

      />
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={ProfileImg} alt="Host" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <div style={{ marginLeft: '20px' }}>
            <TextField
              label="Name"
              name="name"
              value={demographics.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={demographics.age}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Gender"
              name="gender"
              value={demographics.gender}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Location"
              name="location"
              value={demographics.location}
              onChange={handleInputChange}
              fullWidth
            />
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={handleSaveDemographics} style={{ marginTop: '20px' }}>
          Save Demographics
        </Button>
      </CardContent>

      {/* Display selected property
      {selectedProperty && (
        <CardContent>
          <Typography variant="h6">Selected Property</Typography>
          <div>
            <img src={selectedProperty.image} alt={selectedProperty.description} style={{ width: '100px', height: '100px' }} />
            <Typography>{selectedProperty.description}</Typography>
          </div>
        </CardContent> */}
      {/* )} */}
    </Card>
  );
};

export default Hprofile;
