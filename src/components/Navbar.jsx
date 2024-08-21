import { Link } from "react-router-dom";
import menuItems from "../constants/menuItems";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Educación IT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {
              menuItems.map( (item, idx) => (
                <NavItem objItem={item} key={idx + item.nombre} />
              ))
            }           
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
