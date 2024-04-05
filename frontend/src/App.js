import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';
// import SideNav from './components/NavBar/SideNav.tsx';
import HostProfile from './hprofile.tsx'
import Property1 from './Property1.tsx';
import Property2 from './Property2.tsx';
import Property3 from './Property3.tsx';
import Property4 from './Property4.tsx';
import Property5 from './Property5.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <SignUp/> */}
        <Route path="signup" element={<SignUp />} />
        {/*<SideNav/>*/}
        <Route path="hprofile" element={<HostProfile />} />
        <Route path="Property1" element={<Property1 />} /> {/* Property 1 page */}
        <Route path="Property2" element={<Property2 />} /> {/* Property 2 page */}
        <Route path="Property3" element={<Property3 />} /> {/* Property 3 page */}
        <Route path="Property4" element={<Property4 />} /> {/* Property 4 page */}
        <Route path="Property5" element={<Property5 />} /> {/* Property 5 page */}
      </Routes>
    </Router>
  )
}

export default App