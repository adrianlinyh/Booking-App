import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { deleteBooking, fetchBookingsByUser } from '../features/posts/postsSlice';
import { Button } from 'react-bootstrap';

export default function EditBooking(bookingId) {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.posts.posts); // Adjust according to your state structure
  const loading = useSelector(state => state.posts.loading); // Loading state to handle loading indication

  const handleDelete = () => {
    dispatch(deleteBooking(bookingId)); // Dispatch deletePost action with postId
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    dispatch(fetchBookingsByUser(userId)); // Fetch bookings data when component mounts
  }, [dispatch]);
  
// //   const handleDelete = (bookingId) => {
// //     dispatch(deleteBooking(bookingId));
//   };


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
              <Button onClick={handleDelete}>Delete</Button>
              <hr />
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
}

