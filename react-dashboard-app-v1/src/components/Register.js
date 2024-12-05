import { Link } from "react-router-dom";

function Register() {
    return (
      <>
         <h2>Register</h2>
         <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <span>* confirm password: </span><input type="password" maxLength={10} placeholder="* confirm password required"/> <br/>
            <p></p>
            <input type="checkbox"/> <span> Terms and Services</span>
            <p>msg</p>
            <p></p>
            <button>register</button>
        </div>
         <p>
            <Link to="/">Home</Link>
         </p>         
         <p>
            <Link to="/login">login</Link>
         </p>    
         <p>
            <Link to="/dashboard">dashboard</Link>
         </p>    
      </>
    );
  }
  
  export default Register;
  
  