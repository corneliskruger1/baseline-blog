import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

interface Props {
  children: JSX.Element;
  title?: string;
}

const PageWrapper = (props: Props): JSX.Element => {
  const { children, title } = props;

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Baseline 1` : 'Baseline 1'}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
