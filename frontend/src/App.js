import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.tsx';
import Signup from './Signup.tsx';
import SideNav from './components/NavBar/SideNav.tsx'
import SearchBar from './components/Search/SearchBar.tsx';
import ToggleButtons from './components/ToggleFilterButtons/ToggleButtons.tsx';
import { Grid } from '@mui/material';
import PropertyCards from './components/Dashboard/PropertyCards.tsx';
import PropertyGrid from './components/Dashboard/PropertyCards.tsx';
import SearchAndToggleBar from './components/Dashboard/SearchAndToggleBar.tsx';
import UserSettings from './components/Dashboard/UserSettings.tsx';


const properties = [
  // This would be your data coming from an API or static file
  { title: 'Maldives', imageUrl: '/images/loginBG5.jpg', description: 'Beautiful scenery!' },
  // More properties...
];

function App() {
  return (
    <BrowserRouter>
     <div>
     {/* <Login/> */}
    {/* <SignUp/> */}
    <SideNav/>
    {/* <SearchBar/> */}
    <ToggleButtons/>
    <UserSettings/>
    <SearchAndToggleBar/>
    
     <PropertyGrid/>
     
     {/* <Routes>
        <Route path= '/' element= {<Login/>}></Route>
        <Route path= '/signup' element= {<Signup/>}></Route>
     </Routes> */}
    </div>
    </BrowserRouter>
  )
}

export default App