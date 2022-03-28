import { useState, useEffect, useContext } from "react";
import moment from "moment";
import classes from "./BlogThumbnail.module.css";
import { FaClock, FaTag } from 'react-icons/fa';
import SizeContext from '../../store/size-context';

const BlogThumbnail = (props) => {
  const [text, setText] = useState(props.post.summary);
  const sizeCtx = useContext(SizeContext);

  const windowWidth = sizeCtx.width;

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
    <div className={classes.container} style={{width: `${windowWidth >= 600 ? props.colWidthLg : '100%'}`}}>
      <div className={classes["img-container"]}>
        <div className={classes['overlay-meta']}>
          <FaClock />
          <span>{moment(props.post.published).format("LL")}</span>
        </div>
        <img
          src={props.post.featured_image}
          alt={props.post.featured_image_alt}
          className={classes.image}
        />
      </div>
      <div className={classes["text-container"]}>
        <h3>{props.post.title}</h3>
        <p>{text}</p>
      </div>
      <div className={classes.metadata}>
        <FaTag />
        {props.post.tags.map((tag) => {
          return <span key={tag}>{tag['name']}</span>
        })}
      </div>
    </div>
  );
};

export default BlogThumbnail;
