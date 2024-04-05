import React from 'react';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import notification icon
import ProfileImg from '../images/ProfileImg.png';

const HeaderContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between', // Align items to the sides
    alignItems: 'center',
    width: '100%',
    height: '10%',
    paddingRight: '1rem', // Add some padding to the right
    paddingTop: '1em',
});

const HeaderRight = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

 
const ProfileImage = styled('img')({
    width: '40px', // Set size for the circular profile image
    height: '40px',
    borderRadius: '50%' // Make it circular
});

const NotificationIcon = styled(NotificationsIcon)({
    fontSize: '2rem', // Adjust size as needed
    marginLeft: '1rem' // Add some space between profile image and notification icon
});

const Header = () => {
    return (
        <HeaderContainer>
            <div>Logo</div> {/* Your logo can be here */}
            <HeaderRight>
                
                <ProfileImage src={ProfileImg} alt="Host" /> Hello Kenson
                <NotificationIcon /> {/* Notification Icon */}
                
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;
