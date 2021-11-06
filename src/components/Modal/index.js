import React from 'react';
import PropTypes from 'prop-types';
import {
    ModalForm
} from '@components';
import "@styles/modal.scss";
import { connect } from 'react-redux';

// const Modal = ({
//     show,
//     type,
//     title,
//     movieId,
//     onClose,
//     onSubmit
// }) => {
const Modal = ({ show, title, type, onClose, addMovie }) => {
    if (!show) return null;
    if (!type) return null;

    const onSubmit = e => {
        console.log("submit", e.target)
    }

    return(
        <div className="modalWindow">
            <div className="modalContent">
                <h2 className="modalHead">{title}</h2>
                <span className="closeModal" onClick={onClose}>&times;</span>
                <div className="modalBody">
                    {
                        (type === "form") ? <ModalForm /> :
                        (type === "confirm") ? <span className="removeSpan">Are you sure you want to delete this movie?</span> : 
                        ""
                    }
                </div>
                <div className="modalControls">
                    {
                        (type === "form") ? <button className="btn btn-outlined">Reset</button> :
                        ""
                    }
                    <button className="btn btn-primary" onClick={onSubmit}>Confirm</button>
                </div>
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
    onSubmit: PropTypes.func,
}

const mapStateToProps = state => ({
    show: state.modal.show,
    title: state.modal.title,
    type: state.modal.type,
})

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { title: '', type: '' } }),
    addMovie: (movie) => dispatch({ type: 'ADD_MOVIE', payload: { movie } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)