import ErrorImg from '../../Assets/error.jpg';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className='error'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                        <div className='left'>
                            <img src={ErrorImg} alt='Error Page'/>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <div className='right'>
                            <h2 className='title'>" page not found "</h2>
                            <p>
                                we couldn't find the page you were looking for..!
                            </p>
                            <Link to='/' className='link'>back to home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
