import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";


// import UpdatePostModal from "./UpdatePostModal";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

export default function ProfilePostCard({title, content, postId}) {
    
    const pic='https://t4.ftcdn.net/jpg/02/22/47/33/360_F_222473361_KusJFeyPfQRKkJCO9YIdI1yMiCnsCRpM.jpg';
    // const BASE_URL = "https://968839a5-972f-4c1f-b3a5-90e2d906c8a5-00-1hcl0jmqumd5n.sisko.replit.dev:3000";

  const dispatch = useDispatch();




    const handleDelete = () => {
      dispatch(deletePost(postId)); // Dispatch deletePost action with postId
    };
    
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/booking?postId=${postId}`);
    };

    // const [showUpdateModal, setShowUpdateModal] = useState(false);

    // const handleShowUpdateModal = () => setShowUpdateModal(true);
    // const handleCloseUpdateModal = () => setShowUpdateModal(false);

    

      // const isLiked = likes.some((like) => like.user_id === userId);

        // const handleLike = () => (isLiked ? removeFromLikes() : addToLikes());
  
    return(
        <Row
        className='p-3'
        style={{
            borderTop: '1px solid #D3D3D3',
            borderBottom: '1px solid #D3D3D3'
        }}
        >
            <Col sm={2}>
                <Image src={pic} fluid roundedCircle />
            </Col>

            <Col>
                <strong>YOLO EVENTS</strong>
                <p>{title}</p>
                <Image src = {content} style={{ width : 150 }} fluid />
                <div className = 'me-2'>
                <Button variant="success">
                <i className='bi bi-plus-circle-dotted' onClick={handleNavigation}></i>   
            </Button>

                <Button variant="danger" onClick={handleDelete}>
                <i className="bi bi-x-lg"></i>                
                </Button>

                    {/* <Button variant= 'light'>
                        <i className ='bi bi-pencil-square' onClick={handleShowUpdateModal}></i>
                    </Button> */}
                    {/* <UpdatePostModal show={showUpdateModal} handleClose={handleCloseUpdateModal} postId={postId} originalPostContent={content} /> */}
                </div>
            </Col>
        </Row>
        
    )
}