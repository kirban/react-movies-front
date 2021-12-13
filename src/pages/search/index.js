import React from 'react';
import { BASE_URL } from 'src/constant/index';
import store from '../../store';

function Search() {
    const dispatch = useDispatch()
    return (
        <h1>indexsearch</h1>
    )
}

export async function getServerSideProps (ctx) {
    const { dispatch } = store;
    const { sortBy, sortOrder, genre } = ctx.query;
    console.log('url', `${BASE_URL}/movies?sortBy=${(sortBy)?sortBy:''}&sortOrder=${(sortOrder)?sortOrder:'asc'}&searchBy=${(genre && genre.split(',').length)?'genre':'title'}&filter=${(genre)?genre:''}&offset=&limit=6`)
    const res = await fetch(`${BASE_URL}/movies?sortBy=${(sortBy)?sortBy:''}&sortOrder=${(sortOrder)?sortOrder:'asc'}&searchBy=${(genre && genre.split(',').length)?'genre':'title'}&filter=${(genre)?genre:''}&offset=&limit=6`);
    const movies = await res.json();

    dispatch({ type: "REDUX_THUNK_LOAD_MOVIES_SUCCESS", payload: { movies: movies.data } })

    return {
        props: {
            movies: movies.data
        }
    }
}

export default Search;
