import { useContext, useEffect, useState } from 'react'
import MovieTop from '../../Component/MovieTop/MovieTop'
import './Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import MoviesContext from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import HeadingTitle from '../../Component/HeadingTitle/HeadingTitle';

function Movie () {
    const [allMovies , setAllMovies] = useState([]);
    const [item , setItem] = useState(allMovies);
    const [toggle,setToggle] = useState(false);
    const {addToWishList} = useContext(MoviesContext);

    async function getAll(){
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
        setAllMovies(dataTransform);
    }
    useEffect(()=>{
        getAll()
        } , [])
    
        const filterItems = (catItem) => {
            let updateItems;
            if(catItem==='Comedy') {
                updateItems = allMovies.slice(0,4)
            }
            else if(catItem==="Adventure") {
                updateItems = allMovies.slice(4,8)
            }
            else if(catItem==="Drama") {
                updateItems = allMovies.slice(6,10)
            }
            setItem(updateItems)
            setToggle(true)
        }

    return (
        <section className='movie'>
            <MovieTop/>
            <div className='movie-films'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <HeadingTitle title={'Our Movies'} subTitle={'Try to Show...'}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <div className='filter-btn'>
                                    <button type='button' onClick={()=>setItem(allMovies)}>All</button>
                                    <button type='button' onClick={()=>filterItems("Drama")}>Drama</button>
                                    <button type='button' onClick={()=>filterItems("Comedy")}>Comedy</button>
                                    <button type='button' onClick={()=>filterItems("Adventure")}>Adventure</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>  
                            { toggle ? 
                                (
                                    item.map((movie)=>(
                                        <div className='col-lg-3 col-md-4 col-sm-6' key={movie.id}>
                                            <div className='movie-box'>
                                                <img src={movie.poster} alt={movie.title}/>
                                                <div className='movie-box-overlay'>
                                                    <Link to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                                                    <button onClick={()=>addToWishList({...movie,quantity:1})}><FontAwesomeIcon icon={faHeart}/></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                                : 
                                (
                                    allMovies.map((movie)=>(
                                        <div className='col-lg-3 col-md-4 col-sm-6' key={movie.id}>
                                            <div className='movie-box'>
                                                <img src={movie.poster} alt={movie.title}/>
                                                <div className='movie-box-overlay'>
                                                    <Link to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                                                    <button onClick={()=>addToWishList({...movie,quantity:1})}><FontAwesomeIcon icon={faHeart}/></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movie