import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}

export default Navbar;