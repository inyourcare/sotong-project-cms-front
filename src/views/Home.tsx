import {
    Link
} from "react-router-dom";

function HomeContent() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    )
}
export default function Home() {
    return <HomeContent />;
}