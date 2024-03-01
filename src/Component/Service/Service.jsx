import DownloadImage from '../../Assets/services_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faTv, faVideo } from '@fortawesome/free-solid-svg-icons';
import './Service.css'

function Service () {
    return (
        <div className='service'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <img src={DownloadImage} alt='DownloadImage'/>
                        <div className='service-box'>
                            <p>Download <FontAwesomeIcon icon={faDownload} className='icon'/></p>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <div className='right'>
                            <span className='dash'></span>
                            <h6 className='sub-title'>OUR SERVICES</h6>
                            <h2>Download Your Shows Watch Offline.</h2>
                            <p className='desc'>
                            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                            </p>
                            <div className='box-item'>
                                <div className='circle'>
                                    <FontAwesomeIcon icon={faTv} className='icon'/>
                                </div>
                                <h3 className='box-title'>Enjoy on Your TV.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                            <hr/>
                            <div className='box-item'>
                                <div className='circle'>
                                    <FontAwesomeIcon icon={faVideo} className='icon'/>
                                </div>
                                <h3 className='box-title'>Watch Everywhere.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
