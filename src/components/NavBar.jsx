import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import IconButton from "../components/IconButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateListing from "./CreateListing";

export default function NavBar() {
    const [authToken, setAuthToken] = useLocalStorage('authToken', '');
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
   
    const openModal = () => setShowModal(true);
    
 // check for auth token immediately upon mount and when authToken changes
 useEffect(() => {
    if (!authToken) {
        navigate('/login');
    }
}, [authToken, navigate]);


    const handleLogout = () => {
        
        setAuthToken(''); // clear token from storage
    };

    return (

<Navbar expand="lg" className="bg-body-tertiary">
    <Container>

          <Navbar.Brand href="/">
          <IconButton className='bi bi-house-door-fill' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/listing">Host your own!</Nav.Link>
            <Button style={{ backgroundColor: '#ea80fc', borderColor: '#ea80fc', color: '#512da8' }} onClick={openModal}>
            Host your own!  <i className="bi bi-cash-coin"></i>
            </Button>
            <Col className="d-flex justify-content-end align-items-center">
            <Button
              style={{ backgroundColor: '#ea80fc', borderColor: '#ea80fc', color: '#512da8' }}
              onClick={handleLogout}
            >
              <i className="bi bi-escape"></i>
            </Button>
            <CreateListing show={showModal} handleClose={closeModal} />
          </Col>
          </Nav>
          </Container>
      </Navbar>
      
    )
}