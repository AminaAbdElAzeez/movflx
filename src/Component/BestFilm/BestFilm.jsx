import React from "react";
import './BestFilm.css';
import MovieItem from '../MovieItem/MovieItem';



function BestFilm (props) {
    const bestfilm = props.MyMovies.slice(6,10).map((myfilm)=>{
        return(
            <MovieItem title={myfilm.title} year={myfilm.year}
            poster={myfilm.poster} type={myfilm.type} key={myfilm.id} />
        )
    })
    return(
        <section className="best">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h6 className="sub-title"> BEST TV SERIES</h6>
                        <h2>World Best TV Series</h2>
                    </div>
                </div>
                <div className="row">
                    {bestfilm}
                </div>
            </div>
        </section>
    )
}


export default BestFilm;