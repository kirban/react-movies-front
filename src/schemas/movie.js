import * as Yup from 'yup';

const MovieBaseSchema = Yup.object({
    title: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required!'),
    tagline: Yup.string().notRequired(),
    vote_average: Yup.number().positive().notRequired(),
    vote_count: Yup.number().positive().integer().notRequired(),
    release_date: Yup.string().notRequired(),
    poster_path: Yup.string().url().required().notRequired(),
    overview: Yup.string().required().notRequired(),
    budget: Yup.number().min(0).notRequired(),
    revenue: Yup.number().min(0).notRequired(),
    runtime: Yup.number().min(0).required(),
    genres: Yup.array().of(Yup.string()).min(1).required(),
})

const MovieSchema = MovieBaseSchema.shape({
    id: Yup.number().required(),
})

const MoviesResponse = Yup.object({
    data: Yup.array().of(MovieSchema),
    total: Yup.number(),
    offset: Yup.number(),
    limit: Yup.number(),
})

export {
    MovieBaseSchema,
    MovieSchema,
    MoviesResponse,
}