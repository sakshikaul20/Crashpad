import React, {useState} from "react";
import { TextField, Button, Typography, Modal  } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HostForm from './HostForm.tsx'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProfileImg from '../../images/ProfileImg.png';
import { Link, useNavigate } from 'react-router-dom';





  const LoginButton = styled(Button)({
    marginTop: '1em'
  });

  const SideBySide = styled('div')({
    display: 'flex',
    gap:'5px',
  })
  

interface UserFormState {
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    location: string;
    email: string;
    aboutMe: string;
}
  

const HUserProfile: React.FC = () => {
    const [profileFormData, setProfileFormData] = useState<UserFormState>({
        userName: "John",
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "Male",
        location: 'New York',
        email: 'johndoe11@gmail.com',
        aboutMe: "I love travelling different places!"
    });
    
    const [errors, setErrors] = useState<any>();
    const [showUserProfile, setShowUserProfile] = useState(true);
    const [showProfileModal, setShowProfileModal] = useState(false); 

    
    
      const validateForm = () => {
    
        let newErrors:any = {};
    
        if(!profileFormData.userName){
          newErrors.userName = "Username is required."
        }
        if(!profileFormData.firstName){
          newErrors.firstName = "First Name is required."
        }
        if(!profileFormData.lastName){
          newErrors.lastName = "Last Name is required."
        }
        if(!profileFormData.age){
          newErrors.age = "Age is required."
        }
        if(!profileFormData.gender){
          newErrors.gender = "Gender is required."
        }
        if(!profileFormData.location){
          newErrors.location = "Location is required."
        }
        if(!profileFormData.email){
          newErrors.email = "Email is required."
        }
        if(!profileFormData.aboutMe){
          newErrors.aboutMe = "About me is required."
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      }
    
      const profileSubmitData = (e:any) => {
        e.preventDefault();
        setShowUserProfile(false);

        const isValid = validateForm();
        
        if(isValid) {
          console.log("Form validation", profileFormData);
        }else{
          setShowUserProfile(true);
          console.log("Form validation failed");
        }
      }
    
      const handleChange = (e:any) => {
        const {name, value} = e.target;
        console.log(name, value);
        setProfileFormData({...profileFormData, [name]:value});
      }



      const navigate = useNavigate();
      const handleShowProfile = () => {
 
        navigate('/property1info'); 
      };
    return (
        <>
          <Grid container spacing={2}>
              <Grid xs={3} >
                  <img src={ProfileImg}  style={{width: "150%", borderRadius: "20px", height: "400px" }} />
                  
              </Grid>
              <Grid sx={{ flexGrow: 1, m: 4, paddingLeft: "3em" }}> 
        {showUserProfile ? (
          <HostForm profileFormData={profileFormData} onClickEdit={handleShowProfile} />
        ) :
              (<Grid sx={{ mr:2,ml:2 }} >
                <Button onClick={handleShowProfile}>Edit</Button>
                <Modal open={showProfileModal} onClose={() => setShowProfileModal(false)}>
                  <div style={{ backgroundColor: 'white', padding: 20 }}>
                    <Typography variant="h6">Edit Profile</Typography>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="userName"
                      label="Username"
                      variant="outlined"
                      name="userName"
                      value={profileFormData.userName}
                      onChange={handleChange}
                      helperText={errors ? errors.userName : ""}
                    />
                  </div>
                </Modal>
              <form noValidate autoComplete="off" onSubmit={profileSubmitData}>
                  <TextField
                      fullWidth
                      name="userName" 
                      value={profileFormData.userName}
                      margin="normal"
                      id="userName"
                      label="Username"
                      variant="outlined"
                      onChange={handleChange} 
                      helperText={errors ? errors.userName : ""}
                  />
                  <SideBySide>
                  <TextField
                      fullWidth
                      margin="normal"
                      id="firstName"
                      label="First Name"
                      variant="outlined"
                      name='firstName' 
                      value={profileFormData.firstName}
                      onChange={handleChange} 
                      helperText={errors ? errors.firstName : ""}
                  />
                  <TextField
                      fullWidth
                      margin="normal"
                      id="lastName"
                      label="Last Name"
                      variant="outlined"
                      name='lastName' 
                      value={profileFormData.lastName}
                      onChange={handleChange} 
                      helperText={errors ? errors.lastName : ""}
                  />
                  </SideBySide>
                  <SideBySide>
                  <TextField
                      fullWidth
                      margin="normal"
                      id="age"
                      label="Age"
                      variant="outlined"
                      name='age' 
                      value={profileFormData.age}
                      onChange={handleChange} 
                      helperText={errors ? errors.age : ""}
                  />

                  <FormControl fullWidth style={{ marginTop:"15px" }}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="gender"
                      value={profileFormData.gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  </SideBySide>
                  <TextField
                      fullWidth
                      margin="normal"
                      id="location"
                      label="Location"
                      variant="outlined"
                      name='location' 
                      value={profileFormData.location}
                      onChange={handleChange} 
                      helperText={errors ? errors.location : ""}
                  />
                  <TextField
                      fullWidth
                      placeholder="Tell me about yourself..."
                      multiline
                      margin="normal"
                      id="aboutMe"
                      label="About Me"
                      variant="outlined"
                      name="aboutMe" 
                      value={profileFormData.aboutMe}
                      onChange={handleChange} 
                      rows={2}
                      maxRows={4}
                      helperText={errors ? errors.aboutMe : ""}
                  />

                  <LoginButton
                      fullWidth
                      variant="contained"
                      style={{ backgroundColor: '#FDA117' }}
                      onClick={profileSubmitData}
                  >
                      Submit
                  </LoginButton>
                  <Typography variant="body2" style={{ marginTop: '1em' }}>
                      
                  </Typography>
                  </form>
              </Grid>)}</Grid>
          </Grid>
        </>
    );
}

export default HUserProfile;