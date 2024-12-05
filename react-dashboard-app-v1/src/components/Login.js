import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Login() {

   const [msg,setMsg] = useState("");
   const txtusername = useRef("");
   const txtpassword = useRef("");

   const navigate = useNavigate();
   
   const handleLogin = (e) => {

      let _msg = "";

      try {
      
         _msg = "# handleLogin"
         setMsg(_msg);

         //if valid username and password 
         //navigate to dashboard 
         //else: display invalid login message 
         if(txtusername.current.value == null | txtusername.current.value.length == 0)
         {
            _msg = "# please enter a valid username"
            setMsg(_msg)
            return false; //stop button click 
         }

         if(txtpassword.current.value == null | txtpassword.current.value.length == 0)
         {
            _msg = "# please enter a valid password"
            setMsg(_msg)
            return false; //stop button click 
         }

         //send request to backend api 

         _msg = "# user login"
         setMsg(_msg)

         //naviagete to dashboard 
         navigate("/dashboard",{replace:true});

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
            <span>* username: </span><input ref={txtusername} type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input ref={txtpassword} type="password" maxLength={10} placeholder="* password required"/> <br/>
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
  
  