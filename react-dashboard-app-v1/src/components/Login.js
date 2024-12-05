import { Link } from "react-router-dom";

function Login() {
    return (
      <>
         <h2>Login</h2>
         <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p>msg</p>
            <p></p>
            <button>login</button>
        </div>
         <p>
            <Link to="/">Home</Link>
         </p>                  
         <p>
            <Link to="/dashboard">Dashboard</Link>
         </p>         
         <p>
            <Link to="/register">register</Link>
         </p>         
      </>
    );
  }
  
  export default Login;
  
  