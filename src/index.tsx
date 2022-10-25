import App from "./App";
import ReactDOM from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

ReactDOM.render(
    <>
        
                <BrowserRouter>
                    <App />
                </BrowserRouter>
    </>,
    document.getElementById("root")
);