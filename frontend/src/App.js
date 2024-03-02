import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';
import SideNav from './components/NavBar/SideNav.tsx'

function App() {
  return (
    <Router>
    <div>
      {/* <Login/> */}
    {/* <SignUp/> */}
    <SideNav/>
    </div>
    </Router>
  )
}

export default App