import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router';
import PropTypes from 'prop-types'
import { genres } from '../../constant'
import '@styles/modalForm.scss'
import * as _ from 'lodash';

const MovieSchema = Yup.object({
    title: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required!'),
    release_date: Yup.string().required('Required!'),
    url: Yup.string(),
    vote_average: Yup.number().min(0.1, 'Should be greater!').max(10, 'Should be less!').required('Required!'),
    genres: Yup.array().of(Yup.mixed().oneOf([genres])).min(1, "Select at least 1 genre!").required('Required!'),
    runtime: Yup.number().min(1, "Should be greater!").required('Required!'),
    overview: Yup.string().min(5, 'Provide more detailed overview!').max(1000, 'Length is too much!').required('Required!'),
});

const ModalForm = ({ movieData, onFormSubmit }) => {
    const initialMovieData = Object.freeze(movieData);
    const [isBlocking, setIsBlocking] = useState(false);

    useEffect(() => {
        if(!_.isEqual(initialMovieData, movieData)) {
            setIsBlocking(true)
        }
    }, [movieData])

    const onSubmit = (...args) => {
        setIsBlocking(false);
        onFormSubmit(...args)
    }

    const initialMovie = {
        title: "",
        release_date: "",
        url: "",
        vote_average: 0,
        genres: [],
        runtime: 0,
        overview: ""
    }

    return(
        <Formik
            initialValues = {{
                ...((Object.keys(movieData).length > 0) ? movieData : initialMovie)
            }}
            validationSchema={MovieSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
            <Form>
                <Prompt
                    when={isBlocking}
                    message={ location => `Are you sure you want to go to ${location.pathname}?`} // TODO: implement onchange hanler onChange={setIsBlocking(event.target.value.length > 0)}
                />
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
                    <label htmlFor="url">Movie URL</label>
                    <Field id="url" name="url" type="url" />
                    {errors.url && touched.url ? (
                        <div>{errors.url}</div>
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
