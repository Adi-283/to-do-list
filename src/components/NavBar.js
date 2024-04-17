// Made by Patel Meet Vimalkumar – 8882879
import { Link } from 'react-router-dom';
import '../index.css';

// Used Links to navigate through different pages
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