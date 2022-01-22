import { render, screen } from '@testing-library/react';

import { products } from '@/data/products.json';
import ProductPage from '@/pages/products/index';

describe('HomePage', () => {
  test('renders a link to product page', () => {
    render(<ProductPage products={products} />);

    const link = screen.getByRole('link', {
      name: /product-1/i,
    }) as HTMLAnchorElement;

    expect(link.href).toContain('/products/product-1');
  });
});
