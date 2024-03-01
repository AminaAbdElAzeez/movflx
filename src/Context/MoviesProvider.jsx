import { useState } from 'react'
import MoviesContext from './MoviesContext';

const MoviesProvider = ({children}) => {
    const [moviesItems,setMoviesItems] = useState([]);

    // Handle Add to WishList
    const addToWishList = (item,qty) => {
        const isExist = moviesItems.find((movie)=> movie.id === item.id);
        if(isExist){
            setMoviesItems(moviesItems.map((movieItem)=>
                movieItem.id ===item.id ? item : movieItem
            ))
        } else {
            setMoviesItems((prev) => [...prev , item])
        }
    }

    // Handle Remove to WishList
    const removeFromWishList = (id) => {
        const movie = moviesItems.filter((c) => c.id !== id);
        setMoviesItems(movie)
    }

  return (
    <MoviesContext.Provider value={{moviesItems , addToWishList , removeFromWishList , moviesItemsLength:moviesItems.length} }>
        {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider
