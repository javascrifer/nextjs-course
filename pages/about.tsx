import type { NextPage, GetStaticProps } from 'next';

interface AboutPageProps {
  title: string;
}

// Static site generation example:
// During build time NextJS will execute getStaticProps function
// and generate HTML content of the Home page as a HTML.
const AboutPage: NextPage<AboutPageProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  return { props: { title: 'About Page' } };
};

export default AboutPage;
