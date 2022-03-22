import SizeContext from "../store/size-context";
import { useState, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const navigate = useNavigate();
  const sizeCtx = useContext(SizeContext);

  const width = sizeCtx.width;

  const [isMenuShown, setIsMenuShown] = useState(false);

  const menuIconClickHandler = (event) => {
    setIsMenuShown(true);
  };

  const menuCloseClickHandler = (event) => {
    setIsMenuShown(false);
  };

  const logoClickHandler = () => {
    navigate("../home", { replace: false });
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={logoClickHandler}>
        <strong>adi</strong>krhan
      </div>
      {width > 700 && (
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  borderBottom: isActive
                    ? "4px solid var(--yellow-primary)"
                    : "none",
                })}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                style={({ isActive }) => ({
                  borderBottom: isActive
                    ? "4px solid var(--yellow-primary)"
                    : "none",
                })}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                style={({ isActive }) => ({
                  borderBottom: isActive
                    ? "4px solid var(--yellow-primary)"
                    : "none",
                })}
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  borderBottom: isActive
                    ? "4px solid var(--yellow-primary)"
                    : "none",
                })}
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  borderBottom: isActive
                    ? "4px solid var(--yellow-primary)"
                    : "none",
                })}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {width <= 700 && (
        <div className={classes["menu-icon"]} onClick={menuIconClickHandler}>
          <FaBars />
        </div>
      )}
      {isMenuShown && <MobileMenu onClick={menuCloseClickHandler} />}
    </header>
  );
};

export default Header;
