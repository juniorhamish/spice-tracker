import { type Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import SpiceTracker from './SpiceTracker.tsx';

vi.mock('@auth0/auth0-react');

describe('page', () => {
  it('should show a loading message', () => {
    vi.mocked(useAuth0).mockReturnValue({
      isLoading: true,
    } as unknown as Auth0ContextInterface);

    render(<SpiceTracker />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });
  it('should show a login message if user is not authenticated', () => {
    vi.mocked(useAuth0).mockReturnValue({
      isLoading: false,
      isAuthenticated: false,
    } as unknown as Auth0ContextInterface);

    render(<SpiceTracker />);

    expect(screen.getByText('User must log in first...')).toBeVisible();
  });
  it('should show authenticated user name', () => {
    vi.mocked(useAuth0).mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
      user: { given_name: 'John', family_name: 'Smith' },
    } as unknown as Auth0ContextInterface);

    render(<SpiceTracker />);

    expect(screen.getByText('Spice Tracker - John Smith')).toBeVisible();
  });
});
