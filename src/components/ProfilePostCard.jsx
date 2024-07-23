import { Badge, Button, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/midbody.scss'; 

export default function ProfilePostCard({title, content, postId}) {
    
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