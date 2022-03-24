import SizeContext from "../store/size-context";
import { useState, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import dot from "../assets/dot.png";

const navLinks = ["about", "portfolio", "gallery", "blog", "contact"];

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
            {navLinks.map((link) => {
              return (
                <li>
                  <NavLink
                    to={`/${link}`}
                    style={({ isActive }) => ({
                      backgroundImage: isActive ? `url(${dot})` : "none",
                      backgroundRepeat: "no-repeat",
                      backgroundPositionX: "100%",
                      backgroundPositionY: "8px",
                      backgroundBlendMode: "hard-light"
                    })}
                  >
                    {link.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
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
