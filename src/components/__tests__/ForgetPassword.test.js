import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgetPassword from '../ForgetPassword';

//Mock the image import to prevent errors during testing
jest.mock('../assets/white chess.png', ()=> 'chess.png');

describe('ForgetPassword Component', () => {
    test('renders ForgetPassword component correctly', () => {
        render(<ForgetPassword />);

        // Asset that the heading is present 

        const heading = screen.getByRole('heading', {
            name: /forget password/i
        });
        expect(heading).toBeInTheDocument();

        //Assert that the email input is present 

        const emailInput = screen.getByLabelText(/email/i);

        expect(emailInput).toBeInTheDocument();

        // Assert that the submit button is present 
        const submitButton = screen.getByRole('button', 
            { name: /send reset link/i }
        );

        expect(submitButton).toBeInTheDocument();
    });

    test('allows user to input email and submit form', () => {
        // Mock the console.log function to test form submission
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        // Render the ForgetPassword component
        render(<ForgetPassword />)

        // Simulate user typing into the email input
        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'test@example.com'}} );

        expect(emailInput.value).toBe('test@example.com')
        // verify the input value

        // simulate form submission 
        const submitButton = screen.getByRole('button', { name: /send reset link/i});
        fireEvent.click(submitButton);

        // verify that console.log was called wih the expected message

        expect(consoleSpy).toHaveBeenCalledWith(
            'Email submitted: email'
        );

        // clean up they spy
        consoleSpy.mockRestore();
    });
});