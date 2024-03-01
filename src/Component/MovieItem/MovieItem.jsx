import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MovieItem.css';
import { useContext } from 'react';
import MoviesContext from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';


function MovieItem ({movies}){
    const {addToWishList} = useContext(MoviesContext);

    return(
        <div className="row">
            {movies.map((movie)=>(
                <div className='col-lg-3 col-md-4 col-sm-6' key={movie.id}>
                    <div className='movie-slider-item'>
                        <div className='movie-slider-item-img'>
                            <img src={movie.poster} alt={movie.title}/>
                            <div className='movie-slider-item-layer'>
                                <Link to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                                <button onClick={()=>addToWishList({...movie,quantity:1})}><FontAwesomeIcon icon={faHeart}/></button>
                            </div>
                        </div>
                    </div>              
                </div>
            ))}
        </div>
    )
}


export default MovieItem;