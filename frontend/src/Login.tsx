import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import loginBG from './images/loginBG.jpg';
import logoImage from './images/CPlogo1.png';

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
  
  const LoginBox = styled(Box)({
    width: '100%',
    maxWidth: '30%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '2em',
    borderRadius: '8px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    paddingTop: '30vh',
    marginLeft: '0vw', // Adjust as necessary for your layout
  });
  
  const LoginButton = styled(Button)({
    marginTop: '1em'
  });

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password);
    };

    return (
        
        <RootContainer>
            <LoginBox>
            <img src={logoImage} alt="Crashpad Logo" style={{ width: '50%', height: 'auto', marginLeft: '6em' }} />
                <form noValidate autoComplete="off">
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Username"
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
                <LoginButton
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: '#FDA117' }}
                    onClick={handleLogin}
                >
                    Login
                </LoginButton>
                <Typography variant="body2" style={{ marginTop: '1em' }}>
                    {/* New to Crashpad? <Link to="/SignUp" style={{ textDecoration: 'none' }}>Sign up here</Link> */}
                </Typography>
                </form>
            </LoginBox>
        </RootContainer>
        
    );
}

export default Login;