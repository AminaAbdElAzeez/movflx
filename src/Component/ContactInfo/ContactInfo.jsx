import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactInfo.css'

function ContactInfo() {
    return (
        <div className='contact-info'>
            <div className='overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <div className='left'>
                                <h3 className='sub-title'>Contact Form</h3>
                                <span className='line'></span>
                                <form onSubmit={(e)=>e.preventDefault()}>
                                    <input type='text' placeholder='your name*' required/>
                                    <input type='email' placeholder='your email*' required/>
                                    <input type='text' placeholder='subject*'/>
                                    <textarea placeholder='type your message...'></textarea>
                                    <button>send message</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <div className='right'>
                                <h3 className='sub-title'>Information</h3>
                                <span className='line'></span>
                                <div className='box'>
                                    <p className='desc'>
                                        <span>Find solutions : </span>
                                        to common problems, or get help from a support agent industry's standard .
                                    </p>
                                    <hr/>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                                            <span>Address : </span>
                                            W38 Park Road New York
                                        </li>
                                        <hr/>
                                        <li>
                                            <FontAwesomeIcon icon={faPhone} className='icon'/>
                                            <span>Phone : </span>
                                            (09) 123 854 365
                                        </li>
                                        <hr/>
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                                            <span>Email : </span>
                                            support@movflx.com
                                        </li>
                                        <hr/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
