import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, OuterContainer } from '../components/layouts';
import { Navbar } from '../components/navbar';

import { theme } from '../theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <OuterContainer>
            <Navbar />
            <Component {...pageProps} />
          </OuterContainer>
        </ThemeProvider>
      </>
    );
  }
}
