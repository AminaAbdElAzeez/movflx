import React, { useEffect, useState } from 'react';
import './Home.css'
import Intro from '../../Component/Intro/Intro';
import Upcoming from '../../Component/Upcoming/Upcoming';
import Service from '../../Component/Service/Service';
import Live from '../../Component/Live/Live';
import BestFilm from '../../Component/BestFilm/BestFilm';

function Home (props) {
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
        <div className='home'>
            <Intro/>
            <Upcoming MyMovies={movies}/>
            <Service/>
            <Live/>
            <BestFilm MyMovies={movies}/>
        </div>
    )
}

export default Home
