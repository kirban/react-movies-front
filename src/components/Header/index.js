import React, { useState, useEffect } from 'react';
import { MoviePreview, MovieSearch } from '@components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '@styles/header.scss';

const Header = ({ selectedMovie }) => {
    const [previewActive, setPreviewActive] = useState(false)

    useEffect(() => {
        setPreviewActive(Object.keys(selectedMovie).length !== 0)
    }, [selectedMovie])

    return(
        <header>
            { (previewActive) ? <MoviePreview /> : <MovieSearch />}
        </header>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movies.selectedMovie,
    };
}

export default connect(mapStateToProps)(Header)