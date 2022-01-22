import { render, screen } from '@testing-library/react';

import HomePage from '@/pages/index';

describe('HomePage', () => {
  test('renders a heading', () => {
    render(<HomePage title="My title" />);

    const heading = screen.getByRole('heading', {
      name: /my title/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
