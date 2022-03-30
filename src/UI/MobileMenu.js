import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const navLinks = ["home", "about", "portfolio", "gallery", "blog", "contact"];

const MobileMenu = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop}>
      <div className={classes["close-btn"]} onClick={props.onClick}>
        <FaTimes />
      </div>
      <nav className={classes.nav}>
        <ul>
          {navLinks.map((link) => {
            return (
              <li>
                <NavLink
                  to={`/${link}`}
                  style={({ isActive }) => ({
                    boxShadow: isActive ? '0 3px 0 0 var(--yellow-primary)' : ""
                  })}
                  onClick={props.onClick}
                >
                  {link.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>,
    document.getElementById("mobile-menu")
  );
};

export default MobileMenu;
