import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/fetchMovies';

const GenreToggle = ({ genresList, sortByGenre }) => {
  const genreItems = genresList.map((genreName, genreIndex) => (
    <li key={genreIndex.toString()}>
      <input type="radio" name="genres" id={`genres_${genreIndex}`} onChange={sortByGenre.bind({}, genreName)}/>
      <label htmlFor={`genres_${genreIndex}`}>{genreName}</label>
    </li>
  ));
  
  return (
      <ul className="genresList">
        <li key="default">
          <input type="radio" name="genres" id="genres_default" onChange={sortByGenre.bind({}, "")}/>
          <label htmlFor="genres_default">All</label>
        </li>
        {genreItems}
      </ul>
  );
}

GenreToggle.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string)
}

const mapDispatchToProps = dispatch => ({
  sortByGenre: genre => dispatch(fetchMovies(`?limit=6&searchBy=genres&filter=${genre}`))
})

export default connect(null, mapDispatchToProps)(GenreToggle)