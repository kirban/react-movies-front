import React from 'react';
import '@styles/index.css';
import { Header, MoviesList, Footer } from '@components';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
