import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary, Modal } from '@components';
import * as moviesListSchema from '../../schemas/moviesList';
import moviesList from '../../mocks/movies.js';

const mockedMovieGenres = [ 'documentary', 'comedy', 'horror', 'crime' ];

export default class MoviesList extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            show: false,
        };
    }

    showModal = e => {
        const itemId = e.target.dataset.itemId;
        console.log("item id", itemId);
        this.setState({
            show: !this.state.show
        })
    }

    handleToggleActionsMenu(e) {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        } else {
            moviesMenu.classList.toggle("active")
        }
    }

    render() {
        return (
            <>
                <Modal title="" onClose={this.showModal} show={this.state.show}>
                    <p>Test Here</p>
                </Modal>
                <div className="navbar">
                    <ErrorBoundary>
                        <GenreToggle genresList={mockedMovieGenres}/>
                    </ErrorBoundary>
                    <div className="sortItemsContainer">
                        <label htmlFor="sortItems">sort by</label>
                        <select id="sortItems">
                            <option defaultValue>release date</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="searchResultsCounter"><b>{this.state.counter}</b> movies found</div>
                <div className="cardsGrid">
                    {moviesList.map((item) => (
                        <div key={item.id} className="card">
                            <div className="cardContent-top">
                                <div className="breadcrumbs" onClick={this.handleToggleActionsMenu}></div>
                                <div className="moviesActionMenu">
                                    <a href="#" className="cross-close" onClick={this.handleToggleActionsMenu}></a>
                                    <ul className="actions-list">
                                        <li className="edit-item" data-action="edit" data-item-id={item.id} onClick={this.showModal}><a>Edit</a></li>
                                        <li className="remove-item" data-action="delete" data-item-id={item.id} onClick={this.showModal}><a>Delete</a></li>
                                    </ul>
                                </div>
                                
                                <img className="cardContentImage" src={"img/"+item.imageUrl} alt="" />
                            </div>
                            <div className="cardContent-bottom">
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
    moviesList: PropTypes.arrayOf(PropTypes.shape(moviesListSchema))
}
