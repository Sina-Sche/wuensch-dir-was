import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

it('renders the button in the primary state', () => {
  render(<Button />);
  expect(screen.getByRole('button')).toHaveTextContent('');
});
