import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import GenreToggle from './components/GenreToggle/GenreToggle';

const genresList = [ 'Comedy', 'Drama', 'Detective', 'Fantasy' ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <GenreToggle genresList={genresList} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
