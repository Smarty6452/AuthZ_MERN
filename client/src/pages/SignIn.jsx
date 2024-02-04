import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSucess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user) || {};

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await axios.post("/api/auth/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the entire response for debugging
      console.log(response);

      const data = response.data;
    

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSucess(data));
      navigate("/");

      console.log(JSON.stringify(data));
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {" "}
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex py-2 text-sm">
        <p className="text-gray-500">Dont Have an account ?</p>
        <Link to="/signup">
          <span className="text-blue-500 px-2">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error  ? error.message || "Something went wrong!" : ""}</p>
    </div>
  );
};

export default SignIn;
