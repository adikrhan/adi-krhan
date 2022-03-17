import classes from './BlogThumbnail.module.css';

const BlogThumbnail = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["img-container"]}>
        <div className={classes.corner}><p>Read More</p></div>
        <img src={props.post.src} alt={props.post.alt} className={classes.image}/>
      </div>
      <div className={classes["text-container"]}>
        <h3>{props.post.headline}</h3>
        <p>
          {props.post.text}
        </p>
      </div>
    </div>
  );
};

export default BlogThumbnail;
