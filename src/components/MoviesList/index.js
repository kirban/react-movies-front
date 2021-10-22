import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import mockedMoviesList from '../../mocks/movies.js';
import { genres } from '../../constant';

export default class MoviesList extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            moviesList: []
        };
    }

    componentDidMount() {
        // get from mocked file or API
        this.setState({
            moviesList: mockedMoviesList
        })
    }

    componentWillUnmount() {}

    handleToggleActionsMenu = e => {
        console.log('toggle');
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            console.log('was closed');
            e.target.nextSibling.classList.toggle("active");
        } else {
            console.log('was opened');
            moviesMenu.classList.toggle("active")
        }
    }

    handleMovieSelect = movie => {
        this.props.onMovieSelected(movie)
    }

    moviesSort = e => {
        const sortPropertyValue = e.target.value;

        this.setState({
            moviesList: this.state.moviesList.sort((a, b) => (a[sortPropertyValue] > b[sortPropertyValue]) ? 1 : -1)
        })

        const sortingIcon = e.target.nextSibling;
        // TODO: rotate icon
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <ErrorBoundary>
                        <GenreToggle genresList={genres}/>
                    </ErrorBoundary>
                    <div className="sortItemsContainer">
                        <label htmlFor="sortItems">sort by</label>
                        <select id="sortItems" onChange={this.moviesSort}>
                            <option defaultValue value="releaseDate">release date</option>
                            <option value="title">title</option>
                        </select>
                        <i className="sort sort-asc"></i>
                    </div>
                </div>
                <hr />
                <div className="searchResultsCounter"><b>{this.state.counter}</b> movies found</div>
                <div className="cardsGrid">
                    {this.state.moviesList.map((item) => (
                        <div key={item.id} className="card">
                            <div className="cardContent-top">
                                <div className="breadcrumbs" onClick={this.handleToggleActionsMenu}></div>
                                <div className="moviesActionMenu">
                                    <a href="#" className="cross-close" onClick={this.handleToggleActionsMenu}></a>
                                    <ul className="actions-list" onClick={this.handleToggleActionsMenu}>
                                        <li className="edit-item" data-action="edit" data-item-id={item.id} onClick={this.props.showModal}><a>Edit</a></li>
                                        <li className="remove-item" data-action="delete" data-item-id={item.id} onClick={this.props.showModal}><a>Delete</a></li>
                                    </ul>
                                </div>
                                
                                <img className="cardContentImage" src={"img/"+item.imageUrl} alt="" onClick={this.handleMovieSelect.bind({}, item)}/>
                            </div>
                            <div className="cardContent-bottom" onClick={this.handleMovieSelect.bind({}, item)}>
                                <div className="cardContentRow-top">
                                    <div className="cardContentTitle">{item.title}</div>
                                    <div className="cardContentLabel">{item.releaseDate.slice(6)}</div>
                                </div>
                                <div className="cardContentDescription">{item.genre}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

MoviesList.propTypes = {
    showModal: PropTypes.func.isRequired
}
