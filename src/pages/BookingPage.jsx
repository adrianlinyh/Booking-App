import { useEffect, useState } from "react";
import { Badge, Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveBooking } from "../features/posts/postsSlice";
import { useLocation, useNavigate } from "react-router-dom";



export default function BookingPage() {

    const [bookingDate, setBookingDate] = useState('');
    const dispatch = useDispatch();
    const [bookingTime, setBookingTime] = useState(''); 
    const [bookingDuration, setBookingDuration] = useState(''); 
    const location = useLocation();
    const [postId, setPostId] = useState(null);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); 


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const postIdFromQuery = searchParams.get("postId");
        if (postIdFromQuery) {
          setPostId(postIdFromQuery);
        }
      }, [location.search]);
    

    const handleSubmit = () => {
        dispatch(saveBooking( { postId, bookingDate, bookingTime, bookingDuration }));
    
        setBookingDate('');
        setBookingTime('');
        setBookingTime('');
        setBookingDuration('');
        setShowModal(true); 
      };

      const handleCloseModal = () => {
        setShowModal(false);
        navigate('/profile'); 
    };


    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

        <Container>
        <h1>
        <Badge bg="dark">Booking Form</Badge>
        </h1>
            <Form>
                <Form.Group controlId='booking'>        
                    <Form.Control
                    type="date"
                    placeholder="Date in mm/dd (e.g: 23/10)"
                    onChange={(e) => setBookingDate(e.target.value)}

                    />
                    <br />

                    <Form.Control
                    type="time"
                    placeholder="Time in 24h (e.g: 14:00)"
                    onChange={(e) => setBookingTime(e.target.value)}

                    />
                    <br />

                    <Form.Control
                    type="duration"
                    placeholder="In hours (e.g: 2 hours)"
                    onChange={(e) => setBookingDuration(e.target.value)}

                    />
                </Form.Group>
                <Button variant='primary' className='rounded-pill' onClick={handleSubmit}>Submit</Button>
            </Form>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking confirmed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your booking has been successfully confirmed.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Back to Home
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </div>

  );
}
   