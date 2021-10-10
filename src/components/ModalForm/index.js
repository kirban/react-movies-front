import React from 'react'
import { genres } from '../../constant'
import '@styles/modalForm.scss'

export default class ModalForm extends React.Component {
    constructor() {
        super()
    }

    handleSubmit = e => {}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formControl">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="formControl">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" id="releaseDate" />
                </div>
                <div className="formControl">
                    <label htmlFor="url">Movie URL</label>
                    <input type="url" name="url" id="url" />
                </div>
                <div className="formControl">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name="rating" id="rating" min="0" max="10" step="0.1" />
                </div>
                <div className="formControl">
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre" multiple>
                        <option defaultValue disabled>Select Genre</option>
                        {
                            genres.map((genre, idx) => 
                            (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                        }
                    </select>
                </div>
                <div className="formControl">
                    <label htmlFor="runtime">Runtime</label>
                    <input type="number" name="runtime" id="runtime" />
                </div>
                <div className="formControl w100">
                    <label htmlFor="overview">Overview</label>
                    <textarea name="overview" id="overview"></textarea>
                </div>
            </form>
        )
    }
}