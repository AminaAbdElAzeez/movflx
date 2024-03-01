import { useEffect, useState } from 'react';
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
        const response = await fetch(`https://www.omdbapi.com/?s=adventure&apikey=42ef2173`);
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
        // console.log(dataTransform)
    }
    return (
        <div className='home'>
            <Intro/>
            <Upcoming movies={movies}/>
            <Service/>
            <Live/>
            <BestFilm movies={movies}/>
        </div>
    )
}

export default Home
