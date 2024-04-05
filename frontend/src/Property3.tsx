import React from 'react';
import { styled } from '@mui/material/styles';
// import { Card, Container, dividerClasses} from '@mui/material'; 
// import { useHistory } from 'react-router-dom';
import Pad3 from './images/Pad3.jpg';



const Property = styled('div')({
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
          
    });

// const PropertyCard = styled('div')({


// })

const Property3= () => {
    const navigateToHprofile = () => {
        window.location.href = '/hprofile'; // Change the window location to navigate to hprofile page
    };

return (
    <Property>
        <div>
            <h1>Property 3</h1>
            <img src={Pad3} alt="Property1" height="600px" width="600px" style={{ alignSelf: 'center'}}/>
            <p>Description of Property 3</p>
            <button onClick={navigateToHprofile}>Back to Profile</button>
        </div>
    </Property>
);
}
export default Property3;