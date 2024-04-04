import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Booking from './components/Bookings';
import Login from './Login';
import Signup from './SignUp';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
     <div>
      <Booking />
     {/* <Login/> */}
      {/* <Signup/> */}
    {/* <SideNav/> */}
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
