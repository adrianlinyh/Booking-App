import { Badge, Button, Col, Image, Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { deletePost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import '../styles/midbody.scss'; 


// import UpdatePostModal from "./UpdatePostModal";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

export default function ProfilePostCard({title, content, postId}) {
    
    // const pic='https://media.istockphoto.com/id/1201462385/vector/abstract-modern-speech-bubble-new-label.jpg?s=612x612&w=0&k=20&c=NkqNBBda-73QvqWCgi5RcifHNgLt7lb5HaDC4FbZ5sw=';
    // const BASE_URL = "https://968839a5-972f-4c1f-b3a5-90e2d906c8a5-00-1hcl0jmqumd5n.sisko.replit.dev:3000";

//   const dispatch = useDispatch();




    // const handleDelete = () => {
    //   dispatch(deletePost(postId)); // Dispatch deletePost action with postId
    // };
    
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/booking?postId=${postId}`);
    };
  
    return(
        <Row className='p-5'>

            <Col>
            <div className='d-flex justify-content-center'>
                <Badge bg="dark" className='d-flex justify-content-center' style={{ 
                    fontSize: '1.2em', 
                    marginBottom: '10px', 
                    maxWidth: '400px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    fontFamily: 'Georgia, serif',
                    }}>
                {title}
                </Badge>
            </div>

            <div className='d-flex justify-content-center'>
                <Image src = {content} fluid />
            </div>

            <div className = 'd-flex justify-content-center me-2'>
                <Button variant="dark">
                    <i className='bi bi-bookmark-plus-fill' onClick={handleNavigation}></i>   
                </Button>

                {/* <Button variant="dark" onClick={handleDelete}>
                    <i className="bi bi-x-lg"></i>                
                </Button> */}
            </div>
        </Col>
    </Row>
        
    )
}