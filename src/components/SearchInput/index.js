import React from 'react';
import './index.css';

export default class SearchInput extends React.PureComponent {
  render() {
    return (
      <form action="search.php">
        <input className="searchInput" type="text" name="search" id="" placeholder="What do you want to watch?" />
        <input className="searchButton" type="submit" value="Search" />
      </form>
    );
  }
}
