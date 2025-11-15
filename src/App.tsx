import { useAuth0 } from '@auth0/auth0-react';
import SpiceTracker from './components/SpiceTracker';

function App() {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <button type="button" onClick={() => loginWithRedirect()}>
        Login
      </button>
      <button
        type="button"
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin },
          })
        }
      >
        Log Out
      </button>
      <SpiceTracker />
    </>
  );
}

export default App;
