import classes from "./AboutSection.module.css";
import Button from "../../UI/Button";

const AboutSection = () => {
  return (
    <section className={classes["about-section"]}>
      <div className={classes.bg}></div>
      <div className={classes.bg2 + ' ' + classes.bg}></div>
      <div className={classes.bg + ' ' + classes.bg3}></div>

      <div className={classes.container}>
        <h2>MY STORY</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </p>
        <Button type="text" text="More about me"></Button>
      </div>
    </section>
  );
};

export default AboutSection;
