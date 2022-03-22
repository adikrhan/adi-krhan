import { useState, Fragment } from "react";
import classes from "./Modal.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Modal = (props) => {
  console.log(props, window.devicePixelRatio);
  const [isLoading, setIsLoading] = useState(true);

  const srcSet =
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_280/${props.publicId} 280w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_560/${props.publicId} 560, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_840/${props.publicId} 840w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_1100/${props.publicId} 1100w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_1650/${props.publicId} 1650w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_2100/${props.publicId} 2100w `;
  const sizes = "(max-width: 800px) 80vw, (max-width: 1200px) 900px, 1200px";

  return (
    <Fragment>
      {isLoading && (
        <ClipLoader
          color="rgba(255,255,255,0.5)"
          loading={isLoading}
          css={`
            display: block;
            margin: 0 auto;
          `}
          size={100}
        />
      )}
      <div
        className={classes.modal}
        style={{ display: isLoading ? "none" : "block" }}
      >
        <div className={classes["img-container"]}>
          <img
            src={props.url}
            srcSet={srcSet}
            sizes={sizes}
            alt=""
            className={classes.image}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
