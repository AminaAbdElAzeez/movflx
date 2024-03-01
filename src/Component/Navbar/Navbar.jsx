import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MoviesContext from '../../Context/MoviesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Navbars () {
    const {moviesItemsLength} = useContext(MoviesContext);

    return (
        <Navbar expand="lg" fixed="top" className='navbar'>
            <Container>
                <NavLink to='/' className="logo">
                    <img src={logo} alt='logo'/>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink to='/' className='link'>home</NavLink>
                        <NavLink to='movie' className='link'>movie</NavLink>
                        <NavLink to='tvshow' className='link'>tv show</NavLink>
                        <NavLink to='pricing' className='link'>pricing</NavLink>
                        <NavLink to='blog' className='link'>blog</NavLink>
                        <NavLink to='contacts' className='link'>contacts</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Link to='/wishlist' className='nav-wrapper'>
                {moviesItemsLength > 0 && (
                    <b className='movies-notification'>{moviesItemsLength}</b>
                )}
                <FontAwesomeIcon icon={faHeart} className='movies-notification-icon'/>
            </Link>
        </Navbar>
    )
}

export default Navbars
