// import { Button } from '@mui/material';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import { Link, Typography } from '@mui/material';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export const useStyles = makeStyles(() => ({
  // common
  alignCenterBasic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  height100vh: {
    height: "100vh",
  },
  width100P: {
    width: "100%"
  },
  marginTop3: {
    marginTop: theme.spacing(3),
    // marginTop: theme.palette.primary.main,
  },

  //sign in
  signIn_sideImage: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#6242FB",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>

  );
}

export default App;
