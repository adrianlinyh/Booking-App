import { Button, Container, Row } from "react-bootstrap";
import ProfilePostCard from "./ProfilePostCard";
// import { jwtDecode } from "jwt-decode";
// import { useEffect } from "react";
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
    // const url = 'https://st3.depositphotos.com/1400069/37648/i/450/depositphotos_376481338-stock-photo-abstract-blurred-background-street-cafe.jpg';
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

    
    //fetch post based on user id

    // const fetchPosts = (userId) => {
    //     fetch(
    //         `https://7a372e95-dd91-4720-a5cc-8876034a1357-00-p6njqpldbln2.spock.replit.dev/posts/user/${userId}`
    //     )

    //     .then((response) => response.json())
    //     .then((data) => setPosts(data))
    //     .catch((error) => console.error('Error:', error));
    // };

    
    // useEffect(() => {
    //     const token = localStorage.getItem('authToken');
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         const userId = decodedToken.id;
    //         dispatch(fetchPostsByUser(userId));
    //     }
    // }, [dispatch]);
    //         fetchPosts(userId);
    //     }
    // }, []);
    
    const handleNavigate = () => {
      navigate('/edit');
  };

    return(
        <Row>
            {/* <Image src={url} fluid /> */}
            {/* <br /> */}
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