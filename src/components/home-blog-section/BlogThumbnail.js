import { useState, useEffect } from "react";
import moment from "moment";
import classes from "./BlogThumbnail.module.css";

const BlogThumbnail = (props) => {
  const [text, setText] = useState(props.post.summary);

  useEffect(() => {
    const summary = props.post.summary;
    if (summary.length <= 90) {
      setText(summary);
    } else {
      const index = summary.slice(0, 90).lastIndexOf(" ");
      setText(`${summary.slice(0, index) + "..."}`);
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes["img-container"]}>
        <img
          src={props.post.featured_image}
          alt={props.post.featured_image_alt}
          className={classes.image}
        />
      </div>
      <div className={classes.metadata}>
        <span>{moment(props.post.published).format("LL") + ' '}</span>
      </div>
      <div className={classes["text-container"]}>
        <h3>{props.post.title}</h3>
        <p>{text}</p>
      </div>
      <div className={classes["read-more"]}>
        <span>Read more &#187;</span>
      </div>
    </div>
  );
};

export default BlogThumbnail;
