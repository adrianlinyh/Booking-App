// import NavBar from "../components/NavBar"

// export default function Home() {
//   return (
//     <>
//     <NavBar />
//     </>
//   )

// }


import Slides from "../components/Slides";
import ImageGrid from "../components/ImageGrid";
import NavBar from "../components/NavBar";


export default function ProfilePage() {
  
  return (
    <>
    <NavBar />
    <Slides />
    <ImageGrid />
    
    </>
  );
}