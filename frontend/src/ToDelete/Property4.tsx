import React, { useState }  from 'react';
import { TextField, Button, styled} from '@mui/material';
// import Pad4 from '../images/Pad4.jpg';

const RootContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
      
});

const ContentContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '2em',
    alignItems: 'flex-start',
  });

    const Property = styled('div')({
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
          
    });
    const PropertyDetailsContainer = styled('div')({
        marginRight: '20px',
        width: '50%', // Width for host details
      });

const Property4 = () => {
        // Sample demographic data
    const [demographics, setDemographics] = useState({
        locationName: 'Pad4',
        address: '123 Apple St',
        city: 'Boise',
        state: 'Idaho',
        zipCode: '12345',
        description: 'Quiet country property',
    });
    const navigateToHprofile = () => {
        window.location.href = '/hprofile'; // Change the window location to navigate to hprofile page
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDemographics({ ...demographics, [name]: value });
    };

    const handleSaveDemographics = () => {
        // Function to save demographics
        console.log('Demographics saved:', demographics);
        // Here you would typically send the updated demographics to your backend for storage
    };
    

    return (
        <RootContainer>
            <ContentContainer>
                <PropertyDetailsContainer>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img src={Pad4} alt="Property4" height="350px" width="400px" style={{ alignSelf: 'left'}}/>
                        <div style={{ marginLeft: '20px' }}>
                            <TextField label="Location Name" name="locationName" value={demographics.locationName} onChange={handleInputChange} fullWidth />
                            <div style={{ display: 'flex' }}>
                                <TextField label="Address" name="address" value={demographics.address} onChange={handleInputChange} fullWidth />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <TextField label="City" name="city" value={demographics.city} onChange={handleInputChange} style={{ marginLeft: '1px' }} />
                                <TextField label="State" name="state" value={demographics.state} onChange={handleInputChange} style={{ marginRight: '5px' }} />
                                <TextField label="Zip Code" name="zipCode" type="number" value={demographics.zipCode} onChange={handleInputChange} style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <TextField label="Description" name="description" value={demographics.description} onChange={handleInputChange} fullWidth />   
                            </div>
                            <Button variant="contained" color="primary" onClick={handleSaveDemographics} style={{ marginTop: '20px' }}>
                                Save
                            </Button>
                        </div>
                    </div>
                </PropertyDetailsContainer>
            </ContentContainer>
            <button onClick={navigateToHprofile} style={{ marginLeft: '20px' }} >Back to Profile</button>
        </RootContainer>
)};

export default Property4;