import React, {useState} from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


// const LoginButton = styled(Button)({
//     marginTop: '1em'
// });

interface childProps {
    profileFormData:any,
    onClickEdit:() => void
}
  

const ShowProperty:React.FC<childProps> = ({profileFormData, onClickEdit   }) => {

    const [showUserProfileEdit, setShowUserProfileEdit] = useState(false)

    const profileSubmitData = () => {
      onClickEdit()
    }
    
    return (
        <>
        <Grid sx={{ mr:2,ml:2 }} >
            <h6 style={{ marginTop: '10px', fontSize: 'larger', fontWeight: '700' }}>Your Property Details</h6>
            <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Location: </span>{profileFormData.location}</p>
            <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Address: </span>{profileFormData.address} </p>
            <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>City: </span> {profileFormData.city} {profileFormData.state} {profileFormData.zip}</p>
            <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Age: </span> {profileFormData.age} years</p>
            <p><span style={{ fontSize: '16px', fontWeight: 'bold' }}>About: </span> {profileFormData.aboutMe}</p>
            {/* <LoginButton
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#FDA117' }}
                onClick={profileSubmitData}
            >
                Edit
            </LoginButton> */}
        </Grid>
        </>
    );
}

export default ShowProperty