import {
    Link
} from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

function HomeContent() {

    const [state, setState] = React.useState({
        apiHost: "http://localhost:8080/",
    });
    const callAPI = (apiName: string) => {
        fetch(state.apiHost+apiName)
            // .then(response => response.json())
            // .then(data => console.log(data));
    }

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => callAPI("test")}
                sx={{ mt: 3, ml: 1 }}
            >
                {"testCall"}
            </Button>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                    <Link to="/signIn">SignIn</Link>
                </li>
                <li>
                    <Link to="/album">Album</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/signInSide">SignInSide</Link>
                </li>
                <li>
                    <Link to="/signUp">signUp</Link>
                </li>
                <li>
                    <Link to="/stickyFooter">StickyFooter</Link>
                </li> */}
            </ul>
        </div>
    )
}
export default function Home() {
    return <HomeContent />;
}