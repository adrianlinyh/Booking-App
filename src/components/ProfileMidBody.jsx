import { Button, Col, Image, Row } from "react-bootstrap";
import ProfilePostCard from "./ProfilePostCard";
// import { jwtDecode } from "jwt-decode";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostsByUser } from "../features/posts/postsSlice";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function ProfileMidBody(){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);    
    const url = 'https://media.istockphoto.com/id/1174844756/vector/a-man-stands-near-the-restaurant.jpg?s=612x612&w=0&k=20&c=2WDtUcb9mmcZzt5b0U5RIdCLdom4P2yC8RQL51_zhUc=';
    const navigate = useNavigate();
    
  
    
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
        <Col sm={6} className='bg-light' style={{border: '1px solid lightgrey'}}>
            <Image src={url} fluid />
            <br />
            

            <Row className = 'justify-content-end'>
                <Col xs='auto'>
                    <Button className='rounded-pill mt-2' variant='outline-secondary' onClick={handleNavigate}>
                        Edit Bookings
                    </Button>
                </Col>
            </Row>

            <p className='mt-5' style={{ margin: 0, fontWeight: 'bold', fontSize: '15px' }}>
                BOOK A SEAT AT YOUR FAVOURITE RESTAURANT NOW
            </p>

            <p style={{ marginBottom: '2px' }}>FOR FREE !</p>
{/* 
            {loading && (
                <Spinner animation = 'border' className='ms-3 mt-3' variant='primary' />
            )}

            {posts.map((post) => (
                <ProfilePostCard key={post.id} post = {post} />

            ))} */}
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
        </Col>
    )
}