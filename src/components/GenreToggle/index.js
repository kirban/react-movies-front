import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMoviesAction from '../../actions/fetchMovies';
import { useRouter } from 'next/router';

const GenreToggle = ({ genresList, sortByGenre }) => {
  const router = useRouter();
  const query = router.query;
  const genreParam = query.get('genre');
  const [init, setInit] = useState();
  
  useEffect(() => {
    setInit(true)
  }, [])

  useEffect(() => {
    if(genreParam){
      sortByGenre(genreParam, 'genre');
    } else if (genreParam === null && init) {
      sortByGenre('', '');
    }
  }, [genreParam]);

  const handleGenreChange = genreName => {
    if (genreName.length === 0) {
      router.push('/search');
    } else {
      router.push(`/search/?genre=${genreName}`);
    }
  };

  const genreItems = genresList.map((genreName, genreIndex) => (
    <li key={genreIndex.toString()}>
      <input type="radio" name="genres" id={`genres_${genreIndex}`} onChange={handleGenreChange.bind({}, genreName)}/>
      <label htmlFor={`genres_${genreIndex}`}>{genreName}</label>
    </li>
  ));
  
  return (
      <ul className="genresList">
        <li key="default">
          <input type="radio" name="genres" id="genres_default" onChange={handleGenreChange.bind({}, "")}/>
          <label htmlFor="genres_default">All</label>
        </li>
        {genreItems}
      </ul>
  );
}

GenreToggle.propTypes = {
  sortByGenre: PropTypes.func,
  genresFilter: PropTypes.string,
  fetchMovies: PropTypes.func,
}

const sortByGenreAction = (genre, searchBy) => ({
  type: "SORT_BY_GENRE",
  payload: {
    genre,
    searchBy,
  }
});

const mapDispatchToProps = dispatch => ({
  sortByGenre: (genre, searchBy) => { dispatch(sortByGenreAction(genre, searchBy)); dispatch(fetchMoviesAction()) },
  fetchMovies: () => dispatch(fetchMoviesAction()),
})

export default connect(null, mapDispatchToProps)(GenreToggle)