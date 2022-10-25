// import { Button } from '@mui/material';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Test from './views/Test';

import Blog from './views/blog/Blog';
import Home from './home/Home';

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
      {/* <Route path="/" element={<Test />} />
      <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/dash" element={<Dashboard />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/album" element={<Album />} />
      <Route path="/checkOut" element={<Checkout />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signInSide" element={<SignInSide />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/stickyFooter" element={<StickyFooter />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
