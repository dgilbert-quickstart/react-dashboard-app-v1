import { Link } from "react-router-dom";

function Login() {
    return (
      <>
         <h2>Login</h2>
         <p>
            <Link to="/">Home</Link>
         </p>         
         <p>
            <Link to="/register">register</Link>
         </p>         
      </>
    );
  }
  
  export default Login;
  
  