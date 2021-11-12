import React from 'react';
import { useHistory, useParams } from 'react-router';
import { connect } from 'react-redux';
import fetchMoviesAction from '../../actions/fetchMovies';
import './index.css';

const SearchInput = ({ searchByText }) => {
  const { query: searchQuery } = useParams()
  const history = useHistory();

  const onFormSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.firstChild.value;
    history.push({ pathname: `/search/${searchValue}` });
    searchByText(searchValue);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input className="searchInput" type="text" name="search" id="" placeholder="What do you want to watch?" defaultValue={searchQuery ? searchQuery : ''}/>
      <input className="searchButton" type="submit" value="Search" />
    </form>
  );
}

const searchByTextAction = (text) => ({
  type: "SEARCH_BY_TEXT",
  payload: {
      text
  }
})

const mapDispatchToProps = dispatch => ({
  searchByText: text => { dispatch(searchByTextAction(text)); dispatch(fetchMoviesAction()); },
})

export default connect(null, mapDispatchToProps)(SearchInput);
