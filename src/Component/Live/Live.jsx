import './Live.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import LiveImg from '../../Assets/live_img.png';

function Live () {
    return (
        <div className='live'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='left'>
                            <span className='dash'></span>
                            <h6>ONLINE STREAMING</h6>
                            <h2 className='title'>Live Movie & TV Shows For Friends & Family</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.
                            </p>
                            <div className="views">
                                <div className="item-1">
                                    <h2>HD 4K</h2>
                                </div>
                                <div className="item-2">
                                    <h4>20K+</h4>
                                    <h5>Active Customer</h5>
                                </div>
                            </div>
                            <button><FontAwesomeIcon icon={faPlay} className='icon'/>watch now</button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='right'>
                            <img src={LiveImg} alt='live'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live
