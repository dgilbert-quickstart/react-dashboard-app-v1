import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {

   const [msg,setMsg] = useState("");

   const handleRegister = (e) => {

      let _msg = "";

      try {
      
         _msg = "# handleRegister"
         setMsg(_msg);

         //if valid username and password 
         //navigate to dashboard 
         //else: display invalid login message 

      } catch (error) {
         
         _msg = "# handleRegister::Error"
         setMsg(_msg);         

         console.log(_msg)         
         console.log(error)
      }
   }

    return (
      <>
         <h2>Register</h2>
         <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <span>* confirm password: </span><input type="password" maxLength={10} placeholder="* confirm password required"/> <br/>
            <p></p>
            <input type="checkbox"/> <span> Terms and Services</span>
            <p>{msg}</p>
            <p></p>
            <button onClick={handleRegister}>register</button>
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
  
  