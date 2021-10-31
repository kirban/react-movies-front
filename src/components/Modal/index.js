import React from 'react';
import PropTypes from 'prop-types';
import {
    ModalForm
} from '@components';
import "@styles/modal.scss";

const Modal = ({
    show,
    type,
    title,
    movieId,
    onClose,
    onSubmit
}) => {
    if (!show) return null;
    if (!type) return null;

    return(
        <div className="modalWindow">
            <div className="modalContent">
                <h2 className="modalHead">{title}</h2>
                <span className="closeModal" onClick={onClose}>&times;</span>
                <div className="modalBody">
                    {
                        (type === "form" && !movieId) ? <ModalForm /> :
                        (type === "form" && movieId) ? <ModalForm movieId={movieId}/> :
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
    title: PropTypes.string.isRequired,
    movieId: PropTypes.number,
    show: PropTypes.bool.isRequired,
    type: function(props, propName, componentName) {
        if (props[propName] !== "form" && props[propName] !== "confirm") {
            return new Error("Wrong modal 'type' selected!")
        }
    },
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
}


export default Modal