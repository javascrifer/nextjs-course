import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import {
  // getProductsSlugs,
  getPopularProductsSlugs,
  getProductBySlug,
  Product,
} from '../../services/product-service';

interface ProductPageProps {
  product?: Product;
}

interface ProductPageURLQuery extends NodeJS.Dict<string | string[]> {
  slug: string;
}

// Static site generation example with dynamic parameter:
// 1. During build time NextJS will execute getStaticPaths function
// to find out which dynamic paths are available.
// 2. Afterwards it will execute getStaticProps function
// and generate HTML content of the Product page as a HTML for each path.
const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  // If getStaticPaths has fallback prop set to true we need to handle loading state.
  return <h1>{product?.slug ?? 'Loading'}</h1>;
};

// Fallback prop:
// false - will return 404 if you visit path which is not listed in paths array
// true - will fallback to getStaticProps and generate page on the go
// blocking - same as true value but will not have loading state
//
// Use true if you have tons of content to generate.
//
// Example code for fallback === false:
// export const getStaticPaths: GetStaticPaths<ProductPageURLQuery> = async () => {
//   const productSlugs = await getProductsSlugs();
//   return {
//     paths: productSlugs.map((slug) => ({ params: { slug } })),
//     fallback: false,
//   };
// };
export const getStaticPaths: GetStaticPaths<ProductPageURLQuery> = async () => {
  const productSlugs = await getPopularProductsSlugs();
  return {
    paths: productSlugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  ProductPageURLQuery
> = async ({ params }) => {
  const product = await getProductBySlug(params!.slug);

  if (!product) {
    return { notFound: true };
  }

  return product ? { props: { product } } : { notFound: true };
};

export default ProductPage;
