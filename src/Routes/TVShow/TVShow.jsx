import React, { useEffect, useState } from 'react'
import TVTop from '../../Component/TVTop/TVTop'
import TV from '../../Component/TV/TV';

function TVShow () {
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
        <div className='tv-show'>
            <TVTop/>
            <TV MyMovies={movieslist}/>
        </div>
    )
}

export default TVShow
