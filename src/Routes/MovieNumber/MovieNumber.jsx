import { useContext, useEffect, useState } from 'react';
import './MovieNumber.css'
import MoviesContext from '../../Context/MoviesContext';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieNumber = () => {
  const [movies , setMovies] = useState([]);
  const {addToWishList} = useContext(MoviesContext);
  const {id} = useParams();
  // console.log(id)

  useEffect(()=>{
  fetchApi()
  } , [])

  async function fetchApi(){
      const response = await fetch(`http://www.omdbapi.com/?s=adventure&apikey=42ef2173`);
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

  const movie = movies.find((b)=>b.id === id);
  // console.log(movie)

  return (
    <div className='movie-number'>
      <div className='container'>
        {movie && (
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4'>
              <div className='movie-number-img'>
                <img src={movie.poster} alt={movie.title}/>
              </div>
            </div>
            <div className='col-lg-8 col-md-8 col-sm-8'>
              <div className='movie-number-wrapper'>
                <h3>{movie.title}</h3>
                <p><b>type : </b>{movie.type}</p>
                <p><b>year : </b>{movie.year}</p>
                <button onClick={()=>addToWishList({...movie,quantity:1})}>Add to WishList<FontAwesomeIcon icon={faHeart} className='movie-icon'/></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) 
}

export default MovieNumber
