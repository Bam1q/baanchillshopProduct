import { Link } from "react-router-dom";
import NavbarGuest from "../../component/Navbar/NavbarGuest";

const Home = () => {
  return (
    <div className="home-container">
        <NavbarGuest />
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
