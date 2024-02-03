import React, { useState } from "react";
import axios from "axios"

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error , setError] = useState(false)
  const [loading , setLoading] = useState(false)
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json
      setLoading(false)
      setError(false)
      if (data.success === false) {
        setError(true);
        return;
      }
      console.log(data + "user Created Succesfully");
    } catch (error) {
      console.error("Error during API request:", error);
      setError(true)
      setLoading(false)
    }
  };
  


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
         
          className="bg-slate-100 p-3 rounded-lg"
        />
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

        <button disabled={loading} className="bg-slate-700 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {" "}
          {loading? 'loading...' : "Sign Up"}
        </button>
      </form>
      <div className="flex py-2 text-sm">
        <p className="text-gray-500">Have an account ?</p>
        <span className="text-blue-500 px-2">Sign in</span>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  );
};

export default SignUp