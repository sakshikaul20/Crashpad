import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';
import SideNav from './components/NavBar/SideNav.tsx'
import SearchBar from './components/Search/SearchBar.tsx';
import ToggleButtons from './components/ToggleFilterButtons/ToggleButtons.tsx';
import { Grid } from '@mui/material';
import PropertyCards from './components/Dashboard/PropertyCards.tsx';
import PropertyGrid from './components/Dashboard/PropertyCards.tsx';


const properties = [
  // This would be your data coming from an API or static file
  { title: 'Maldives', imageUrl: '/images/loginBG5.jpg', description: 'Beautiful scenery!' },
  // More properties...
];

function App() {
  return (
    <Router>
     <div>
     {/* <Login/> */}
    {/* <SignUp/> */}
    <SideNav/>
    {/* <SearchBar/>
    <ToggleButtons/> */}
     <PropertyGrid/>
    </div>
    </Router>
  )
}

export default App