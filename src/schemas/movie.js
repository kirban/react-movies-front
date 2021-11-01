import PropTypes from 'prop-types';

export default {
    id: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string
}