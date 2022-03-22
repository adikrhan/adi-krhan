import classes from "./SocialMedia.module.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className={classes["icon-list"]}>
      <div className={classes["icon-list__icon"]}>
        <a href="https://www.instagram.com/adiiik/" target="_blank"><FaInstagram /></a>
      </div>
      <div className={classes["icon-list__icon"]}>
      <a href="https://www.linkedin.com/in/adi-krhan-068239bb/" target="_blank"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
