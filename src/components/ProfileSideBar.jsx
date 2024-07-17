// import { Button, Navbar } from "react-bootstrap";
// // import IconButton from "./IconButton";
// import NewPostModal from "./NewPostModal";
// import { useState } from "react";
// import '../styles/midbody.scss'; 

// export default function ProfileSideBar({ handleLogout }) {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <Navbar expand="lg">

//             <Button className='bi bi-door-closed' variant='dark' text='Logout' onClick={handleLogout} />
//             <br />
//             <Button className='rounded-pill' variant="dark" onClick={handleShow}>
//                 Add your restaurant!
//             </Button>

//             <NewPostModal show={show} handleClose={handleClose} />
//             </Navbar>
//     );
// }