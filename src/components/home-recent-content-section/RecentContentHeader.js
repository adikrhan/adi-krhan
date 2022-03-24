import { useState } from "react";
import classes from "./RecentContentHeader.module.css";

const RecentContentHeader = (props) => {
  const [contentType, setContentType] = useState("photo");

  const types = ["photo", "project", "book"];

  const typeClickHandler = (event) => {
    event.target.classList.add("active");
    setContentType(event.target.innerText);
    props.onChangeContentType(event.target.innerText);
  };

  return (
    <div className={classes.container}>
      <h2>RECENT CONTENT</h2>
      <ul>
        {types.map((type) => {
          return (
            <li
              key={type}
              onClick={typeClickHandler}
              className={contentType.toUpperCase() === type.toUpperCase() ? `${classes.active}` : ""}
            >
              {type.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentContentHeader;
