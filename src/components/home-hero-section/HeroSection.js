import classes from "./HeroSection.module.css";
import HeroCopy from "./HeroCopy";
import SocialMedia from "./SocialMedia";
import HeroImage from "./HeroImage";

const HeroSection = () => {

  return (
    <section className={classes['hero-section']}>
      <HeroCopy />
      <div className={classes["img-and-social"]}>
        <HeroImage />
        <SocialMedia />
      </div>
    </section>
  );
};

export default HeroSection;
