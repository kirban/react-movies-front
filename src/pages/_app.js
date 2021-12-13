import React from 'react';
import { Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import store from '../store';
import Head from 'next/head';

const App = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>Movies Application</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="best service for searching movies" />
        <meta name="keywords" content="next,javascript,movies,netflix" />
      </Head>
      <Modal />
      <ErrorBoundary>
          <Header />
      </ErrorBoundary>
      <main className="content">
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
