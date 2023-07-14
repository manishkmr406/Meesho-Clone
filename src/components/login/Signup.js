import React from 'react';
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      alert("error")
    }
  };
    
  return (
    <div className='signup_container'>
    <div className='wrapper'>
        <h1>SIGN UP</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter your username"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <input
            className="input"
            name="email"
            required
            type="email"
            placeholder="Enter your mailID"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            className="input"
            name="pass"
            type="password"
            required
            placeholder="*******"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />

          {/* {err ? <div style={{color: 'red' , font_size: '15px'}}>{errtxt}</div> : null} */}
          <button>Signup</button>
          <p>Already Registered? <span style={{color:'rgb(239, 96, 120)',cursor:'pointer'}} onClick={()=> navigate("/login")}>Sign In</span></p>
        </form>
    </div>
      
    </div>
  )
}

export default Signup;