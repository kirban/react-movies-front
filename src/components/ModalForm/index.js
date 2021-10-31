import React from 'react'
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'
import mockedMoviesList from "../../mocks/movies"

export default class ModalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            release_date: "",
            url: "",
            vote_avarage: 0,
            genres: [],
            runtime: 0,
            overview: "",
            poster_path: ""
        }
    }

    componentDidMount(){
        if (this.props.movieId) {
            const movie = mockedMoviesList.find(movie => movie.id === this.props.movieId)
            this.setState({ ...movie })
        }
    }

    handleSubmit = e => {}

    handleChange = e => {
        const inputName = e.target.name;

        if (e.target.nodeName === "SELECT") {
            // TODO: fix select choosing

            console.log(e);
            console.log("e.target.value", e.target.value);
            console.log("this.state[inputName]", this.state[inputName]);
            // this.setState({ [inputName]: this.state[inputName].concat([e.target.value]) })
            // this.state[inputName].push(e.target.value)
        } else {
            this.setState({ [inputName]: e.target.value });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formControl">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="formControl">
                    <label htmlFor="release_date">Release Date</label>
                    <input type="date" name="release_date" id="release_date" value={this.state.release_date} onChange={this.handleChange}/>
                </div>
                <div className="formControl">
                    <label htmlFor="url">Movie URL</label>
                    <input type="url" name="url" id="url" value={this.state.url} onChange={this.handleChange}/>
                </div>
                <div className="formControl">
                    <label htmlFor="vote_avarage">vote_avarage</label>
                    <input type="number" name="vote_avarage" id="vote_avarage" min="0" max="10" step="0.1" value={this.state.vote_avarage} onChange={this.handleChange}/>
                </div>
                <div className="formControl">
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre" multiple onChange={this.handleChange} value={this.state.genre}>
                        <option defaultValue disabled>Select Genre</option>
                        {
                            genres.map((genre, idx) => 
                            (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                        }
                    </select>
                </div>
                <div className="formControl">
                    <label htmlFor="runtime">Runtime</label>
                    <input type="number" name="runtime" id="runtime" value={this.state.runtime} onChange={this.handleChange}/>
                </div>
                <div className="formControl w100">
                    <label htmlFor="overview">Overview</label>
                    <textarea name="overview" id="overview" value={this.state.overview} onChange={this.handleChange}></textarea>
                </div>
            </form>
        )
    }
}


ModalForm.propTypes = {
    movieId: PropTypes.number
}