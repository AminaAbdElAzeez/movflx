import './NewMovies.css'
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function NewMovies (){
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
        <section className="new">
            <div className="overlay">
                <div className="container">
                    <HeadingTitle title={'Release Movies'} subTitle={'ONLINE STREAMING'}/>
                    <div className="row">
                        {
                            movies.map((movie)=>(
                                <div className='col-lg-3 col-md-4 col-sm-6' key={movie.id}>
                                    <div className='new-movie-item'>
                                        <img src={movie.poster} alt={movie.title}/>
                                            <div className='new-movie-btn'>
                                                <button><FontAwesomeIcon icon={faEye}/></button>
                                                <button><FontAwesomeIcon icon={faHeart}/></button>
                                            </div>
                                        <h4 className='new-movie-title'>{movie.title.slice(0,42)}</h4>
                                    </div>
                                </div>
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewMovies
