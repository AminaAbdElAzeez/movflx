import { faChevronRight, faClock, faMessage, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react';
import Img from '../../Assets/blog_thumb01.jpg';
import Img2 from '../../Assets/blog_thumb02.jpg';
import Img3 from '../../Assets/blog_thumb03.jpg';
import './BlogLeft.css'

function BlogLeft() {
    return (
        <Fragment>
            <div className='left'>
                <div className='box'>
                <div className='img'>
                    <img src={Img} alt='blog'/>
                </div>
                <div className='text'>
                    <h6 className='sub-title'>
                        <FontAwesomeIcon icon={faClock} className='icon'/>
                        10 Mar 2021
                    </h6>
                    <h2>Your Free Movie Streaming Purposes</h2>
                    <p className='desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                    </p>
                    <hr/>
                    <div className='bottom'>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faUser} className='icon'/>
                                by Admin
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faThumbsUp} className='icon'/>
                                63
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMessage} className='icon'/>
                                12 Comments
                            </li>
                        </ul>
                        <a href='/#'>
                            Read More 
                            <FontAwesomeIcon icon={faChevronRight} className='icon'/>
                            <FontAwesomeIcon icon={faChevronRight} className='icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div className='box'>
            <div className='img'>
                <img src={Img2} alt='blog'/>
            </div>
            <div className='text'>
                <h6 className='sub-title'>
                    <FontAwesomeIcon icon={faClock} className='icon'/>
                    10 Mar 2021
                </h6>
                <h2>Where watch English movies free?</h2>
                <p className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                </p>
                <hr/>
                <div className='bottom'>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faUser} className='icon'/>
                            by Admin 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faThumbsUp} className='icon'/>
                            63 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMessage} className='icon'/>
                            12 Comments 
                        </li>
                    </ul>
                    <a href='/#'>Read More <FontAwesomeIcon icon={faChevronRight}/></a>
                </div>
            </div>
                </div>
                <div className='box'>
            <div className='img'>
                <img src={Img3} alt='blog'/>
            </div>
            <div className='text'>
                <h6 className='sub-title'>
                    <FontAwesomeIcon icon={faClock} className='icon'/>
                    10 Mar 2021
                </h6>
                <h2>House movie to is streaming website?</h2>
                <p className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                </p>
                <hr/>
                <div className='bottom'>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faUser} className='icon'/>
                            by Admin 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faThumbsUp} className='icon'/>
                            63 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMessage} className='icon'/>
                            12 Comments 
                        </li>
                    </ul>
                    <a href='/#'>Read More <FontAwesomeIcon icon={faChevronRight}/></a>
                </div>
            </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogLeft
