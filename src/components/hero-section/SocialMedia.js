import classes from "./SocialMedia.module.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const icons = [FaInstagram, FaInstagram];

const SocialMedia = () => {
  return (
    <div className={classes["icon-list"]}>
      <div className={classes["icon-list__icon"]}>
        <FaInstagram />
      </div>
      <div className={classes["icon-list__icon"]}>
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default SocialMedia;
