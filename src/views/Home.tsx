import {
    Link
} from "react-router-dom";
import MLink from '@mui/material/Link';
import { Stack } from "@mui/material";

function HomeContent() {

    return (
        <div>
            <MLink
                display="block"
                variant="body1"
                href="#"
                key="test1"
                sx={{ mb: 0.5 }}
            >
                <Stack direction="row" spacing={1} alignItems="center">
                    <span>{"testCall"}</span>
                </Stack>
            </MLink>
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