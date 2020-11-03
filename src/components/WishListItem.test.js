import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Standard } from './WishListItem.stories';

it('renders WishlistItem', () => {
  render(<Standard />);
});
