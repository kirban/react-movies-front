import PropTypes from 'prop-types';

export default {
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    url: PropTypes.string,
    vote_avarage: PropTypes.number,
    genres: PropTypes.ArrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string
}