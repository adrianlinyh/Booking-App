import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import useLocalStorage from "use-local-storage";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";
import useLocalStorage from "use-local-storage";
import Slides from "../components/Slides";

export default function ProfilePage() {
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
   const navigate = useNavigate();

   useEffect(() => {
    if (!authToken) {
      navigate("/login"); // Redirect to login if no auth token is present
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    setAuthToken(""); // Clear token from localStorage
  };
  return (
    <>
    <div>
      <Slides />
    </div>
    <Container>
      <Row>
        <ProfileSideBar handleLogout={handleLogout} />

        <ProfileMidBody />
      </Row>
    </Container>
      {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <i
              className="bi bi-twitter"
              style={{ fontSize: 30, color: "dodgerblue" }}
            ></i>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <h2>Your profile</h2>
      </Container> */}
    </>
  );
}