import './Upcoming.css'
import MovieItem from '../MovieItem/MovieItem';
import HeadingTitle from '../HeadingTitle/HeadingTitle';



function Upcoming ({movies}){

    return (
        <section className="upcoming">
            <div className="overlay">
                <div className="container">
                    <HeadingTitle title={'Upcoming Movies'} subTitle={'ONLINE STREAMING'}/>
                    <MovieItem movies={movies} />
                </div>
            </div>
        </section>
    )
}

export default Upcoming