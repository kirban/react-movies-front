import React from 'react'
import { useRouter } from 'next/router'
// import App from '../../App';

export default function Search() {
    const router = useRouter()
    return (
        <>
            <h2>SearchIndex</h2>
            <p>Router: {JSON.stringify(router)}</p>
        </>
    )
}