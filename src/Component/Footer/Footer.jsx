import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import supportImg from '../../Assets/card_img.png'
import { NavLink } from 'react-router-dom';

function Footer () {
  return (
    <footer>
      <div className='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 ps-0 col-md-12 col-sm12'>
              <NavLink to='/'>
                <img src={logo} alt='logo'/>
              </NavLink>
            </div>
            <div className='col-lg-7  col-md-12 col-sm12'>
              <ul className='links'>
                <li><NavLink className='link' to='home'>home</NavLink></li>
                <li><NavLink className='link' to='movie'>movie</NavLink></li>
                <li><NavLink className='link' to='tvshow'>tv show</NavLink></li>
                <li><NavLink className='link' to='pricing'>pricing</NavLink></li>
                <li><NavLink className='link' to='blog'>blog</NavLink></li>
                <li><NavLink className='link' to='contacts'>contacts</NavLink></li>
                <li><NavLink className='link' to='error-404'>error-404</NavLink></li>

              </ul>
            </div>
            <div className='col-lg-3 col-md-12 col-sm12'>
              <form>
                <input type='text' placeholder='find favourite movie...'/>
                <button><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
          </div>
          <hr/>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <ul className='left'>
                <li><a href='/#'>faq</a></li>
                <li><a href='/#'>help center</a></li>
                <li><a href='/#'>terms of use</a></li>
                <li><a href='/#'>privacy</a></li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <ul className='right'>
                <li><a href='/#'><FontAwesomeIcon icon={faPhone} className='icon'/></a></li>
                <li><a href='/#'><FontAwesomeIcon icon={faEnvelope}  className='icon'/></a></li>
                <li><a href='/#'><FontAwesomeIcon icon={faComment}  className='icon'/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='container'>
          <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <p>Copyright © 2021. All Rights Reserved By <span>Amina AbdElAzeez</span></p>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <img src={supportImg} alt='supported'/>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
