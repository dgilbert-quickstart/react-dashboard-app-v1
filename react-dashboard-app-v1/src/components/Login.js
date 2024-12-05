import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

   const [msg,setMsg] = useState("");

   const handleLogin = (e) => {

      let _msg = "";

      try {
      
         _msg = "# handleLogin"
         setMsg(_msg);

         //if valid username and password 
         //navigate to dashboard 
         //else: display invalid login message 

      } catch (error) {
         
         _msg = "# handleLogin::Error"
         setMsg(_msg);         

         console.log(_msg)         
         console.log(error)
      }
   }

    return (
      <>
         <h2>Login</h2>
         <div>
            <span>* username: </span><input type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p>{msg}</p>
            <p></p>
            <button onClick={handleLogin}>login</button>
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
  
  