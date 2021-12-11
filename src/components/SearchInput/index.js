import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router';
import { useRouter } from 'next/router'; 
import './index.css';

const SearchInput = () => {
  const router = useRouter();
  const searchQuery = router.query.searchQuery;
  // const { query: searchQuery } = useParams()
  // const history = useHistory();
  const [ searchText, setSearchText ] = useState();

  useEffect(() => {
    setSearchText(searchQuery)
  }, [searchQuery])

  const onFormSubmit = e => {
    e.preventDefault();
    router.push(`/search/${searchText}`)
    // history.push({ pathname: `/search/${searchText}` });
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
