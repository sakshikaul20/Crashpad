import React, { useState }  from 'react';
import { TextField, Button, styled} from '@mui/material';
// import Pad5 from '../images/Pad5.jpg';
import Calendar from './Calendar.tsx';

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

  const PropertyDetailsContainer = styled('div')({
    marginRight: '20px',
    width: '50%', // Width for host details
  });

    // const Property = styled('div')({
    //     height: '100vh',
    //     width: '100vw',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center'
          
    // });
  
    const CalendarContainer = styled('div')({
        width: '50%', // Width for calendar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      });

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
      // Add more events as needed]; // Define your events array here or fetch it from an external source
      ];
const Property5 = () => {
        // Sample demographic data
    const [demographics, setDemographics] = useState({
        locationName: 'Pad5',
        address: '123 Apple St',
        city: 'Boise',
        state: 'Idaho',
        zipCode: '12345',
        description: 'Quiet country property',
    });

    const [isBooked, setIsBooked] = useState(false); // State to manage booking status

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
    
    const handleBookProperty = () => {
        // Function to handle booking
        setIsBooked(true); // Set booking status to true
        // Here you would typically send booking information to your backend
    };



    return (
        <RootContainer>
            <ContentContainer>
                <PropertyDetailsContainer>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img src={Pad5} alt="Property5" height="350px" width="400px" style={{ alignSelf: 'left'}}/>
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
                            {!isBooked && (
                                <Button variant="contained" color="secondary" onClick={handleBookProperty} style={{ marginTop: '20px', marginLeft: '10px' }}>
                                    Book Property
                                </Button>
                            )}
                        </div>
                    </div>
                </PropertyDetailsContainer>
                <CalendarContainer>
                <Calendar
                    events={events}
                    startAccessor="start" // Ensure this property is present in your event objects
                    endAccessor="end" // Ensure this property is present in your event objects
                    selectable // Boolean value indicating if the calendar is selectable
                    style={{ height: '500px' }} // Style object for setting the height of the calendar
                />
                </CalendarContainer>
            </ContentContainer>
            <button onClick={navigateToHprofile} style={{ marginLeft: '20px' }} >Back to Profile</button>
            {isBooked && <p style={{ marginTop: '10px', fontSize: '18px' }}>This property is booked!</p>}
        </RootContainer>                   
    );
};

export default Property5;