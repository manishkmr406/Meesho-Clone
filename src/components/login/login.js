import "../login/login.css";
function Login(){
    return(
        <div className="login-box">
    <div class="center">
        <h3>Sign In</h3>
        <p>Use your account for sign in.</p>
        <div class="txt_field">
            <form>
                <input type="email" placeholder="Enter email" required />
                <input type="password" placeholder="Enter password" required />
                <button type="submit">Sign In</button>
                <div class="signup_link">
                    No account? <a href="/signup">Create one</a>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}
export default Login;