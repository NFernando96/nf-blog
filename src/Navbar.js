import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The NF Blog</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
