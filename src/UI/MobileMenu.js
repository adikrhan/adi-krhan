import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MobileMenu = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop}>
      <div className={classes["close-btn"]} onClick={props.onClick}>
        <FaTimes />
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={(isActive) => (isActive ? " active" : "")}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </div>,
    document.getElementById("mobile-menu")
  );
};

export default MobileMenu;
