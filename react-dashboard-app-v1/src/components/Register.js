import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Register() {

   const [msg,setMsg] = useState("");
   const txtusername = useRef("");
   const txtpassword = useRef("");
   const txtconfirmpassword = useRef("");
   const chkterms = useRef("");

   const navigate = useNavigate();

   const handleRegister = (e) => {

      let _msg = "";

      try {
      
         _msg = "# handleRegister"
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

         if(txtpassword.current.value == null | txtpassword.current.value.trim().length == 0)
         {
            _msg = "# please enter a valid password"
            setMsg(_msg)
            return false; //stop button click 
         }
   
         if(txtconfirmpassword.current.value == null | txtconfirmpassword.current.value.trim().length == 0)
         {
            _msg = "# please enter a valid confirm password"
            setMsg(_msg)
            return false; //stop button click 
         }
         
         if(txtpassword.current.value.trim() !== txtconfirmpassword.current.value.trim())
         {
            _msg = "# password and confirm password does not match"
            setMsg(_msg)
            return false; //stop button click 
         }

         if(chkterms.current.checked === false)
         {
            _msg = "# please confirm terms and services"
            setMsg(_msg)
            return false; //stop button click 
         }

         _msg = "user registered"
         setMsg(_msg)

         //send request to backend api 

         //navigate to dashboard 
         navigate("/dashboard",{replace:true})


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
            <span>* username: </span><input ref={txtusername} type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input ref={txtpassword} type="password" maxLength={10} placeholder="* password required"/> <br/>
            <span>* confirm password: </span><input ref={txtconfirmpassword} type="password" maxLength={10} placeholder="* confirm password required"/> <br/>
            <p></p>
            <input ref={chkterms} type="checkbox"/> <span> Terms and Services</span>
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
  
  