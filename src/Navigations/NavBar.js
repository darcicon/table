import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="1g">
      <Link to="/">
        <Navbar.Brand href="#home" className="p-2">
          Home
        </Navbar.Brand>
      </Link>

      <Nav className="mr-auto p-2 mb-1">
        <Link to="/register">
          <Nav.Link href="#register">Sign Up</Nav.Link>
        </Link>

        <Link to="/display" className="mb-1">
          <Nav.Link href="#login">Display Users</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
