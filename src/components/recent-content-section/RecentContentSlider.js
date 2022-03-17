import { useContext, Fragment } from "react";
import SizeContext from "../../store/size-context";

import classes from "./RecentContentSlider.module.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";

const images = [p1, p2, p3, p4, p5, p6];

const RecentContentHeader = () => {
  const sizeCtx = useContext(SizeContext);
  const width = sizeCtx.width;

  const overlayContent = (
    <Fragment>
      <div className={classes.overlay}></div>
      <div className={classes["overlay-info"]}>
        <h4>Pena Palace</h4>
        <p>06 / 03 / 2022</p>
      </div>
    </Fragment>
  );

  return (
    <div className={classes.container}>
      {images.map((img) => {
        return (
          <Fragment>
            <div className={classes.item}>
              {width > 600 && overlayContent}
              <img src={img} alt="" className={classes.image} />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default RecentContentHeader;
