import React from 'react';
import PropTypes from 'prop-types';
import {
    ModalForm
} from '@components';
import "@styles/modal.scss";
import { connect } from 'react-redux';

const Modal = ({ show, title, type, onClose, addMovie, editMovie, deleteMovie }) => {
    if (!show) return null;
    if (!type) return null;

    const onSubmit = e => {
        console.log("submit", e.target)
        console.log("modal component method");
        // get data from form
        const movie = {};
        switch (type) {
            case 'add':
                addMovie(movie);
                break;
            case 'edit':
                editMovie(movie);
                break;
            case 'delete':
                deleteMovie(movie);
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
                {/* <div className="modalControls">
                    {
                        (type === "add" || type === "edit") ? <button className="btn btn-outlined">Reset</button> :
                        ""
                    }
                    <button className="btn btn-primary" onClick={onSubmit}>Confirm</button>
                </div> */}

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

const deleteMovie = movie => ({
    type: "DELETE_MOVIE",
    payload: {
        movie
    },
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { title: '', type: '' } }),
    addMovie: (movie) => dispatch(addMovie(movie)),
    editMovie: (movie) => dispatch(editMovie(movie)),
    deleteMovie: (movie) => dispatch(deleteMovie(movie)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)