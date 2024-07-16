import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { deleteBooking, fetchBookingsByUser } from '../features/posts/postsSlice';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UpdateBooking from '../components/UpdateBooking';

export default function EditBooking() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.posts.posts); // Adjust according to your state structure
  const loading = useSelector(state => state.posts.loading); // Loading state to handle loading indication
  const navigate = useNavigate();
  const [selectedBookingId, setSelectedBookingId] = useState(null); 

  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (bookingId) => {setShow(true); setSelectedBookingId(bookingId)}

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    dispatch(fetchBookingsByUser(userId)); // Fetch bookings data when component mounts
  }, [dispatch, bookings]
);

  const handleDelete = (bookingId) => {
    dispatch(deleteBooking(bookingId));
  };

  const handleNavigate = () => {
    navigate('/profile');
  };


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit Bookings</h1>

      <div>
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <div key={booking.id}>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Duration: {booking.duration} hours</p>
              <Button onClick={handleShow}>Change</Button>
              <UpdateBooking show={show} handleClose={handleClose} />
              <UpdateBooking 
              bookingId={selectedBookingId}/>

              <Button onClick={() => handleDelete(booking.id)}>Delete</Button>
                            <hr />
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>

      
      <Button onClick={handleNavigate}>Home</Button>
    </div>
    
  );
}
