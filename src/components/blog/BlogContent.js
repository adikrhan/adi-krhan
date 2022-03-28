import { useEffect, useState, useContext } from "react";
import classes from "./BlogContent.module.css";
import BlogThumbnail from "../home-blog-section/BlogThumbnail";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

import Butter from "buttercms";
import SizeContext from "../../store/size-context";
import DropDownMenu from "../../UI/DropDownMenu";
const butter = Butter("436a6c093ecc4ae2554bb1bffc61f1dc77a011da");

const BlogContent = () => {
  const windowSizeCtx = useContext(SizeContext);
  const windowWidth = windowSizeCtx.width;

  const categories = ["All", "Personal", "Travel", "Books", "Web development"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([0]);

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

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await butter.post.list({
        page: currentPage,
        page_size: 4,
        tag_slug: selectedCategory !== 'All' ? selectedCategory.toLowerCase() : ''
      });

      const nrOfPages = [
        ...Array(Math.ceil(response.data["meta"]["count"] / 4)),
      ];
      setTotalPages(nrOfPages);

      setData(response.data["data"]);
      console.log(response.data);
    } catch (e) {
      setError(`There was an error: ${e.message}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, selectedCategory]);

  const categoryClickHandler = (category) => {
    setSelectedCategory(category);
  };

  const header = (
    <div className={classes.header}>
      <h2>BLOG</h2>
      {windowWidth > 600 && (
        <ul className={classes['categories-ul']}>
          {categories.map((category) => {
            return (
              <li
                key={category}
                className={`${
                  category === selectedCategory ? classes.active : ""
                }`}
                onClick={() => categoryClickHandler(category)}
              >
                {category.toUpperCase()}
              </li>
            );
          })}
        </ul>
      )}
      {windowWidth <= 600 && (
        <DropDownMenu items={categories} selectedItem={selectedCategory} onListItemClick={categoryClickHandler} />
      )}
    </div>
  );

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

  const errorMessage = (
    <div className={classes["error-msg"]}>
      <div className={classes["error-code"]}>404</div>
      <div className={classes["error-text"]}>
        Oops, something went wrong :&#40; <br></br> Please try again later!
      </div>
    </div>
  );

  return (
    <div className={classes["main-container"]}>
      {header}
      {error && errorMessage}
      {isLoading && spinner}
      {!isLoading && data && (
        <div className={classes.blogposts}>
          {data.map((post) => {
            return (
              <BlogThumbnail
                post={post}
                key={post.published}
                colWidthLg="47.5%"
              />
            );
          })}
        </div>
      )}
      <div className={classes.pagination}>
        <ul>
          <FaChevronLeft
            onClick={() => arrowClickHandler("left")}
            className={
              classes.arrow + ` ${currentPage === 1 ? classes.disabled : ""}`
            }
          />
          {!isLoading &&
            data &&
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
      </div>
    </div>
  );
};

export default BlogContent;
