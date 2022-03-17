import classes from "./Footer.module.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const btnClickHandler = () => {
    window.scrollTo(0,0);
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
            <p>adikrhan.com</p>
          </div>
          <div className={classes.nav}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
