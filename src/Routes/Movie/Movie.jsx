import React, { useEffect, useState } from 'react'
import MovieTop from '../../Component/MovieTop/MovieTop'
import NewMovies from '../../Component/NewMovies/NewMovies';

function Movie () {
    const [movies , setMovies] = useState([]);

    useEffect(()=>{
    fetchApi()
    } , [])

    async function fetchApi(){
    const response = await fetch('http://www.omdbapi.com/?s=star%20wars&apikey=d7d275b8');
    const data = await response.json();
    const dataTransform = data.Search.map((item)=>{
        return{
        id : item.imdbID ,
        title : item.Title ,
        poster : item.Poster ,
        type : item.Type ,
        year : item.Year
        }
    })
    setMovies(dataTransform);
    }
    return (
        <div className='movie'>
            <MovieTop/>
            <NewMovies MyMovies={movies}/>
        </div>
    )
}

export default Movie
