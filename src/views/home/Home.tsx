import React from 'react';
import SignIn from './auth/SignIn';
function HomeContent() {
    return (<>
        <SignIn></SignIn>
    </>)
}
export default function Home() {
    return <HomeContent />;
}