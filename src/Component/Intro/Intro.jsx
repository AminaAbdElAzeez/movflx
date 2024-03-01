import { faCalendar, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Intro.css';

function Intro () {
    return (
        <div className='intro'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='text'>
                            <h5 className='sub-title'>movflx</h5>
                            <h1 className='title'>
                                unlimited <span>movie</span>, tVs shows, & more.
                            </h1>
                            <ul>
                                <li>pg 18</li>
                                <li>hd</li>
                                <li>Romance, Drama</li>
                                <li><FontAwesomeIcon icon={faCalendar} className='icon'/>2021</li>
                                <li><FontAwesomeIcon icon={faClock} className='icon'/>2021</li>
                            </ul>
                            <button className='btn'><FontAwesomeIcon icon={faPlay} className='icon'/>watch now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
