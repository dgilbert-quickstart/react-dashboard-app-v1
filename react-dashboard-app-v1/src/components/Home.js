import { Link } from "react-router-dom";

function Home() {
    return (
      <>
         <h2>React Dashboard App v1.0.2</h2>
         <p>
            <Link to="/login">Login</Link>
         </p>
      </>
    );
  }
  
  export default Home;
  
  