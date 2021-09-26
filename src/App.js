import React from 'react';
import './styles/index.css';
import GenreToggle from '@components/GenreToggle';
import SearchInput from '@components/SearchInput';

const genresList = ['Comedy', 'Drama', 'Detective', 'Fantasy'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenreToggle genresList={genresList} />
        <SearchInput />
      </header>
    </div>
  );
}

export default App;
