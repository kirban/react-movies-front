import React from 'react';
import PropTypes from 'prop-types';
import "@styles/modal.scss";

export default class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    onSubmit = e => {
        // ...
        this.onClose(e);
    }

    render(){
        if (!this.props.show) return null;
        if (!this.props.type) return null;
        return(
            <div className="modalWindow">
                <div className="modalContent">
                    <h2 className="modalHead">{this.props.title}</h2>
                    <span className="closeModal" onClick={this.onClose}>&times;</span>
                    <div className="modalBody">{this.props.children}</div>
                    <div className="modalControls">
                        {
                            (this.props.type === "form") ? <button className="btn btn-outlined">Reset</button> : ""
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
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    type: "form" || "confirm"
} 