import React, { useState, useEffect } from 'react';
import { SearchInput, MoviePreview } from '@components';
import logo from '../../logo.svg';
import '@styles/header.scss';

const Header = (props) => {
    const [selectedMovie, setSelectedMovie] = useState({})

    useEffect(() => {
        if(props.selectedMovie){
            setSelectedMovie(props.selectedMovie)
        }
        document.getElementById("selectedMovie").classList.toggle("hidden")
        // document.getElementById("searchSection").classList.toggle("hidden")
        return () => {
        }
    }, [props.selectedMovie])

    return(
        <header>
            <div id="selectedMovie" className="hidden">
                {(props.selectedMovie) ? <MoviePreview selectedMovie={props.selectedMovie}/> : ""}
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