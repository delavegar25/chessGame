import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile';
import '@testing-library/jest-dom/extend-expect'; 

// Mock the 'useNavigate' hook from react-router-dom
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Profile component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
      // Reset the mock before each test
      require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
    });

    test('renders the profile page and buttons', () => {
        // Render the component
        render(
            <BroswerRouter>
            <Profile />
            </BrowserRouter>
        );

        // check for the heading

        const heading = screen.getByRole('heading', {
            name: /choose your level/i,
        });
        expect(heading).toBeInTheDocument();

        // check that button are present

        const beginnerButton = screen.getByRole('button', {
            name: /choose beginner level/i,
        });

        const intermediateButton = screen.getByRole('button', {
            name: /choose intermediate level/i,
        });

        const advancedButton = screen.getByRole('button', {
            name: /choose advanced level/i,
        });

        expect(beginnerButton).toBeInTheDocument();
        expect(intermediateButton).toBeInTheDocument();
        expect(advancedButton).toBeInTheDocument();
    });

    test('navigate to the correct level on button click', () => {
        render(
            <BrowserRouter>
            <Profile />
            </BrowserRouter>
        );

        // simulate a click on the beginner button
        const beginnerButton = screen.getByRole('button', {
            name: /choose beginner level/i,
        });
        fireEvent.click(beginnerButton);

        expect(mockNavigate).toHaveBeenCalledWith('/chessboard/');
    })
})