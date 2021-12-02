import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './index.css';

const SearchInput = () => {
  const { query: searchQuery } = useParams()
  const history = useHistory();
  const [ searchText, setSearchText ] = useState();

  useEffect(() => {
    setSearchText(searchQuery)
  }, [searchQuery])

  const onFormSubmit = e => {
    e.preventDefault();
    history.push({ pathname: `/search/${searchText}` });
  }

  const onSearchInput = e => {
    setSearchText(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input className="searchInput" autoFocus type="text" name="search" id="" placeholder="What do you want to watch?" value={searchText ? searchText : ''} onChange={onSearchInput} />
      <input className="searchButton" type="submit" value="Search" />
    </form>
  );
}

export default SearchInput;
