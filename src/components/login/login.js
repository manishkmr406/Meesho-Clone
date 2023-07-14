import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await logIn(email, password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    <div className='login_container'>
    <div className='wrapper'>
        <h1>SIGN IN</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            name="email"
            required
            type="email"
            placeholder="Enter your mailID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            name="pass"
            type="password"
            required
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* {err ? <div style={{color: 'red' , font_size: '15px'}}>{errtxt}</div> : null} */}
          <button>LOGIN</button>
        </form>
        </div>
        </div>
  )
}

export default Login;
