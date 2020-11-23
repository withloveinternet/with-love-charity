// pages/_app.js
import React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Client } from "../prismic";
import { LayoutProvider } from '../utils/layout-context';
import Layout from '../components/Layout'

import theme from '../theme'

export default function MyApp(appProps) {
  const { Component, pageProps, props } = appProps;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const layout = props.layout.data;

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {layout.favicon && layout.favicon.large && <link rel="icon" type="image/png" sizes="96x96" href={layout.favicon.large.url} />}
        {layout.favicon && layout.favicon.medium && <link rel="icon" type="image/png" sizes="32x32" href={layout.favicon.medium.url} />}
        {layout.favicon && <link rel="icon" type="image/png" sizes="16x16" href={layout.favicon.url} />}
      </Head>
      <LayoutProvider value={layout}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} /> 
          </Layout>
        </ThemeProvider>
      </LayoutProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const client = Client();
  const layout = (await client.getSingle("layout")) || {};

  return {
    props: {
      layout
    },
  };
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};