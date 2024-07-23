import { Button, Container, Row } from "react-bootstrap";
import ProfilePostCard from "./ProfilePostCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostsByUser } from "../features/posts/postsSlice";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import NewPostModal from "./NewPostModal";
import '../styles/midbody.scss'; 



export default function ProfileMidBody({handleLogout}){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);    
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
          dispatch(fetchPostsByUser(userId));
        }
      }, [dispatch]);
    
    const handleNavigate = () => {
      navigate('/edit');
  };

    return(
        <Row>
            <div className='d-flex justify-content-center'>
            <Button className='bi bi-door-closed' variant='secondary' text='Logout' onClick={handleLogout} />
            <br />
            <Button className='rounded-pill mt-2' variant="secondary" onClick={handleShow}>
                Add your restaurant!
            </Button>
            <NewPostModal show={show} handleClose={handleClose} />
                <Button className='rounded-pill mt-2' variant='secondary' onClick={handleNavigate}>
                  Edit Bookings
                </Button>
              </div>

        <Container>
             {loading ? (
              <p>Loading...</p>
              ) : posts.length > 0 ? (
              posts.map(post => (
                <ProfilePostCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  postId={post.id}
                />
              ))
              ) : (
                <p>No posts found.</p>
              )}
    </Container>
  </Row>
    )
}