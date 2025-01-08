import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layouts from '../components/layouts/Layouts';
import Header from '../components/Header';
import '../styles/global.scss';

const pageStyles = {
  color: '#232129',
  padding: 0,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layouts>
      <main style={pageStyles}>Test</main>
    </Layouts>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <Header title="Home" />;
};
