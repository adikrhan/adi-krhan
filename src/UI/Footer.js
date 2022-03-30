import classes from "./Footer.module.css";
import { FaArrowUp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = ["about", "portfolio", "gallery", "blog", "contact"];

const Footer = () => {
  const btnClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={classes.footer}>
      <div className={classes["top-btn"]}>
        <button type="text" className={classes.btn} onClick={btnClickHandler}>
          <FaArrowUp className={classes.arrow} />
        </button>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes["footer-copy"]}>
            <p>&copy; Adi Krhan 2022</p>
          </div>
          <nav className={classes.nav}>
            <ul>
              {navLinks.map((link) => {
                return (
                  <li key={link}>
                    <NavLink
                      to={`/${link}`}
                    >
                      {link.toUpperCase()}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={classes.social}>
            <div className={classes.icon}>
              <a href="https://www.instagram.com/adiiik/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className={classes.icon}>
              <a
                href="https://www.linkedin.com/in/adi-krhan-068239bb/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
