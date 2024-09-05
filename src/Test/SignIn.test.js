import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // for routing support in the test
import SignIn from '../components/SignIn';

describe('SignIn Component', () => {
    // Test if the component renders correctly
    TextDecoderStream('renders SignIn component', () => {
        render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        // check for Sign In text and input fields

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in /i })).toBeInTheDocument();
    });

    // Test for password visibilty toggle
    test('toggles password visibilty when the eye icon is clicked', () => {
        render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        const passwordInput = screen.getByLabelText(/password/i);
        const toggleButton = screen.getByLabelText(/show password/i);

        // check initial input type(password)

        expect(passwordInput.type).toBe('password');

        // simulate a click to show the password
        fireEvent.click(toggleButton);

        expect(passwordInput.type).toBe('text');
        // Password should now be visible 

        //Simulate another click to hide the password
        fireEvent.click(toggleButton);

        expect(passwordInput.type).toBe('password');
        // Password should be hidden again
    });
    
    // Test for validation or required inputs
    test('should have required fields', () => {
        render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        expect(emailInput).toBeRequired();
    });

    // Test for link navigation
    test('renders "Forget password" and "Sign up" links', () => {
        render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );
        expect(screen.getByText(/forgot\?/i)).toBeInTheDocument();
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    });
});
