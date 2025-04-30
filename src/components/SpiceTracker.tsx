import { useAuth0 } from '@auth0/auth0-react';

function SpiceTracker() {
  const { isLoading, isAuthenticated, user } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <div>User must log in first...</div>;
  }
  return (
    <div>
      Spice Tracker - {user?.given_name} {user?.family_name}
    </div>
  );
}

export default SpiceTracker;
