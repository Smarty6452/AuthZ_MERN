import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Log the entire response for debugging
      console.log(response);

      const data = response.data;
      setLoading(false);
      setError(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error("Error during API request:", error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="input-field"
        />

        <button
          disabled={loading}
          className="submit-btn"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="flex py-2 text-sm">
        <p className="text-gray-500">Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500 px-2">Sign in</span>
        </Link>
      </div>

      <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
};

export default SignUp;
