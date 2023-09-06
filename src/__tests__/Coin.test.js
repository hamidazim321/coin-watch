import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Coin from '../components/Coin';
import { mockCoins } from './__mocks__/mockCoins';

describe('Coin Card', () => {
  test('Should render correctly', () => {
    const coin = render(
      <MemoryRouter>
        <Coin props={mockCoins[0]} />
      </MemoryRouter>,
    );
    expect(coin).toMatchSnapshot();
  });
});
