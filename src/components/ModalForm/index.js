import React from 'react'
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'

const ModalForm = ({ movieData }) => {
    const handleSubmit = e => {}

    const handleChange = e => {}

    return(
        <Formik
            initialValues = {{
                ...movieData
            }}
            onSubmit = {handleSubmit}
        >
            <Form>
                <div className="formControl">
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Enter movie title" />
                </div>
                <div className="formControl">
                    <label htmlFor="release_date">Release Date</label>
                    <Field id="release_date" name="release_date" type="date" />
                </div>
                <div className="formControl">
                    <label htmlFor="url">Movie URL</label>
                    <Field id="url" name="url" type="url" />
                </div>
                <div className="formControl">
                    <label htmlFor="vote_average">Rating</label>
                    <Field id="vote_average" name="vote_average" type="number" min="0" max="10" step="0.1" />
                </div>
                <div className="formControl">
                    <label htmlFor="genre">Genre</label>
                    <Field id="genre" name="genre" as="select" multiple>
                        <option defaultValue disabled>Select Genre</option>
                        {
                            genres.map((genre, idx) => 
                            (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                        }
                    </Field>
                </div>
                <div className="formControl">
                    <label htmlFor="runtime">Runtime</label>
                    <Field type="number" name="runtime" id="runtime" />
                </div>
                <div className="formControl w100">
                    <label htmlFor="overview">Overview</label>
                    <Field as="textarea" name="overview" id="overview"/>
                </div>
                <div className="modalControls">
                    <button className="btn btn-outlined" type="reset">Reset</button>
                    <button className="btn btn-primary" type="submit">Confirm</button>
                </div>
            </Form>
        </Formik>
    )
}

ModalForm.propTypes = {
    movieData: PropTypes.object
}

const mapStateToProps = state => ({
    movieData: state.modal.movieData,
});

export default connect(mapStateToProps, null)(ModalForm)
