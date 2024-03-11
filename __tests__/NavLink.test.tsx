import React from 'react';
import { render } from '@testing-library/react';
import NavLink from '@/core/atoms/NavLink';

describe('NavLink Component', () => {
  it('renders correctly', () => {
    const linkText = 'Test Link';
    const { getByText } = render(<NavLink text={linkText} />);
    const linkElement = getByText(linkText);
    expect(linkElement).toBeInTheDocument();
  });

});
