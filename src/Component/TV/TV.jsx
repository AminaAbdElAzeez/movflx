import './TV.css'
import MovieItem from '../MovieItem/MovieItem';

function TV (props){
    const films = props.MyMovies.map((film) => {
        return(
            <MovieItem title={film.title} year={film.year}
            poster={film.poster} type={film.type} key={film.id} />
        )
    })

    return (
        <section className="tv">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h6 className='sub-title'>ONLINE STREAMING</h6>
                            <h2>New Tv Show</h2>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='right'>
                                <button>all</button>
                                <button>tV show</button>
                                <button>movies</button>
                                <button>anime</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {films}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TV
