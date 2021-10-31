import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'
import mockedMoviesList from "../../mocks/movies"

const ModalForm = ({ movieId }) => {
    const initialMovie = {
        id: "0",
        poster_path: "",
        title: "",
        release_date: "",
        url: "",
        vote_avarage: 0,
        genres: [],
        runtime: 0,
        overview: ""
    }
    const [movie, setMovie] = useState(initialMovie)

    useEffect(() => {
        if (movieId) {
            const movie = mockedMoviesList.find(movie => movie.id === movieId)
            setMovie(movie)
        }
        return () => {
            setMovie(initialMovie)
        }
    }, [])

    const handleSubmit = e => {}

    const handleChange = e => {
        const inputName = e.target.name;

        if (e.target.nodeName === "SELECT" && e.target.name === "genre") {
            const { selectedOptions } = e.target
            const selectedOptionsValues = Array.prototype.map.call(selectedOptions, option => option.value)
            setMovie({ ...movie, genres: selectedOptionsValues })
        } else {
            setMovie({ ...movie, [inputName]: e.target.value })
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={movie.title} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="release_date">Release Date</label>
                <input type="date" name="release_date" id="release_date" value={movie.release_date} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="url">Movie URL</label>
                <input type="url" name="url" id="url" value={movie.url} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="vote_avarage">vote_avarage</label>
                <input type="number" name="vote_avarage" id="vote_avarage" min="0" max="10" step="0.1" value={movie.vote_avarage} onChange={handleChange}/>
            </div>
            <div className="formControl">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genre" multiple onChange={handleChange} value={movie.genre}>
                    <option defaultValue disabled>Select Genre</option>
                    {
                        genres.map((genre, idx) => 
                        (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                    }
                </select>
            </div>
            <div className="formControl">
                <label htmlFor="runtime">Runtime</label>
                <input type="number" name="runtime" id="runtime" value={movie.runtime} onChange={handleChange}/>
            </div>
            <div className="formControl w100">
                <label htmlFor="overview">Overview</label>
                <textarea name="overview" id="overview" value={movie.overview} onChange={handleChange}></textarea>
            </div>
        </form>
    )
}

ModalForm.propTypes = {
    movieId: PropTypes.number
}

export default ModalForm
