import TVTop from '../../Component/TVTop/TVTop'
import './TVShow.css'
import HeadingTitle from '../../Component/HeadingTitle/HeadingTitle';
import { useContext, useEffect, useState } from 'react';
import MoviesContext from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

function TVShow () {
    const [search,setSearch] = useState("")
    const [movies , setMovies] = useState([]);
    const {addToWishList} = useContext(MoviesContext);


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
        <div className='tv-show'>
            <TVTop/>
            <div className='show'>
                <div className='show-overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <HeadingTitle title={'Shows For Friends & Family'} subTitle={'Try to Search...'}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12'>
                                <input type='search' placeholder='Search in Our Movies...'         className='our-team-input'
                                    value={search} onChange={(e)=>setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            {
                                movies.filter(a=>a.title.toLowerCase().includes(search)).map((item)=>(
                                    <div className='col-lg-3 col-md-4 col-sm-6' key={item.id}>
                                        <div className='show-box'>
                                            <img src={item.poster} alt={item.title}/>
                                            <div className='show-box-overlay'>
                                                <Link to={`/movie/${item.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                                                <button onClick={()=>addToWishList({...item,quantity:1})}><FontAwesomeIcon icon={faHeart}/></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVShow
