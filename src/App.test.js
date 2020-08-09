import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { container } = render(<App />);
  const headerElement = container.querySelector('.App-header')
  expect(headerElement).toBeInTheDocument();
});
