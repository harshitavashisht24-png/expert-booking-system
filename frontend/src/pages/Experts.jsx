import React, { useEffect, useState } from "react";
import api from "../services/api";

function Experts() {

  const [experts, setExperts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    api
      .get(`/experts?search=${search}&category=${category}`)
      .then((res) => {
        setExperts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [search, category]);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Experts List</h1>

      {/* Search Box */}

      <input
        type="text"
        placeholder="Search expert"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      {/* Category Filter */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
        }}
      >

        <option value="">All Categories</option>

        <option value="Fitness">Fitness</option>

        <option value="Career">Career</option>

      </select>

      <br />
      <br />

      {/* Experts List */}

      {experts.map((expert) => (

        <div
          key={expert._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >

          <h2>{expert.name}</h2>

          <p>
            <strong>Category:</strong> {expert.category}
          </p>

          <p>
            <strong>Experience:</strong> {expert.experience} years
          </p>

          <p>
            <strong>Rating:</strong> {expert.rating}
          </p>

          <button
            style={{
              padding: "10px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>

        </div>

      ))}

    </div>
  );
}

export default Experts;