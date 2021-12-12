import React from 'react';
import { Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
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
