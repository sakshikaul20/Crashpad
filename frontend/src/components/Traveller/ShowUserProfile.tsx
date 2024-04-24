import React, {useState} from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const LoginButton = styled(Button)({
    marginTop: '1em'
});
  
interface UserFormState {
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    aboutMe: string;
}


const ShowUserProfile:React.FC = () => {
    
    const [profileFormData, setProfileFormData] = useState<UserFormState>({
        userName: "Jon",
        firstName: "Jon",
        lastName: "Deo",
        age: 30,
        gender: "Male",
        aboutMe: "I love travelling different places!"
    });
    
    return (
        <>
        <Grid container spacing={2}>
            <Grid xs={4} >
                <img src='myprofile.jpeg' style={{ width: "100%", borderRadius: "20px" }} />
                  
            </Grid>
            <Grid sx={{ mr:2,ml:2 }} >
                <h6 style={{ marginTop: '10px', fontSize: 'larger', fontWeight: '700' }}>Your Profile Detail</h6>     
                <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>User Name: </span>{profileFormData.userName}</p>           
                <div style={{ display:'flex','justifyContent': 'space-between' }}>           
                <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Name: </span>{profileFormData.firstName} {profileFormData.lastName}</p>
                 </div>
                 <div style={{ display:'flex','justifyContent': 'space-between' }}>
                <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Gender: </span> {profileFormData.gender} </p>
                </div>
                <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Age: </span> {profileFormData.age} years</p>
                <div style={{ display:'flex','justifyContent': 'space-between' }}>
                <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>About: </span> {profileFormData.aboutMe}</p>
                </div>
                <LoginButton
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: '#FDA117' }}
                >
                  Edit
                </LoginButton>
            </Grid>
        </Grid>
        </>
    );
}

export default ShowUserProfile