import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const Button = ({ label }: { label: string }) => (
  <button type="button">{label}</button>
);

const Title = styled(Button)`
  ${(props) => props.theme.borderRadius}
`;

interface HomePageProps {
  title: string;
}

// Incremental static regeneration example:
// 1. During build time NextJS will execute getStaticProps function
// and generate HTML content of the About page as a HTML.
// 2. NextJS will re-build step 1 every 10 seconds.
const HomePage: NextPage<HomePageProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* NextJS has build in image optimization support. */}
      {/* It optimizes given image to webp format and stores it in public directory. */}
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return { props: { title: 'Home page' }, revalidate: 10 };
};

export default HomePage;
