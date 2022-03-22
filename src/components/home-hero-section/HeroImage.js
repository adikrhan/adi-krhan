import { Fragment } from "react";

import classes from "./HeroImage.module.css";
import portrait from '../../assets/portrait.png';
 
const HeroImage = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={portrait} alt="Me" />
        </div>
        <div className={classes.triangle}></div>
      </div>
    </Fragment>
  );
};

export default HeroImage;
