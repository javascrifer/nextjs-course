import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

import { getProducts, Product } from '../../services/product-service';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <>
      <h1>Products page:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>{product.slug}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const products = await getProducts();
  return { props: { products } };
};

export default ProductsPage;
