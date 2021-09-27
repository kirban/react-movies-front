import React from 'react';
import '@styles/index.css';
import { Header, MoviesList, Footer } from '@components';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <MoviesList />
      </main>
      <Footer />
    </>
  );
}

export default App;
