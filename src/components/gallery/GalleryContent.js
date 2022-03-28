import { useState, useEffect, Fragment } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "../../UI/Modal";
import classes from "./GalleryContent.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const GalleryContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [clickedImgProps, setClickedImgProps] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [categories, setCategories] = useState(["All"]);

  const pageNrClickHandler = (pageNr) => {
    if (pageNr !== currentPage) setCurrentPage(pageNr);
  };

  const arrowClickHandler = (direction) => {
    if (direction === "left" && currentPage === 1) return;
    if (direction === "right" && currentPage === totalPages.length) return;

    setCurrentPage((prevState) => {
      return direction === "left" ? prevState - 1 : prevState + 1;
    });
  };

  const categoryClickHandler = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  const clickImageHandler = (photo) => {
    setClickedImgProps({
      publicId: photo.publicId,
      url: photo.url,
    });
    setShowModal(true);
  };

  const clickBackdropHandler = () => {
    setClickedImgProps(null);
    setShowModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetch(`https://res.cloudinary.com/dau7fdnej/image/list/photo.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.resources.length === 0) {
          setIsLoading(false);
          return;
        }

        const tempCategories = ["All"];
        data.resources.forEach((item) => {
          if (
            tempCategories.findIndex(
              (cat) => cat === item.context.custom["category"]
            ) === -1
          ) {
            tempCategories.push(item.context.custom["category"]);
          }
        });
        setCategories(tempCategories);

        if (selectedCategory !== "All") {
          data.resources = data.resources.filter(
            (item) => item.context.custom["category"] === selectedCategory
          );
        }

        const nrOfPages = [...Array(Math.ceil(data.resources.length / 6))];
        setTotalPages(nrOfPages);

        const start = (currentPage - 1) * 6;
        const end = start + 6;
        const pageItems = data.resources.slice(start, end);

        let tempImgs = [];
        pageItems.forEach((item) => {
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
        setPhotos(tempImgs);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`There was an error: ${error.message}`);
        setIsLoading(false);
      });
  }, [currentPage, selectedCategory]);

  const spinner = (
    <div className={classes["loader-container"]}>
      <ClipLoader
        color="rgba(0,0,0,0.5)"
        loading={isLoading}
        css={`
          display: block;
          margin: 0 auto;
        `}
        size={100}
      />
    </div>
  );

  const header = (
    <div className={classes.header}>
      <h2>GALLERY</h2>
      <p>
        Welcome to my gallery! I take most of my photos while I am out traveling
        and I mostly do street/urban photography. I started with photography in
        October 2021, so I still consider myself a beginner. Hope you'll enjoy
        the photos!
      </p>
    </div>
  );

  const errorMessage = (
    <div className={classes["error-msg"]}>
      <div className={classes["error-code"]}>404</div>
      <div className={classes["error-text"]}>
        Oops, something went wrong :&#40; <br></br> Please try again later!
      </div>
    </div>
  );

  return (
    <Fragment>
      {" "}
      <div className={classes["main-container"]}>
        {header}
        <div className={classes.gallery}>
          {error && errorMessage}
          {!isLoading && !error && (
            <div className={classes.categories}>
              <ul>
                {categories.map((category) => {
                  return (
                    <li
                      key={category}
                      className={`${
                        selectedCategory === category ? classes.active : ""
                      }`}
                      onClick={() => categoryClickHandler(category)}
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {isLoading && spinner}
          {!isLoading && photos.length > 0 && (
            <div className={classes.grid}>
              {photos.map((photo, i) => {
                return (
                  <div
                    className={
                      classes[`grid-item-${i}`] + " " + classes["grid-item"]
                    }
                    key={photo.publicId}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      srcSet={photo.srcSet}
                      sizes={photo.sizes}
                      className={classes.image}
                      onClick={() => clickImageHandler(photo)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {!error && <div className={classes.pagination}>
          <ul>
            <FaChevronLeft
              onClick={() => arrowClickHandler("left")}
              className={
                classes.arrow + ` ${currentPage === 1 ? classes.disabled : ""}`
              }
            />
            {photos &&
              totalPages.map((e, i) => {
                return (
                  <li
                    key={i + 1}
                    onClick={() => pageNrClickHandler(i + 1)}
                    className={`${
                      currentPage === i + 1 ? classes["active-page"] : ""
                    }`}
                  >
                    {i + 1}
                  </li>
                );
              })}
            <FaChevronRight
              onClick={() => arrowClickHandler("right")}
              className={
                classes.arrow +
                ` ${currentPage === totalPages.length ? classes.disabled : ""}`
              }
            />
          </ul>
        </div>}
      </div>
      {showModal && (
        <Modal
          url={clickedImgProps.url}
          publicId={clickedImgProps.publicId}
          onBackdropClick={clickBackdropHandler}
        />
      )}
    </Fragment>
  );
};

export default GalleryContent;
