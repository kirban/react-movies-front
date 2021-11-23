import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'
import { MovieBaseSchema, MovieSchema } from '../../schemas/movie'
import * as _ from 'lodash';

const ModalForm = ({ movieData, onFormSubmit }) => {
    const [ isNew, setIsNew ] = useState(true);

    useEffect(() => {
        setIsNew(_.isEmpty(movieData))
    }, [])

    const initialMovie = {
        title: "",
        tagline: "",
        vote_average: 0,
        vote_count: 1,
        release_date: "",
        poster_path: "",
        overview: "",
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0,
    }

    return(
        <Formik
            initialValues = {{
                ...( isNew ? movieData : initialMovie)
            }}
            validationSchema={ isNew ? MovieBaseSchema : MovieSchema}
            onSubmit={onFormSubmit}
        >
            {({ errors, touched }) => (
            <Form>
                <div className="formControl">
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Enter movie title" />
                    {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                    ) : null}
                </div>
                <div className="formControl">
                    <label htmlFor="release_date">Release Date</label>
                    <Field id="release_date" name="release_date" type="date" />
                    {errors.release_date && touched.release_date ? (
                        <div>{errors.release_date}</div>
                    ) : null}
                </div>
                <div className="formControl">
                    <label htmlFor="poster_path">Movie Image URL</label>
                    <Field id="poster_path" name="poster_path" type="url" />
                    {errors.poster_path && touched.poster_path ? (
                        <div>{errors.poster_path}</div>
                    ) : null}
                </div>
                <div className="formControl">
                    <label htmlFor="vote_average">Rating</label>
                    <Field id="vote_average" name="vote_average" type="number" min="0" max="10" step="0.1" />
                    {errors.vote_average && touched.vote_average ? (
                        <div>{errors.vote_average}</div>
                    ) : null}
                </div>
                <div className="formControl">
                    <label htmlFor="genre">Genre</label>
                    <Field id="genres" name="genres" as="select" multiple>
                        <option defaultValue disabled>Select Genre</option>
                        {
                            genres.map((genre, idx) => 
                            (<option key={idx} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>))
                        }
                    </Field>
                    {errors.genres && touched.genres ? (
                        <div>{errors.genres}</div>
                    ) : null}
                </div>
                <div className="formControl">
                    <label htmlFor="runtime">Runtime</label>
                    <Field type="number" name="runtime" id="runtime" />
                    {errors.runtime && touched.runtime ? (
                        <div>{errors.runtime}</div>
                    ) : null}
                </div>
                <div className="formControl w100">
                    <label htmlFor="overview">Overview</label>
                    <Field as="textarea" name="overview" id="overview"/>
                    {errors.overview && touched.overview ? (
                        <div>{errors.overview}</div>
                    ) : null}
                </div>
                <div className="modalControls">
                    <button className="btn btn-outlined" type="reset">Reset</button>
                    <button className="btn btn-primary" type="submit">Confirm</button>
                </div>
            </Form>
            )}
        </Formik>
    )
}

ModalForm.propTypes = {
    movieData: PropTypes.object,
    onFormSubmit: PropTypes.func,
}

const mapStateToProps = state => ({
    movieData: state.modal.movieData,
});

export default connect(mapStateToProps, null)(ModalForm)
