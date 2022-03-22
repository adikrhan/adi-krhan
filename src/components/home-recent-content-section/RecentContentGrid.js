import React, { useContext, Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SizeContext from "../../store/size-context";
import GridLoader from "react-spinners/GridLoader";
import classes from "./RecentContentGrid.module.css";
import Modal from "../../UI/Modal";

const cloudinaryRoot = "https://res.cloudinary.com/dau7fdnej/image/upload/";

const getSrcSet = (properties) => {
  const srcSet =
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_480/${properties.imgUrl} 480w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_600/${properties.imgUrl} 600w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_800/${properties.imgUrl} 800w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_1000/${properties.imgUrl} 1000w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_1200/${properties.imgUrl} 1200w, ` +
    `https://res.cloudinary.com/dau7fdnej/image/upload/w_1400/${properties.imgUrl} 1400w `;
  const sizes = "(max-width: 600px) 40vw, 640px";

  return { srcSet: srcSet, sizes: sizes };
};

const RecentContentHeader = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [clickedImgProps, setClickedImgProps] = useState(null);

  const clickImageHandler = (img) => {
    console.log(img);
    setClickedImgProps({
      publicId: img.publicId,
      url: props.url,
    });
    setShowModal(true);
  };

  const clickBackdropHandler = () => {
    setClickedImgProps(null);
    setShowModal(false);
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://res.cloudinary.com/dau7fdnej/image/list/${props.contentType}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const tempImgs = [];
        if (data.resources.length > 0) {
          const newest = data.resources.slice(0, 6);
          newest.forEach((item) => {
            const imgSrcSet = {
              ...getSrcSet({ imgUrl: item.public_id }),
            };

            tempImgs.push({
              publicId: item.public_id,
              url: cloudinaryRoot + item.public_id,
              caption: item.context
                ? item.context.custom["caption"]
                : "No caption",
              date: item.context ? item.context.custom["Date"] : "",
              srcSet: imgSrcSet.srcSet,
              sizes: imgSrcSet.sizes,
            });
          });
          console.log(tempImgs);
          setImages(tempImgs);
        }
        setIsLoading(false);
      });
  }, [props.contentType]);

  const sizeCtx = useContext(SizeContext);
  const width = sizeCtx.width;

  const spinner = (
    <div className={classes["spinner-container"]}>
      <GridLoader
        color="rgba(255,255,255,0.1)"
        loading={isLoading}
        css={`
          display: block;
          margin: 8rem auto;
        `}
        size={40}
        margin={20}
      />
    </div>
  );

  return (
    <Fragment>
      {isLoading && spinner}

      {!isLoading && (
        <div className={classes.container}>
          {images.map((img, i) => {
            return (
                <div key={i} className={classes.item} onClick={() => clickImageHandler(img)}>
                  {width > 600 && (
                    <Fragment>
                      <div className={classes.overlay}></div>
                      <div className={classes["overlay-info"]}>
                        <h4>{img.caption}</h4>
                        <p>{img.date}</p>
                      </div>
                    </Fragment>
                  )}
                  <img
                    src={img["url"]}
                    srcSet={img.srcSet}
                    sizes={img.sizes}
                    alt={img.caption}
                    className={classes.image}
                  />
                </div>
            );
          })}
        </div>
      )}
      {showModal &&
        ReactDOM.createPortal(
          <div className={classes.backdrop} onClick={clickBackdropHandler}>
            <Modal
              url={clickedImgProps.url}
              publicId={clickedImgProps.publicId}
            />
          </div>,
          document.getElementById("modal")
        )}
    </Fragment>
  );
};

export default RecentContentHeader;
