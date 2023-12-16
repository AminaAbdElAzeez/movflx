import React from 'react';
import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import supportImg from '../../Assets/card_img.png'

function Footer () {
  return (
    <footer>
      <div className='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 ps-0 col-md-12 col-sm12'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='col-lg-6 ps-0 col-md-12 col-sm12'>
              <ul className='links'>
                <li><a href='/#'>home</a></li>
                <li><a href='/#'>movie</a></li>
                <li><a href='/#'>tv show</a></li>
                <li><a href='/#'>pricing</a></li>
                <li><a href='/#'>blog</a></li>
                <li><a href='/#'>contacts</a></li>
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
