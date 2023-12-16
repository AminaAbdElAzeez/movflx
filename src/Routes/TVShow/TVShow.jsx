import React, { useEffect, useState } from 'react'
import TVTop from '../../Component/TVTop/TVTop'
import TV from '../../Component/TV/TV';

function TVShow () {
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
        <div className='tv-show'>
            <TVTop/>
            <TV MyMovies={movies}/>
        </div>
    )
}

export default TVShow
