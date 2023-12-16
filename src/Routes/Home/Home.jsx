import React, { useEffect, useState } from 'react';
import './Home.css'
import Intro from '../../Component/Intro/Intro';
import Upcoming from '../../Component/Upcoming/Upcoming';
import Service from '../../Component/Service/Service';
import Live from '../../Component/Live/Live';
import BestFilm from '../../Component/BestFilm/BestFilm';

function Home (props) {
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
        <div className='home'>
            <Intro/>
            <Upcoming MyMovies={movieslist}/>
            <Service/>
            <Live/>
            <BestFilm MyMovies={movieslist}/>
        </div>
    )
}

export default Home
