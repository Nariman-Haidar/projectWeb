import { Link, NavLink, Outlet } from "react-router-dom";
import Book from "../book.png";
export function NavbarView(props) {
  const activ = ({ isActive }) => (isActive ? "link active" : "link");

  return (
    <>
      <nav className="navbar">
        <img src={Book} alt="book" />
        <ul className="nav-links">
          <NavLink to="/" className={activ}>
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/about" className={activ}>
            About
          </NavLink>
          <NavLink to="/list" className={activ}>
            List
          </NavLink>
          <NavLink to="/search" className={activ}>
            Search{" "}
          </NavLink>
          <NavLink to="/login" hidden={props.login} className={activ}>
            {" "}
            Login{" "}
          </NavLink>
          <Link
            hidden={!props.login}
            className="link"
            onClick={() => props.signOut()}
          >
            {" "}
            Sign Out
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
