import React, {useState} from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const LoginButton = styled(Button)({
    marginTop: '1em'
});

interface childProps {
    accoFormData:any,
    onClickEdit:() => void
}
  

const ShowAccomodation:React.FC<childProps> = ({accoFormData, onClickEdit   }) => {

    const [showUserProfileEdit, setShowUserProfileEdit] = useState(false)

    const profileSubmitData = () => {
      onClickEdit()
    }
    
    return (
        <>
        <Grid sx={{ mr:2,ml:2 }} >
            <h6 style={{ marginTop: '10px', fontSize: 'larger', fontWeight: '700' }}>Your Accommodation Details</h6>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Type: </span>{accoFormData.type}</p>

            <div style={{ display:'flex','justifyContent': 'space-between' }}>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Length: </span> {accoFormData.length} m</p>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Width: </span> {accoFormData.width} m</p>
            </div>

            <div style={{ display:'flex','justifyContent': 'space-between' }}>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Height: </span> {accoFormData.height} m</p>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Year: </span> {accoFormData.year} </p>
            </div>
            <div style={{ display:'flex','justifyContent': 'space-between' }}>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Model: </span> {accoFormData.model}</p>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>Make: </span> {accoFormData.make}</p>
            </div>
            <p><span style={{ fontSize: '16px',fontWeight: 'bold' }}>About: </span> {accoFormData.aboutAcco}</p>
            <LoginButton
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#FDA117' }}
                onClick={profileSubmitData}
            >
                Edit
            </LoginButton>
        </Grid>
        </>
    );
}

export default ShowAccomodation