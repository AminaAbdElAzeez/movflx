import React, { useEffect, useState } from 'react'
import MovieTop from '../../Component/MovieTop/MovieTop'
import NewMovies from '../../Component/NewMovies/NewMovies';

function Movie () {
    useEffect(()=>{
        fetchmoviesHandler()
    })
    const [movieslist , setmovieslist] = useState([]); 
    const [error , seterror] = useState(null);
    async function fetchmoviesHandler(){
        seterror(null);
        try {
            const response = await fetch('http://www.omdbapi.com/?s=star wars&apikey=d7d275b8');
            if(! response.ok){
                throw new Error ("some thing is wrong");
            }
            const data = await response.json();
            const moviesData = data.Search.map((Movie)=>{
                return{
                    id : Movie.imdbID ,
                    title : Movie.Title ,
                    year : Movie.Year ,
                    type : Movie.Type ,
                    poster : Movie.Poster
                }
            })
            setmovieslist(moviesData)
            }
            catch(error){
            seterror(error.message)
        }
    }
    return (
        <div className='movie'>
            <MovieTop/>
            <NewMovies MyMovies={movieslist}/>
        </div>
    )
}

export default Movie
