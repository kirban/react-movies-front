import React from 'react';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary } from '@components';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
