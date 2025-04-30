import './App.css'
import SpiceTracker from "./components/SpiceTracker.tsx";
import {useAuth0} from "@auth0/auth0-react";

function App() {
   const {loginWithRedirect, logout} =  useAuth0();
    return <><button onClick={() => loginWithRedirect()}>Login</button><button onClick={() => logout({
        logoutParams: { returnTo: window.location.origin },
    })}>Log Out</button><SpiceTracker /></>;
}

export default App
