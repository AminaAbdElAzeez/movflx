// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import { useEffect, useState } from 'react';
// import Home from './Routes/Home/Home';
// import Movie from './Routes/Movie/Movie';
// import TVShow from './Routes/TVShow/TVShow';
// import Pricing from './Routes/Pricing/Pricing';
// import Blog from './Routes/Blog/Blog';
// import Contacts from './Routes/Contacts/Contacts';
// import Root from './Routes/Root/Root';

// function App() {
//   const [movies , setMovies] = useState([]);

//   useEffect(()=>{
//     fetchApi()
//   } , [])

//   async function fetchApi(){
//     const response = await fetch('http://www.omdbapi.com/?s=star%20wars&apikey=d7d275b8');
//     const data = await response.json();
//     const dataTransform = data.Search.map((item)=>{
//       return{
//         id : item.imdbID ,
//         title : item.Title ,
//         poster : item.Poster ,
//         type : item.Type ,
//         year : item.Year
//       }
//     })
//     setMovies(dataTransform);
//   }




//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
