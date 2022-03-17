import { useContext } from "react";

import Header from "../../UI/Header";
import classes from "./HeroSection.module.css";
import HeroCopy from "./HeroCopy";
import SocialMedia from "./SocialMedia";
import HeroImage from "./HeroImage";
import SizeContext from "../../store/size-context";

const HeroSection = () => {
  const sizeCtx = useContext(SizeContext);

  const height = sizeCtx.height;

  const classesStr = height < 800 ? `${classes['hero-section']}` : `${classes['hero-section']} + ${classes['hero-section-mt']}`;

  return (
    <div className={classesStr}>
      <Header />
      <HeroCopy />
      <div className={classes["img-and-social"]}>
        <HeroImage />
        <SocialMedia />
      </div>
    </div>
  );
};

export default HeroSection;
