import React from 'react'
import { BASE_URL } from 'src/constant/index';
import store from '../../store';

function SearchQuery() {
    return (
        <h2>SearchQuery</h2>
    )
}

export async function getServerSideProps (ctx) {
    const { dispatch } = store;
    const { searchQuery, sortBy, sortOrder, searchBy, filter } = ctx.query;

    const res = await fetch(`${BASE_URL}/movies?sortBy=${(sortBy)?sortBy:''}&sortOrder=${(sortOrder)?sortOrder:'asc'}&search=${(searchQuery)?searchQuery:''}&searchBy=${(searchBy)?searchBy:'title'}&filter=${(searchBy === 'genres' && filter)?filter:''}&offset=&limit=6`);
    const movies = await res.json();

    dispatch({ type: "REDUX_THUNK_LOAD_MOVIES_SUCCESS", payload: { movies: movies.data } })

    return {
        props: {
            movies: movies.data
        }
    }
}

export default SearchQuery;
