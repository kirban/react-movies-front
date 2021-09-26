import React from 'react';
import '@styles/index.css';
import { Header, MoviesList, Footer } from '@components';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <MoviesList />
      </div>
      <Footer />
    </>
  );
}

export default App;
