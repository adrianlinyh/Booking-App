// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { savePost } from "../features/posts/postsSlice";
import { useDispatch } from "react-redux";


export default function NewPostModal({show, handleClose}) {
 
    const [postContent, setPostContent] = useState('');
     const dispatch = useDispatch();
     const [imageUrl, setImageUrl] = useState(''); // State to store image URL



     const handleSave = () => {
        dispatch(savePost( {postContent, imageUrl }));
        handleClose();
        setPostContent('');
        setImageUrl('');
      };

     return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='postContent'>
                        <Form.Control
                            placeholder = 'Restaurant Name'
                            as='textarea'
                            rows={3}
                            onChange={(e) => setPostContent(e.target.value)}
                        />
                        <br />
                        <Form.Control
                type="text"
                placeholder="Paste restaurant image URL here"
                onChange={(e) => setImageUrl(e.target.value)}
                />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' className='rounded-pill' onClick={handleSave}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
     )
}