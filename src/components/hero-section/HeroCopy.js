import { useContext } from "react";
import SizeContext from "../../store/size-context";
import classes from "./HeroCopy.module.css";
import Button from "../../UI/Button";

const HeroCopy = () => {
  const sizeCtx = useContext(SizeContext);

  const width = sizeCtx.width;

  return (
    <div className={classes["main-text"]}>
      <div className={classes.large}>
        {width > 600 && <h1>HI! I AM ADI KRHAN</h1>}
        {width <= 600 && <div><h1>HI! I AM</h1><br></br><h1>ADI KRHAN</h1></div>}
      </div>
      <p>
        Welcome to my personal web site where I share my creative work and
        thoughts. Hope you’ll find something you like!
      </p>
      <Button text="Show me more" type="text"></Button>
    </div>
  );
};

export default HeroCopy;
