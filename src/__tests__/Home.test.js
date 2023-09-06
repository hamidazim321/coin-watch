import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { mockCoins } from './__mocks__/mockCoins'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import Home from '../components/Home'

const mockStore = configureStore([]);

describe('Home Component', () => {
  let store; 
  beforeEach(() => {
    store = mockStore({
      coins: {
        coins: mockCoins,
        pending: false,
        error: false,
      }
    })
  })

  test('Should render correctly', () => {
    const home = render(
      <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>
    )
    expect(home).toMatchSnapshot()
  })
})