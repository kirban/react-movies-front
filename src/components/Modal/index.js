import React from 'react';
import PropTypes from 'prop-types';
import { ModalForm } from '@components';
import "@styles/modal.scss";

export default class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render(){
        if (!this.props.show) return null;
        if (!this.props.type) return null;
        return(
            <div className="modalWindow">
                <div className="modalContent">
                    <h2 className="modalHead">{this.props.title}</h2>
                    <span className="closeModal" onClick={this.onClose}>&times;</span>
                    <div className="modalBody">
                        {
                            (this.props.type === "form" && !this.props.movieId) ? <ModalForm /> :
                            (this.props.type === "form" && this.props.movieId) ? <ModalForm movieId={this.props.movieId}/> :
                            (this.props.type === "confirm") ? <span className="removeSpan">Are you sure you want to delete this movie?</span> : 
                            ""
                        }
                    </div>
                    <div className="modalControls">
                        {
                            (this.props.type === "form") ? <button className="btn btn-outlined">Reset</button> :
                            ""
                        }
                        <button className="btn btn-primary" onClick={this.onSubmit}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    movieId: PropTypes.number,
    show: PropTypes.bool.isRequired,
    type: function(props, propName, componentName) {
        if (props[propName] !== "form" && props[propName] !== "confirm") {
            return new Error("Wrong modal 'type' selected!")
        }
    }
} 