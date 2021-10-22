import React, { useState, useEffect } from 'react';
import { SearchInput, MoviePreview } from '@components';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import '@styles/header.scss';
import * as _ from 'lodash';

const Header = (props) => {
    const initialMovie = {}
    const [selectedMovie, setSelectedMovie] = useState(initialMovie)
    const [previewActive, setPreviewActive] = useState(false)

    useEffect(() => {
        
        if(!_.isEmpty(props.selectedMovie) && previewActive === false) {
            setPreviewActive(true)
        }

        setSelectedMovie(props.selectedMovie)

        return () => {
            return initialMovie
        }
    }, [props.selectedMovie])

    useEffect(() => {
        document.getElementById("selectedMovie").classList.toggle("hidden")
        document.getElementById("searchSection").classList.toggle("hidden")
    }, [previewActive])

    const handleSearchButtonClick = () => {
        setPreviewActive(false)
        setSelectedMovie(initialMovie)
        props.onMovieSelect(initialMovie)
    }

    return(
        <header>
            <div id="selectedMovie" className="">
                {(props.selectedMovie) ? <MoviePreview selectedMovie={selectedMovie} onSearchButtonClick={handleSearchButtonClick}/> : ""}
            </div>
            <div id="searchSection" className="hidden">
                <div className="headerBg"></div>
                <div className="headerContent-top">
                    <img src={logo} alt="App Logo" className="logo" />
                    <button className="btn addMovieBtn" data-action="add" onClick={props.onMovieCreate}>+ add movie</button>
                </div>
                <div className="headerContent-main">
                    <h1>Find your movie</h1>
                    <SearchInput />
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
    onMovieCreate: PropTypes.func,
    onMovieSelect: PropTypes.func,
}

export default Header
// export default class Header extends React.Component {
//     render() {
//         return (
//             <>  
                // <header>
                //     <div className="headerBg"></div>
                //     <div className="headerContent-top">
                //         <img src={logo} alt="App Logo" className="logo" />
                //         <button className="btn addMovieBtn" data-action="add" onClick={this.props.onMovieCreate}>+ add movie</button>
                //     </div>
                //     <div className="headerContent-main">
                //         <h1>Find your movie</h1>
                //         <SearchInput />
                //     </div>
                // </header>
//             </>
//         )
//     }
// }