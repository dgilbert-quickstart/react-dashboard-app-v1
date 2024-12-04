import { Link } from "react-router-dom";

function Register() {
    return (
      <>
         <h2>Register</h2>
         <p>
            <Link to="/">Home</Link>
         </p>         
         <p>
            <Link to="/login">login</Link>
         </p>    
      </>
    );
  }
  
  export default Register;
  
  