import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button, Typography  } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserSettings from './Dashboard/UserSettings.tsx';
import CountryPad from '../images/CountryEscape.jpg';
import Pad1 from '../images/Pad1.jpg'
import Lot1 from '../images/Lot1.jpg'
import Lot2 from '../images/Lot2.jpg'
import Lot3 from '../images/Lot3.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Calendar from './Calendar.tsx';
import PropertyForm from './PropertyForm.tsx';
import Nav from './SideNav.tsx'


const SideBySide = styled('div')({
    display: 'flex',
    gap:'5px',
  })
  

interface UserFormState {
    location: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    about: string;
}
  

const Property1: React.FC = () => {
    const [propertyFormData, setPropertyFormData] = useState<UserFormState>({
        location: 'Property 1',
        address: '123 Main St',
        city: 'Cityville',
        state: 'CA',
        zip: 12345,
        about: "Quiety property with plenty of space."
    });

    const [errors, setErrors] = useState<any>();
    const [ShowProperty, setShowProperty] = useState(true);

    const validateForm = () => {
    
        let newErrors:any = {};
    
        if(!propertyFormData.location){
          newErrors.userName = "Location is required."
        }
        if(!propertyFormData.address){
          newErrors.firstName = "Address is required."
        }
        if(!propertyFormData.city){
          newErrors.lastName = "City is required."
        }
        if(!propertyFormData.state){
          newErrors.age = "State is required."
        }
        if(!propertyFormData.zip){
          newErrors.gender = "Zip Code is required."
        }
        if(!propertyFormData.about){
          newErrors.location = "Decription is required."
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      }
    
      const propertySubmitData = (e:any) => {
        e.preventDefault();
        setShowProperty(false);

        const isValid = validateForm();
        
        if(isValid) {
          console.log("Form validation", propertyFormData);
        }else{
          setShowProperty(true);
          console.log("Form validation failed");
        }
      }
      const handleChange = (e:any) => {
        const {name, value} = e.target;
        console.log(name, value);

        setPropertyFormData({...propertyFormData, [name]:value});
      }

      // const handleChanges = (event: SelectChangeEvent) => {
      //   setAge(event.target.value as string);
      // };
    

      const handleShowProperty = () => {
        // alert("Show profile");
        setShowProperty(true);
      }

    const events = [
        {
            title: 'Doe Reservation',
            start: new Date(2024, 3, 21),
            end: new Date(2024, 3, 27),
        }
        // Add more events as needed
    ];


    const navigateToHprofile = () => {
        window.location.href = '/hostprofile'; // Change the window location to navigate to hprofile page
    };

    return (   
        <>
            <UserSettings></UserSettings>
            <Nav></Nav>
            <Box sx={{ flexGrow: 1, m:6, paddingLeft:'5em'}} >
              <Grid container spacing={2}>
                  <Grid xs={6} >
                    <img src={CountryPad}  style={{ width: "80%", borderRadius: "20px" }} />
                    
                  </Grid>
                <Grid item xs={6}>
                      {
                      ShowProperty ? 
                      (<PropertyForm profileFormData={propertyFormData}  onClickEdit={handleShowProperty}></PropertyForm>) : 
                    (<Grid sx={{ mr:2,ml:2 }} >
                        <form noValidate autoComplete="off" onSubmit={propertySubmitData}>
                            <TextField
                                fullWidth
                                name="location" 
                                value={propertyFormData.location}
                                margin="normal"
                                id="location"
                                label="Location"
                                variant="outlined"
                                onChange={handleChange} 
                                helperText={errors ? errors.location : ""}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="address"
                                label="Address"
                                variant="outlined"
                                name='address' 
                                value={propertyFormData.address}
                                onChange={handleChange} 
                                helperText={errors ? errors.address : ""}
                            />
                            <SideBySide>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="city"
                                label="City"
                                variant="outlined"
                                name='city' 
                                value={propertyFormData.city}
                                onChange={handleChange} 
                                helperText={errors ? errors.city : ""}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="state"
                                label="State"
                                variant="outlined"
                                name='state' 
                                value={propertyFormData.state}
                                onChange={handleChange} 
                                helperText={errors ? errors.state : ""}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="zip"
                                label="Zip Code"
                                variant="outlined"
                                name='zip' 
                                value={propertyFormData.zip}
                                onChange={handleChange} 
                                helperText={errors ? errors.zip : ""}
                            />
                            </SideBySide>
                            <TextField
                                fullWidth
                                placeholder="Tell me about the property..."
                                multiline
                                margin="normal"
                                id="about"
                                label="About"
                                variant="outlined"
                                name="about" 
                                value={propertyFormData.about}
                                onChange={handleChange} 
                                rows={2}
                                maxRows={4}
                                helperText={errors ? errors.about : ""}
                            />

                            {/* <LoginButton
                                fullWidth
                                variant="contained"
                                style={{ backgroundColor: '#FDA117' }}
                                onClick={profileSubmitData}
                            >
                                Submit
                            </LoginButton> */}
                            <Typography variant="body2" style={{ marginTop: '1em' }}>
                                
                            </Typography>
                          </form>
                    </Grid>)}
                        <Grid item xs={12}>
                          <Calendar
                              events={events}
                              startAccessor="start"
                              endAccessor="end"
                              selectable
                              style={{ height: '400px'}}
                          />
                        </Grid>
                </Grid>
              </Grid>
            </Box>
            <button style={{paddingLeft:'8em'}}onClick={navigateToHprofile}>Back to Profile</button>
            <div style={{ display:'flex', gap:'50px', paddingLeft:'8em', paddingRight: '5em' }}>
                <Link to="./hostprofile"> {/* Link to the desired component */}
                    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={Lot1}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Lot 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                City, State, Zip code | Distance
                                Stays | Rating
                                Request | Stays
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="../property2"> {/* Link to the desired component */}
                    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={Lot2}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Lot 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                City, State, Zip code | Distance
                                Stays | Rating
                                Request | Stays
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="../property2"> {/* Link to the desired component */}
                    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={Lot3}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Lot 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                City, State, Zip code | Distance
                                Stays | Rating
                                Request | Stays
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="../property2"> {/* Link to the desired component */}
                    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={Lot1}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            
                            Lot 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                City, State, Zip code | Distance
                                Stays | Rating
                                Request | Stays
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                {/* Add more cards similarly */}
            </div>
        </>
    );
}

export default Property1;