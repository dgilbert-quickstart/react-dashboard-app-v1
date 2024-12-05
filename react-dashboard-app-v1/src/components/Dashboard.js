import { Link } from "react-router-dom";

function Dashboard() {
    return (
      <>
         <h2>Dashboard</h2>
         <p>
            <Link to="/login">logout</Link>
         </p>    
      </>
    );
  }
  
  export default Dashboard;
  
  