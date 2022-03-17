import SizeContext from "../store/size-context";
import { useState, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const sizeCtx = useContext(SizeContext);

  const width = sizeCtx.width;

  const [isMenuShown, setIsMenuShown] = useState(false);

  const menuIconClickHandler = (event) => {
    setIsMenuShown(true);
  };

  const menuCloseClickHandler = (event) => {
    setIsMenuShown(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}><strong>adi</strong>krhan</div>
      {width > 700 && (
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
