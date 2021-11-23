import React from 'react';
import PropTypes from 'prop-types';
import {
    ModalForm
} from '@components';
import "@styles/modal.scss";
import { connect } from 'react-redux';
import { postMovieRequest, putMovieRequest, deleteMovieRequest } from '../../actions/movieRequests';

const Modal = ({ movieId, show, title, type, onClose, addMovie, editMovie, deleteMovie }) => {
    if (!show) return null;
    if (!type) return null;

    const onSubmit = movie => {
        switch (type) {
            case 'add':
                addMovie(movie);
                break;
            case 'edit':
                editMovie(movie);
                break;
            case 'delete':
                deleteMovie(movieId);
                break;
            default:
                return null;
        }
    }

    return(
        <div className="modalWindow">
            <div className="modalContent">
                <h2 className="modalHead">{title}</h2>
                <span className="closeModal" onClick={onClose}>&times;</span>
                <div className="modalBody">
                    {
                        (type === "add" || type === "edit") ? <ModalForm onFormSubmit={onSubmit}/> :
                        (type === "delete") ? <span className="removeSpan">Are you sure you want to delete this movie?</span> : 
                        ""
                    }
                </div>
                {
                    (type !== "add" && type !== "edit") ? (
                        <div className="modalControls">
                            <button className="btn btn-primary" onClick={onSubmit}>Confirm</button>
                        </div>
                    ) : ""
                }

            </div>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    movieId: PropTypes.number,
    show: PropTypes.bool,
    type: PropTypes.string,
    onClose: PropTypes.func,
    addMovie: PropTypes.func,
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
}

const mapStateToProps = state => ({
    show: state.modal.show,
    title: state.modal.title,
    type: state.modal.type,
    movieId: state.modal.movieData.id,
})

const addMovie = movie => ({
    type: 'ADD_MOVIE',
    payload: {
        movie
    },
});

const editMovie = movie => ({
    type: "EDIT_MOVIE",
    payload: {
        movie
    },
});

const deleteMovie = movieId => ({
    type: "DELETE_MOVIE",
    payload: {
        movie: {
            id: movieId
        }
    },
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { title: '', type: '', movie: {} } }),
    addMovie: (movie) => {dispatch(addMovie(movie)); dispatch(postMovieRequest())},
    editMovie: (movie) => {dispatch(editMovie(movie)); dispatch(putMovieRequest())},
    deleteMovie: (movieId) => {dispatch(deleteMovie(movieId)); dispatch(deleteMovieRequest())},
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)