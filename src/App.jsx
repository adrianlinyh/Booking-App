import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import { createContext } from 'react';
import { PROFILE_DATA } from "./data";
import CreateListing from './components/CreateListing';


export const ProfileContext = createContext(null);


export default function App() {
  return (  
    <ProfileContext.Provider value={PROFILE_DATA}>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<AuthPage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/listing' element={<CreateListing />} />

      </Routes>
    </BrowserRouter>
    </div>
    </ProfileContext.Provider>

  );
}

