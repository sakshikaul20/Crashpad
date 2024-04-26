import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.tsx";

import Signup from "./Signup.tsx";

import SideNav from "./components/NavBar/SideNav.tsx";

import SearchBar from "./components/Search/SearchBar.tsx";

import ToggleButtons from "./components/ToggleFilterButtons/ToggleButtons.tsx";

import { Grid } from "@mui/material";

import PropertyCards from "./components/Dashboard/Dashboard.tsx";

import PropertyGrid from "./components/Dashboard/Dashboard.tsx";

import SearchAndToggleBar from "./components/Dashboard/SearchAndToggleBar.tsx";

import UserSettings from "./components/Dashboard/UserSettings.tsx";

import Dashboard from "./components/Dashboard/Dashboard.tsx";
import PropertReservation from "./components/Dashboard/PropertyReservation.tsx";
import Hprofile from "./components/HostProfile/hprofile.tsx";
import Property1 from "./components/HostProfile/Property1.tsx";
import Property2 from "./components/HostProfile/Property2.tsx";
import Property3 from "./components/HostProfile/Property3.tsx";
import PadMap from "./components/Dashboard/Map.tsx";
import Css from "./App.css"
import Payment from "./components/Payment/Payment.tsx";
import TravelerProfile from "./components/Traveller/TravelerProfile.tsx";
import EditProfile from "./components/Traveller/EditUserProfile.tsx";


const properties = [
  // This would be your data coming from an API or static file

  {
    title: "Maldives",
    imageUrl: "/images/loginBG5.jpg",
    description: "Beautiful scenery!",
  },

  // More properties...
];

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <UserSettings/>

    <SideNav/>

    <SearchAndToggleBar/>

    

     <PropertyGrid/> */}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/hostprofile" element={<Hprofile />}></Route>
          <Route path="/property1info" element={<Property1 />}></Route>
          <Route path="/property2info" element={<Property2 />}></Route>
          <Route path="/property3info" element={<Property3 />}></Route>
          <Route path="/map" element={<PadMap />}></Route>
          <Route path="/propertyinfo" element={<Property1 />}></Route>
          <Route path="/hostprofile" element={<Hprofile />}></Route>
          <Route path="/propertyreservation" element={<PropertReservation />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/travelerprofile" element={<TravelerProfile />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
