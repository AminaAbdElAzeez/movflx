import { faClock, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react';
import Recent1 from '../../Assets/rc_post_thumb01.jpg';
import Recent2 from '../../Assets/rc_post_thumb02.jpg';
import Recent3 from '../../Assets/rc_post_thumb03.jpg';
import './BlogRight.css';

function BlogRight() {
    return (
        <Fragment>
        <div className='right'>
            <div className='box'>
                <h3>Search Objects</h3>
                <span className='line'></span>
                <form>
                    <input type='text' placeholder='search...'/>
                    <button><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
            <div className='box'>
                <h3>Categories</h3>
                <span className='line'></span>
                <ul>
                    <li>
                        Movies <span>12</span>
                    </li>
                    <li>
                        Action Movies <span>10</span>
                    </li>
                    <li>
                        Streaming <span>9</span>
                    </li>
                    <li>
                        Download <span>16</span>
                    </li>
                </ul>
            </div>
            <div className='box'>
                <h3>Recent Posts</h3>
                <span className='line'></span>
                <div className='item'>
                    <img src={Recent1} alt='recent'/>
                    <h4 className='item-title'>Express Management Effective</h4>
                    <FontAwesomeIcon icon={faClock} className='i'/>
                    <span> 10 Mar 2021</span>
                </div>
                <div className='item'>
                    <img src={Recent2} alt='recent'/>
                    <h4 className='item-title'>Where watch English movies free?</h4>
                    <FontAwesomeIcon icon={faClock} className='i'/>
                    <span> 10 Mar 2021</span>
                </div>
                <div className='item'>
                    <img src={Recent3} alt='recent'/>
                    <h4 className='item-title'>House movie streaming website</h4>
                    <FontAwesomeIcon icon={faClock} className='i'/>
                    <span> 10 Mar 2021</span>
                </div>
            </div>
            <div className='box'>
                <h3>Tag Post</h3>
                <span className='line'></span>
                <ul>
                    <li><a href='/#'>Movies</a></li>
                    <li><a href='/#'>Creative</a></li>
                    <li><a href='/#'>News</a></li>
                    <li><a href='/#'>Romantic</a></li>
                    <li><a href='/#'>Who</a></li>
                    <li><a href='/#'>English</a></li>
                    <li><a href='/#'>Blending</a></li>
                </ul>
            </div>
        </div>
        </Fragment>
    )
}

export default BlogRight
