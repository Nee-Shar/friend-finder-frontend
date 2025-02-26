require('dotenv').config();
import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
axios.defaults.withCredentials = true;

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API_URL + '/api/auth/logout', { withCredentials: true });  
        dispatch({ type: 'LOG_OUT' });
      } catch (error) {
        console.error("An error occurred while loggoing out.", error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
        <button type="submit">Logout</button>
    </form>
  );
};

export default Login;