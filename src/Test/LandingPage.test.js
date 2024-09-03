import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

test('renders Chess Hive heading', () => {
    render(
        <BrowserRouter>
         <LandingPage />
        </BrowserRouter>
    );

    const headingElement = screen.getByText(/CHESS HIVE/i);

    expect(headingElement).toBeInTheDocument(); 
});

test('renders Play Game button', () => {
    render(
        <BrowserRouter>
         <LandingPage />
        </BrowserRouter>
    );

    const buttonElement = screen.getByRole('button', { name: /Play Game/i });

    expect(buttonElement).toBeInTheDocument();
});