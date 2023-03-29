import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";
import { authenticateUser } from "./auth.util";
function Login(){
    const navigate = useNavigate();
    useLayoutEffect(()=>{
        localStorage.getItem('isAuthenticated') && navigate('/checkout')
      },[navigate]);
      

    const handleLoginSubmit= (e)=>{
        e.preventDefault();
        console.log('is this working?')
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        if (authenticateUser(email, password)) {
          console.log('user is authenticated')
          localStorage.setItem('isAuthenticated', true)
          navigate('/checkout');
        } else {
          console.log('user is not authenticated')
        }
    }
    return(
        <div className="login-box">
    <div className="center">
        <h3>Sign In</h3>
        <p>Use your account for sign in.</p>
        <div className="txt_field">
            <form onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="Enter email" name="email"/>
                <input type="password" placeholder="Enter password" name="password"/>
                <button type="submit">Sign In</button>
                <div className="signup_link">
                    No account? <a href="/signup">Create one</a>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}
export default Login;