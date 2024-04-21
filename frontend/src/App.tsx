import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Booking from './components/Bookings';
import Login from './Login';
import Signup from './SignUp';
import SideNav from './components/NavBar/SideNav';
import Payment from './components/Payment/Payment';
import EditUserProfile from './components/Traveller/EditUserProfile';



function App() {
  return (
    <Router>
      <div>
        <Payment />
        <Booking />
        <EditUserProfile />

        {/* <Login/> */}
        {/* <Signup/> */}
        <SideNav/> 
        {/* <SearchBar/> */}
        {/* <ToggleButtons/> */}
        {/* /* <UserSettings/> */}
        {/* <SearchAndToggleBar/> */}
  
        {/* <PropertyGrid/>  */}
    
        {/* <Routes>
            <Route path= '/' element= {<Booking/>}></Route>
            <Route path= '/signup' element= {<Signup/>}></Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
