import { useContext } from 'react'
import MoviesContext from '../../Context/MoviesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './WishList.css';
import HeadingTitle from '../../Component/HeadingTitle/HeadingTitle';

const WishList = () => {
    const {moviesItems,removeFromWishList,moviesItemsLength}=useContext(MoviesContext);

  return (
    <div className='wishlist'>
        <div className='overlay'>
            <div className='container'>
                <HeadingTitle title={'Your WishList...'}/>
                {   moviesItemsLength ? (
                    moviesItems.map((item)=>(
                        <div className='row' key={item.id}>
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className='wishlist-img'>
                                    <img src={item.poster} alt={item.title}/>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-8 col-sm-8'>
                                <div className='wishlist-wrapper'>
                                    <h3>{item.title}</h3>
                                    <p><b>type : </b>{item.type}</p>
                                    <p><b>year : </b>{item.year}</p>
                                    <button onClick={()=>removeFromWishList(item.id)}>Remove from WishList<FontAwesomeIcon icon={faTrash} className='wishlist-icon'/></button>
                                </div>
                            </div>
                        </div>
                    ))
                ):(
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <h4 className='empty'>WishList is Empty 😢</h4>
                        </div>
                    </div>
                )
                    
                }
            </div>
        </div>
    </div>
  )
}

export default WishList
