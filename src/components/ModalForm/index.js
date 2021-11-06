import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'

const ModalForm = ({ movieData }) => {
    const handleSubmit = e => {}

    const handleChange = e => {}

    return(
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={movieData.title} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="release_date">Release Date</label>
                <input type="date" name="release_date" id="release_date" value={movieData.release_date} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="url">Movie URL</label>
                <input type="url" name="url" id="url" value={movieData.url} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="vote_average">vote_average</label>
                <input type="number" name="vote_average" id="vote_average" min="0" max="10" step="0.1" value={movieData.vote_average} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genre" multiple onChange={handleChange} value={movieData.genre}>
                    <option defaultValue disabled>Select Genre</option>
                    {
                        genres.map((genre, idx) => 
                        (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                    }
                </select>
            </div>
            <div className="formControl">
                <label htmlFor="runtime">Runtime</label>
                <input type="number" name="runtime" id="runtime" value={movieData.runtime} onChange={handleChange}/>
            </div>
            <div className="formControl w100">
                <label htmlFor="overview">Overview</label>
                <textarea name="overview" id="overview" value={movieData.overview} onChange={handleChange}></textarea>
            </div>
        </form>
    )
}

ModalForm.propTypes = {
    movieData: PropTypes.object
}

const mapStateToProps = state => ({
    movieData: state.modal.movieData,
});

export default connect(mapStateToProps, null)(ModalForm)
