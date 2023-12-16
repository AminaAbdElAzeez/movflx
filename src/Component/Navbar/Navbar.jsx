import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbars () {
    return (
        <Navbar expand="lg" fixed="top" className='navbar'>
        <Container>
            <NavLink to='/'>
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
                <Form inline="true">
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search..."
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className='btn'><FontAwesomeIcon icon={faSearch} className='icon'/></Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navbars
