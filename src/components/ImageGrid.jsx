import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdatePostModal from "./UpdatePostModal";
import '../styles/categories.scss';

 
export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const handleClose=() => {
        setCurrentPost(null);
        setShow(false);
    };


    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className='mb-4'>
                <Image src={post.image} fluid className="image-grid-item" />
            </Col>
        ));
    }
    return (
        
        <div className='category'>
            <h1>Explore</h1>
            <p>Discover a curated selection of top destinations and accommodations tailored to your preferences. Whether you seek serene getaways, vibrant city stays, or adventurous escapes, find your perfect retreat with ease and confidence. Explore and book your next unforgettable experience effortlessly.</p>

          <Row>{renderImages ()}</Row>
          {currentPost && (
            <UpdatePostModal
            show = {show}
            handleClose = {handleClose}
            postId = {currentPost.id}
            />
          )}
        </div>
    );   
}