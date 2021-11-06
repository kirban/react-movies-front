import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMoviesAction from '../../actions/fetchMovies';

const GenreToggle = ({ genresFilter, genresList, sortByGenre, fetchMovies }) => {

  useEffect(() => {
    fetchMovies()
  }, [genresFilter])

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
  genresList: PropTypes.arrayOf(PropTypes.string),
  sortByGenre: PropTypes.func,
  genresFilter: PropTypes.string,
  fetchMovies: PropTypes.func,
}

const sortByGenre = (genre) => ({
  type: "SORT_BY_GENRE",
  payload: {
    genre
  }
});

const mapStateToProps = state => ({
  genresFilter: state.movies.genresFilter,
})

const mapDispatchToProps = dispatch => ({
  sortByGenre: genre => dispatch(sortByGenre(genre)),
  fetchMovies: () => dispatch(fetchMoviesAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreToggle)