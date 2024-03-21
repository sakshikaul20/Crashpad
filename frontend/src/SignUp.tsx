import React, { useState } from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import loginBG from './images/loginBG5.jpg';
import logoImage from './images/CPlogo.png';

const RootContainer = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${loginBG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});
const SignupContainer = styled(Container)({
  width: '30%',
  maxWidth: '30%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '2em',
  borderRadius: '8px',
  boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
  paddingTop: '0vh',
  marginLeft: '0vw', // Adjust as necessary for your layout
});

const SignupBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px', // Adjust width as needed
});

const SignUpButton = styled(Button)({
  marginTop: '1em',
  backgroundColor: '#FDA117', // Adjust the color as needed
});

const AccountType = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1em 0',
});

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTraveller, setIsTraveller] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log(name, email, password, isTraveller, isHost);
  };

  return (
    <RootContainer>
    <SignupContainer>
      <SignupBox>
      <img src={logoImage} alt="Crashpad Logo" style={{ width: '50%', height: 'auto', marginLeft: '6em' }} />
        {/* <Typography variant="h4" gutterBottom>Sign Up</Typography> */}
        
        <TextField
          fullWidth
          margin="normal"
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AccountType>
          <FormControlLabel
            control={<Checkbox checked={isTraveller} onChange={(e) => setIsTraveller(e.target.checked)} />}
            label="Traveller"
          />
          <Typography variant="body1">Or</Typography>
          <FormControlLabel
            control={<Checkbox checked={isHost} onChange={(e) => setIsHost(e.target.checked)} />}
            label="Host"
          />
        </AccountType>

        <SignUpButton
          fullWidth
          variant="contained"
          onClick={handleSignUp}
        >
          Create account
        </SignUpButton>
        
        <Typography variant="body2" style={{ marginTop: '1em', textAlign: 'center' }}>
          Existing user? <Link href="/login" underline="none">Login</Link>
        </Typography>
      </SignupBox>
    </SignupContainer>
    </RootContainer>
  );
}

export default SignupForm;
