import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Experts from "./pages/Experts";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBookings";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Experts />}
        />

        <Route
          path="/booking"
          element={<BookingForm />}
        />

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;