import Button from "../../UI/Button";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.container}>
      <p>SUBSCRIBE TO GET NEW CONTENT</p>
      <div className={classes["form-control"]}>
        <input type="email" id="email" placeholder="Email" />
        <Button type="text" text="SUBSCRIBE!" bgColor='yellow-bg'/>
      </div>
    </div>
  );
};

export default Subscribe;
