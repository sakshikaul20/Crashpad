import React, { useState, useRef } from 'react';
import { Card, Button, Typography, styled, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import ProfileImg from './images/ProfileImg.png'; // Import host profile image
import Hostimg from './images/hostimage.jpg';
import Header from './components/Header.tsx';
import Pad1 from './images/Pad1.jpg';
import Pad2 from './images/Pad2.jpg';
import Pad3 from './images/Pad3.jpg';
import Pad4 from './images/Pad4.jpg';
import Pad5 from './images/Pad5.jpg';
import PastBookingsContainer from './components/PastBookings.tsx';
import Calendar from './components/Calendar.tsx';
import SideNav from './components/NavBar/SideNav.tsx';
import EditDialog from './components/EditDialog.tsx';




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

const Spacing = styled('div')({
  marginTop: '50px',
});

// Styled components for the upper and lower content containers
const UpperContentContainer = styled(ContentContainer)({
  padding: '50px',
});


const TabContainer = styled(ContentContainer)({
  maxWidth: '80%',
  display: 'flex',
  justifyContent: 'flex-start'
});


const HostDetailsContainer = styled('div')({
    marginRight: '20px',
    width: '60%', // Width for host details
  });
  
  const HostPropertyContainer = styled('div')({
    overflow: 'hidden',
    position: 'relative',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
  });

// Define styled components for styling
const PropertyCard = styled(Card)({
    margin: '20px',
    padding: '5px',
    width: '200px',
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



  interface Property {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
}
const events = [{
  id: 1,
  title: 'Event 1',
  start: new Date(2024, 3 , 25, 10, 0), // April 1st, 2024 at 10:00 AM
  end: new Date(2024, 3, 27, 12, 0), // April 1st, 2024 at 12:00 PM
  },
  {
  id: 2,
  title: 'Event 2',
  start: new Date(2024, 3, 2, 14, 0), // April 2nd, 2024 at 2:00 PM
  end: new Date(2024, 3, 6, 16, 0), // April 2nd, 2024 at 4:00 PM
  },
];

const Hprofile: React.FC = () => {
  // Sample demographic data
  const [demographics, setDemographics] = useState({
    username: 'jdoe02',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'Male',
    location: 'New York, USA',
    email: 'johndoe11@gmail.com',
    description: 'Traveling with family of 7',
  });

  // This line declares the state variable and its setter function
const [dialogOpen, setDialogOpen] = useState(false);

const [updatedDemographics, setUpdatedDemographics] = useState(demographics);

  // Function to handle opening the edit dialog
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  // Function to handle closing the edit dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

 // Function to handle updating demographic data
 const handleUpdateDemographics = () => {
  setDemographics(updatedDemographics);
  handleCloseDialog();
};

// State to keep track of selected property
const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  

  const properties = [
    { id: 1, name: 'Pad1', imageUrl: Pad1, description: 'Description for Pad1'},
    { id: 2, name: 'Pad2', imageUrl: Pad2, description: 'Description for Pad2'},
    { id: 3, name: 'Pad3', imageUrl: Pad3, description: 'Description for Pad3'},
    { id: 4, name: 'Pad4', imageUrl: Pad4, description: 'Description for Pad4'},
    { id: 5, name: 'Pad5', imageUrl: Pad5, description: 'Description for Pad5'}
    // Add more properties as needed
  ];

//   const duplicatedProperties = [...properties, ...properties]; // Duplicate properties for infinite loop

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

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    };

  return (
    <RootContainer>
        <Header>
            {/* <a className="active" href="#Login">Login</a> */}
            <ProfileImg src={ProfileImg} alt="Host" /> Hello Kenson
        </Header>
        <SideNav/>
           
        <UpperContentContainer>
            <HostDetailsContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Hostimg} alt="Host" height="350px" width="350px" style={{ marginLeft: '50px' }} />
            <div style={{ marginLeft: '40px' }}>
              <div>Username: {demographics.username}</div>
              <Spacing /> 
              <div>First Name: {demographics.firstName}</div><div>Last Name: {demographics.lastName}</div> 
              <div>Age: {demographics.age}</div>
              <div>Gender: {demographics.gender}</div>
              <div>Email: {demographics.email}</div>
              <Spacing />
              <div>Description: {demographics.description}</div>
              <button onClick={handleOpenDialog}>Edit Profile</button>
              <EditDialog open={dialogOpen} onClose={handleCloseDialog} />
            </div>
            </div>
            </HostDetailsContainer>
            <HostPropertyContainer ref={containerRef}>
                {properties.map(property => (
                    <PropertyCard key={property.id} onClick={() => handlePropertyClick(property)}>
                        {/* <Link to={property.link}> */}
                            {/* <img src={Pad1} alt="Host" height="200px" width="200px"/> */}
                            <img src={property.imageUrl} alt={property.name} height="200px" width="200px"/>
                            <div>
                                <Typography variant="h5">{property.name}</Typography>
                                <Typography component="p">{property.description}</Typography>
                            </div>
                        {/* </Link> */}
                        <Link to={`/property${property.id}`}>
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
            </UpperContentContainer>
        
        <TabContainer>
          <PastBookingsContainer
            id= "5"  /* pass the id of past bookings */
            propertyName="Pad1" /* pass the property name of past bookings */
            vehicleType="Rv" /* pass the vehicle type of past bookings */
            date="4/25/2024" /* pass the date of past bookings */
            amount="$42" /* pass the amount of past bookings */
            emptyMessage="No past bookings found." // Optional prop for empty message
          />
          <Spacing /> 
          <Calendar
            events={events}
            startAccessor="start" // Ensure this property is present in your event objects
            endAccessor="end" // Ensure this property is present in your event objects
            selectable // Boolean value indicating if the calendar is selectable
            style={{ height: '500px' }} // Style object for setting the height of the calendar
          />
        </TabContainer>
    </RootContainer>
  );
};

export default Hprofile;
