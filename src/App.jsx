import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import store from "./store";
import BookingPage from "./pages/BookingPage";
import EditBooking from "./pages/EditBooking";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<AuthPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/edit" element={<EditBooking />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}