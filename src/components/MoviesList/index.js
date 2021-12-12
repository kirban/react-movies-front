import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import { genres } from '../../constant';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/fetchMovies';
// import { useLocation, useHistory, useParams } from 'react-router';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as _ from 'lodash';

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesList = ({ movies, sortByField, selectMovie, showEdit, showDelete, searchByText }) => {
    const router = useRouter();
    const searchString = router.query.searchQuery;
    // const { query: searchString = '' } = useParams();
    // const history = useHistory();
    // const query = useQuery();
    const query = router.query;
    const sortByParam = query['sortBy'];
    const movieIdParam = query['movie'];
    const sortOrderParam = query['sortOrder'];
    const searchByParam = query['searchBy'];
    const filterParam = query['filter'];
    const offsetParam = query['offset'];

    useEffect(() => {
        // if (_.isEmpty(query)){
        //     searchByText("")
        // } else {
            searchByText(searchString)
        // }
    }, [searchString])

    useEffect(() => {
        if (sortByParam) {
            sortByField(sortByParam);
        }
    }, [sortByParam])

    useEffect(() => {
        if (movieIdParam) {
            selectMovie(movies.find(m => m.id === +movieIdParam));
        }
    },[movieIdParam])

    const onMovieSelect = movie => {
        // history.push({ search: `?movie=${movie.id}` })
        router.push(`/search/?movie=${movie.id}`);
    }

    const handleToggleActionsMenu = e => {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        } else {
            moviesMenu.classList.toggle("active")
        }
    }

    const handleFieldSort = e => {
        const fieldName = e.target.value;
        // router.push(`/search/?sortBy=${fieldName}`)
        router.push({
            pathname: '/search',
            query: {
                sortBy: fieldName
            }
        }, 'as', {})
    }

    // const moviesSort = e => {
    //     const sortPropertyValue = e.target.value;

    //     movies = movies.sort((a, b) => (a[sortPropertyValue] > b[sortPropertyValue]) ? 1 : -1)

    //     const sortingIcon = e.target.nextSibling;
    //     // TODO: rotate icon
    // }

    return(
        <>
            <div className="navbar">
                <ErrorBoundary>
                    <GenreToggle genresList={genres}/>
                </ErrorBoundary>
                <div className="sortItemsContainer">
                    <label htmlFor="sortItems">sort by</label>
                    <select id="sortItems" onChange={handleFieldSort}>
                        <option defaultValue value="release_date">release date</option>
                        <option value="title">title</option>
                        <option value="vote_average">rating</option>
                    </select>
                    <i className="sort sort-asc"></i>
                </div>
            </div>
            <hr />
            <div className="searchResultsCounter"><b>{movies.length}</b> movies found</div>
            <div className="cardsGrid">
                {movies.map((item) => (
                    <div key={item.id} className="card">
                        <div className="cardContent-top">
                            <div className="breadcrumbs" onClick={handleToggleActionsMenu}></div>
                            <div className="moviesActionMenu">
                                <a href="#" className="cross-close" onClick={handleToggleActionsMenu}></a>
                                <ul className="actions-list" onClick={handleToggleActionsMenu}>
                                    <li className="edit-item" data-action="edit" data-item-id={item.id} onClick={showEdit.bind(null, item)}><a>Edit</a></li>
                                    <li className="remove-item" data-action="delete" data-item-id={item.id} onClick={showDelete.bind(null, item)}><a>Delete</a></li>
                                </ul>
                            </div>
                            
                            {/* <img className="cardContentImage" src={item.poster_path} alt="" onClick={onMovieSelect.bind({}, item)}/> */}
                            <Image className="cardContentImage" src={item.poster_path} alt="" onClick={onMovieSelect.bind({}, item)} height={456} width={322} />
                        </div>
                        <div className="cardContent-bottom" onClick={onMovieSelect.bind({}, item)}>
                            <div className="cardContentRow-top">
                                <div className="cardContentTitle">{item.title}</div>
                                <div className="cardContentLabel">{item.release_date.slice(6)}</div>
                            </div>
                            <div className="cardContentDescription">{item.genres.join(', ')}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array,
    onMovieSelect: PropTypes.func,
    showEdit: PropTypes.func,
    showDelete: PropTypes.func,
}

const selectMovieAction = (selectedMovie) => ({
    type: "SELECT_MOVIE",
    payload: {
        movie: selectedMovie,
    },
});

const sortByFieldAction = (fieldName) => ({
    type: "SORT_BY_FIELD",
    payload: {
        field: fieldName
    }
})

const searchByTextAction = (text) => ({
    type: "SEARCH_BY_TEXT",
    payload: {
        text
    }
})

const mapStateToProps = state => ({
    movies: state.movies.displayedMovies,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesAction: () => dispatch(fetchMovies()),
        sortByField: fieldName => {dispatch(sortByFieldAction(fieldName)); dispatch(fetchMovies());},
        searchByText: text => { dispatch(searchByTextAction(text)); dispatch(fetchMovies()); },
        showEdit: movie => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { type: 'edit', movie } }),
        showDelete: movie => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { type: 'delete', movie } }),
        selectMovie: movie => dispatch(selectMovieAction(movie)),
    }
}

export async function getStaticProps() {
    const res = await fetch(`${BASE_URL}/movies?${params.toString()}`);
    const movies = await res.json();

    return {
        props: {
            movies,
        },
        revalidate: 10
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)