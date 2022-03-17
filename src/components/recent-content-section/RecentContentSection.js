import classes from "./RecentContentSection.module.css";
import RecentContentHeader from "./RecentContentHeader";
import RecentContentSlider from "./RecentContentSlider";

const RecentContentSection = () => {
  return (
    <section className={classes["recent-section"]}>
      <div className={classes.container}>
        <RecentContentHeader />
      </div>
      <RecentContentSlider />
    </section>
  );
};

export default RecentContentSection;
