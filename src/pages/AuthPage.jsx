import { Button, Col, Image, Row, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
// import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
// import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { AuthContext } from "../components/AuthProvider";


export default function AuthPage() {
    const loginImage = 'https://images.pexels.com/photos/3769443/pexels-photo-3769443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const url = 'https://04105023-8ab8-4f02-b491-fc8291fc8063-00-2w9ahum42w1i2.sisko.replit.dev'
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow('SignUp');
    const handleShowLogin = () => setModalShow('Login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");

    const navigate = useNavigate();

    // const auth = getAuth();
    // const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if (authToken) navigate('/profile');
        
    }, [authToken, navigate]);


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${url}/signup`, { username, password });
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${url}/login`, { username, password });
          if (res.data && res.data.auth === true && res.data.token) {
            setAuthToken(res.data.token); // Save token to localStorage.
            console.log("Login was successful, token saved");
          }
        } catch (error) {
          console.error(error);
        }
      };
      const handleClose = () => setModalShow(null);

    return (
        <Row>
            <Col sm={6}>
                <Image src={loginImage} fluid style={{ height: '130%', objectFit: 'cover' }} />
            </Col>
            <Col sm={3} className='d-flex flex-column align-items-center justify-content-center'>
                <Col sm={10} className='d-grid gap-2'>
                    <Button className='rounded-pill' variant='light'>
                        <i className='bi bi-google'></i> Sign up with Google
                    </Button>
                    <Button className='rounded-pill' variant='light'>
                        <i className='bi bi-apple'></i> Sign up with Apple
                    </Button>
                    <Button className='rounded-pill' variant='light'>
                        <i className='bi bi-facebook'></i> Sign up with Facebook
                    </Button>
                    <p style= {{ textAlign: 'center' }}>or</p>
                    <Button className='rounded-pill' variant='success' onClick={handleShowSignUp}>
                        Create an account
                    </Button>
                    
                    <p className='mt-5 text-center fw-bold text-light' >
                        Already have an account?
                    </p>
                    <Button className='rounded-pill' variant='success' onClick={handleShowLogin}>Sign In</Button>
                </Col>
                <Modal 
                show={modalShow !== null}
                onHide={handleClose} 
                animation={false}
                centered
                >
                    <Modal.Body>
                        <h2 className='mb-4' style={{ fontWeight: 'bold' }}>
                            {modalShow === 'SignUp'
                            ? 'Create An Account'
                            : 'Log In'}
                        </h2>
                        <Form 
                        className = 'd-grid gap-2 px-5' 
                        onSubmit={modalShow === 'SignUp' ? handleSignUp : handleLogin}
                        >
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control 
                                onChange={(e) => setUsername(e.target.value)}
                                type='email'
                                placeholder='Enter Username'
                                />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Control 
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Password'
                                />
                            </Form.Group>

                            <Button className='rounded-pill' type='submit'>
                                {modalShow === 'SignUp' ? 'Sign Up' : 'Log In'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </Col>
        </Row>
    );
}