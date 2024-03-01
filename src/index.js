import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Movie from './Routes/Movie/Movie';
import TVShow from './Routes/TVShow/TVShow';
import Pricing from './Routes/Pricing/Pricing';
import Blog from './Routes/Blog/Blog';
import Home from './Routes/Home/Home';
import Contacts from './Routes/Contacts/Contacts';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import MoviesProvider from './Context/MoviesProvider';
import MovieNumber from './Routes/MovieNumber/MovieNumber';
import WishList from './Routes/WishList/WishList';
// import 'bootstrap/dist/js/bootstrap.min.js';

 // routing
  const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    errorElement : <ErrorPage/>,
    children : [
      { index: true, element : <Home/>},
      { path : "home" , element : <Home/>},
      { path : "movie", element : <Movie/> },
      { path : "tvshow", element : <TVShow/> },
      { path : "pricing", element : <Pricing/> },
      { path : "blog", element : <Blog/> },
      { path : "contacts", element : <Contacts/>},
      { path : "wishlist", element : <WishList/>},
      { path : "/movie/:id" , element : <MovieNumber/>},
      { path : "error-404", element : <ErrorPage/>},
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoviesProvider>
    <RouterProvider router={routes}/>
  </MoviesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
