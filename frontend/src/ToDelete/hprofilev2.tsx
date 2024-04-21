import React, { useState, useRef } from 'react';
import { Card, TextField, Button, Typography, styled} from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import ProfileImg from './images/ProfileImg.png'; // Import host profile image
import Hostimg from './images/hostimage.jpg';
import Header from '../components/Header.tsx';
import Pad1 from './images/Pad1.jpg';
import Pad2 from './images/Pad2.jpg';
import Pad3 from './images/Pad3.jpg';
import Pad4 from './images/Pad4.jpg';
import Pad5 from './images/Pad5.jpg';

//Styled components for the root container
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

const HostDetailsContainer = styled('div')({
    marginRight: '20px',
    width: '50%', // Width for host details
  });
  
//   const HostImage = styled('img')({
//     height: '300px',
//     width: '300px',
//     alignSelf: 'left',
//   });
  
//   const HostDetails = styled('div')({
//     marginLeft: '20px',
//   });
  
  const HostPropertyContainer = styled('div')({
    overflow: 'hidden',
    position: 'relative',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
  });

// Define styled components for styling
const PropertyCard = styled(Card)({
    margin: '50px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    flex: '0 0 auto',
    transition: 'transform 0.5s ease',
  });

  const CarouselButton = styled(Button)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  });
  
  const PreviousButton = styled(CarouselButton)({
    left: '-65',
  });
  
  const NextButton = styled(CarouselButton)({
    right: '10px',
  });


  const PastPropertiesContainer = styled('div')({
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '2em',
    borderRadius: '20px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    marginRight: '1em'
  });

  interface Property {
    id: number;
    name: string;
    imageUrl: string;
    link: string;
}

const Hprofile: React.FC = () => {
  // Sample demographic data
  const [demographics, setDemographics] = useState({
    username: 'jdoe02',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'Male',
    location: 'New York, USA',
    description: 'Traveling with family of 7',
  });


  // State to keep track of selected property
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDemographics({ ...demographics, [name]: value });
  };

  const handleSaveDemographics = () => {
    // Function to save demographics
    console.log('Demographics saved:', demographics);
    // Here you would typically send the updated demographics to your backend for storage
  };


  const properties = [
    { id: 1, name: 'Pad1', imageUrl: './images/Pad1.jpg', description: 'Description for Pad1', link: '/property1' },
    { id: 2, name: 'Pad2', imageUrl: './images/Pad2.jpg', description: 'Description for Pad2', link: '/property2' },
    { id: 3, name: 'Pad3', imageUrl: './images/Pad3.jpg', description: 'Description for Pad3', link: '/property3' },
    { id: 4, name: 'Pad4', imageUrl: './images/Pad4.jpg', description: 'Description for Pad4', link: '/property4' },
    { id: 5, name: 'Pad5', imageUrl: './images/Pad5.jpg', description: 'Description for Pad5', link: '/property5' }
    // Add more properties as needed
  ];

  const duplicatedProperties = [...properties, ...properties]; // Duplicate properties for infinite loop

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust scroll amount according to card width
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust scroll amount according to card width
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const pastProperties = [
    { id: 1, name: 'Pad1', imageUrl: './images/Pad1.jpg', description: 'Description for Pad1', link: '/property1' }
    // Add more properties as needed
  ];


  return (
    <RootContainer>
        <Header>
            <a className="active" href="#Login">Login</a>
            <ProfileImg src={ProfileImg} alt="Host" /> Profile Image
        </Header>
           
        <ContentContainer>
            <HostDetailsContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Hostimg} alt="Host" height="350px" width="400px" style={{ alignSelf: 'left'}}/>
                <div style={{ marginLeft: '20px' }}>
                    <TextField label="Username" name="userName" value={demographics.username} onChange={handleInputChange} fullWidth />
                    <div style={{ display: 'flex' }}>
                        <TextField label="First Name" name="firstName" value={demographics.firstName} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                        <TextField label="Last Name" name="lastName" value={demographics.lastName} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TextField label="Age" name="age" type="number" value={demographics.age} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                        <TextField label="Gender" name="gender" value={demographics.gender} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
                </div>
                <TextField label="Description" name="description" value={demographics.description} onChange={handleInputChange} fullWidth />
                <Button variant="contained" color="primary" onClick={handleSaveDemographics} style={{ marginTop: '20px' }}>
                Save
                </Button>

                </div>
            </div>
            </HostDetailsContainer>
            <HostPropertyContainer ref={containerRef}>
                {duplicatedProperties.map(property => (
                    <PropertyCard key={property.id}>
                        <Link to={property.link}>
                            <img src={Pad1} alt="Host" height="200px" width="200px"/>
                            <div>
                                <Typography variant="h5">{property.name}</Typography>
                                {/* <div style={{ pointerEvents: 'none' }}> */}
                                    <Typography component="p">{property.description}</Typography>
                                {/* </div> */}
                            </div>
                        </Link>
                        <Link to={property.link}>
                            <Button variant="contained" color="primary">
                                View Property
                            </Button>
                        </Link>
                    </PropertyCard>
                ))}
            </HostPropertyContainer>
                {scrollPosition > 0 && (
                    <PreviousButton onClick={handleScrollLeft} variant="contained" color="primary">
                        Previous
                    </PreviousButton>
                )}
                    <NextButton onClick={handleScrollRight} variant="contained" color="primary">
                        Next
                    </NextButton> 
        </ContentContainer>
        <ContentContainer>
            <PastPropertiesContainer>
                {pastProperties.map(property => (
                    <PropertyCard key={property.id}>
                        <Link key={property.id} to={property.link}>
                            <img src={Pad1} alt="Host" height="300px" width="300px" />
                            <div>
                                <Typography variant="h5">{property.name}</Typography>
                                <div style={{ pointerEvents: 'none' }}>
                                    <Typography component="p">{property.description}</Typography>
                                </div>
                            </div>
                        </Link>
                        <Link to={property.link}>
                            <Button variant="contained" color="primary">
                                View Property
                            </Button>
                        </Link>
                    </PropertyCard>
                ))}
            </PastPropertiesContainer>
        </ContentContainer>
    </RootContainer>
  );
};

export default Hprofile;
