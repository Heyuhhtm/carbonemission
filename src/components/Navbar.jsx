import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#2e7d32",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/calculator" style={{ color: "white" }}>
        Calculator
      </Link>

      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/profile" style={{ color: "white" }}>
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;