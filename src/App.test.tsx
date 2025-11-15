import { type Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';
import App from './App.tsx';

vi.mock('@auth0/auth0-react');

describe('app', () => {
  it('should render', async () => {
    const loginWithRedirect = vi.fn();
    const logout = vi.fn();
    vi.mocked(useAuth0).mockReturnValue({
      loginWithRedirect,
      logout,
    } as unknown as Auth0ContextInterface);
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(loginWithRedirect).toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: /Log Out/i }));
    expect(logout).toHaveBeenCalled();
  });
});
