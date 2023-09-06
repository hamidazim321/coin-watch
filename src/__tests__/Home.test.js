import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mockCoins } from './__mocks__/mockCoins';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home Component', () => {
  let store;
  let home;

  beforeEach(() => {
    store = mockStore({
      coins: {
        coins: mockCoins,
        pending: false,
        error: false,
      },
    });
    home = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(home).toMatchSnapshot();
  });

  test('Should filter Coins on the Homepage Correctly', async () => {
    const searchBar = home.getByPlaceholderText('Search Coin');
    const coins = home.container.getElementsByClassName('coin');

    // Initial Coins displayed are 7
    expect(searchBar.value).toBe('');
    expect(coins.length).toBe(7);

    // Search for a coin name
    fireEvent.change(searchBar, { target: { value: 'Bitcoin' } });

    // Wait for the component to re-render after filtering
    await waitFor(() => {
      const filteredCoins = home.container.getElementsByClassName('coin');
      // The updated coins should be 3
      expect(filteredCoins.length).toBe(1);
    });
  });
});
