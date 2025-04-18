import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="navbar-element">
        <h2 className="page-title">Polly v2</h2>
      </Link>
      <Link to="/new-poll" className="navbar-element">
        Create Poll
      </Link>
      <Link to="/about" className="navbar-element">
        About
      </Link>
    </div>
  );
};

export default Navbar;
