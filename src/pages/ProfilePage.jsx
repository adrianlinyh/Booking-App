import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import useLocalStorage from "use-local-storage";
// import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";
import useLocalStorage from "use-local-storage";
import Slides from "../components/Slides";

export default function ProfilePage() {
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
   const navigate = useNavigate();

   useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    setAuthToken("");
  };
  return (
    <>
    <div>
      <Slides />
    </div>
    <Container>
      <Row>

        <ProfileMidBody handleLogout={handleLogout} />
      </Row>
    </Container>
    </>
  );
}