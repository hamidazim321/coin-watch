import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import DetailsPage from '../components/Details';
import { mockDetails } from './__mocks__/mockCoins';

fetchMock.enableMocks();

describe('DetailsPage', () => {

  beforeEach(() => {
    // Mock the fetch request to return the mockCoinData
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockDetails));
  });

  test('renders loading initially and then displays coin details', async () => {
    // Render the DetailsPage component with a mock route
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/Details/90']}>
        <DetailsPage />
      </MemoryRouter>
    );

    // Check if "Loading" text is displayed initially
    expect(getByText('Loading')).toBeInTheDocument();

    // Wait for the fetch request and data loading to complete
    await waitFor(() => {
      // Check if the coin details are displayed
      expect(getByText('BTC')).toBeInTheDocument();
      expect(getByText('Bitcoin')).toBeInTheDocument();
      expect(container).toMatchSnapshot()
    });
  });

  // Add more test cases as needed, e.g., test error handling, etc.

});
