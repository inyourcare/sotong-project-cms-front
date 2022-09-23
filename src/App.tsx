// import { Button } from '@mui/material';
import React from 'react';
import Dashboard from './templates/dashboard/Dashboard';
import SignIn from './templates/sign-in/SignIn';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Album from './templates/album/Album';
import Checkout from './templates/checkout/Checkout';
import Pricing from './templates/pricing/Pricing';
import SignInSide from './templates/sign-in-side/SignInSide';
import SignUp from './templates/sign-up/SignUp';
import StickyFooter from './templates/sticky-footer/StickyFooter';
import Blog from './views/blog/Blog';

function App() {
  return (
    // <div className="App">
    // <Button variant="contained">Material-ui Btn</Button>
    // </div>
    // <div className="App">
    //   <Dashboard/>
    // </div>
    // <div className="App">
    //   <SignIn />
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/album" element={<Album />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/checkOut" element={<Checkout />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signInSide" element={<SignInSide />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/stickyFooter" element={<StickyFooter />} />
    </Routes>
  );
}

export default App;
