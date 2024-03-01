import './BestFilm.css';
import MovieItem from '../MovieItem/MovieItem';
import HeadingTitle from "../HeadingTitle/HeadingTitle";



function BestFilm ({movies}) {

    return(
        <section className="best">
            <div className="container">
                <HeadingTitle title={'World Best TV Series'} subTitle={'BEST TV SERIES'}/>
                <MovieItem movies={movies.slice(6,11)}/>
            </div>
        </section>
    )
}


export default BestFilm;