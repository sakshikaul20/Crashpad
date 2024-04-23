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
import Hprofile from "./components/HostProfile/hprofile.tsx";
import Property1 from "./components/HostProfile/Property1.tsx";
import Property2 from "./components/HostProfile/Property2.tsx";
import Property3 from "./components/HostProfile/Property3.tsx";
<<<<<<< HEAD

=======
import PadMap from "./Map.tsx";
>>>>>>> Crashpad_Host

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

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/hostprofile" element={<Hprofile />}></Route>
          <Route path="/property1info" element={<Property1 />}></Route>
          <Route path="/property2info" element={<Property2 />}></Route>
<<<<<<< HEAD
          <Route path="/property3info" element={<Property3/>}></Route>
=======
          <Route path="/property3info" element={<Property3 />}></Route>
          <Route path="/map" element={<PadMap />}></Route>
>>>>>>> Crashpad_Host
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
