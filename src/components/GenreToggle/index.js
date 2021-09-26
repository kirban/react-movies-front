import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class GenreToggle extends React.Component {
  render() {
    const { genresList } = this.props;

    const genreItems = genresList.map((genreName, genreIndex) => (
      <li key={genreIndex.toString()}>
        <input type="radio" name="genres" id={`genres_${genreIndex}`} />
        <label htmlFor={`genres_${genreIndex}`}>{genreName}</label>
      </li>
    ));

    return (
      <>
        <ul className="genresList">
          <li key="default">
            <input type="radio" name="genres" id="genres_default" />
            <label htmlFor="genres_default">All</label>
          </li>
          {genreItems}
        </ul>
  
      </>
    );
  }
}

GenreToggle.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string)
}
