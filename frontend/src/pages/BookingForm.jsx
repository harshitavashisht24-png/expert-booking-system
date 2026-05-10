import React, { useState } from "react";
import api from "../services/api";

function MyBookings() {

  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {

    try {

      const res = await api.get(
        `/bookings?email=${email}`
      );

      setBookings(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>My Bookings</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <button
        onClick={fetchBookings}
        style={{
          padding: "10px",
          marginLeft: "10px",
        }}
      >
        Search
      </button>

      <br /><br />

      {bookings.map((booking) => (

        <div
          key={booking._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >

          <p>
            <strong>Name:</strong> {booking.name}
          </p>

          <p>
            <strong>Date:</strong> {booking.date}
          </p>

          <p>
            <strong>Slot:</strong> {booking.timeSlot}
          </p>

          <p>
            <strong>Status:</strong> {booking.status}
          </p>

        </div>

      ))}

    </div>
  );
}

export default MyBookings;