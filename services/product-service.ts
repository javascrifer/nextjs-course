import path from 'path';
import { cwd } from 'process';
import { readFile } from 'fs/promises';

export interface Product {
  slug: string;
}

export const getProducts = async () => {
  const productJSONPath = path.join(cwd(), '/data/products.json');
  const productsResponse = JSON.parse(await readFile(productJSONPath, 'utf-8'));

  return productsResponse.products as Product[];
};

export const getProductsSlugs = async () => {
  const products = await getProducts();
  return products.map(({ slug }) => slug);
};

export const getPopularProductsSlugs = async () => {
  const [product1, product2] = await getProducts();
  return [product1, product2].map(({ slug }) => slug);
};

export const getProductBySlug = async (slug: string) => {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
};
