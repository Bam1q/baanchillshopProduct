import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
      <div className="home-card">
        <h1>🏠 Home Page</h1>
        <p>Welcome to your application!</p>
        <Link to="/user/login">
          <button>Go to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
