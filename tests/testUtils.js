import React from 'react';
import { render as renderRTL, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');

const render = (Component, { route = '/' } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return {
    ...renderRTL(
      <Router history={history}>
        <Component />
      </Router>
    ),
    history,
  };
};

export { render, fireEvent, waitFor };