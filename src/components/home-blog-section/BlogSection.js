import { useEffect, useState, Fragment } from "react";
import classes from "./BlogSection.module.css";
import BlogThumbnail from "./BlogThumbnail";
import Button from "../../UI/Button";
import ClipLoader from "react-spinners/ClipLoader";

import Butter from "buttercms";
const butter = Butter("436a6c093ecc4ae2554bb1bffc61f1dc77a011da");

const BlogSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 3,
      });
      setData(response.data);
    } catch (e) {
      setError(`There was an error: ${e.message}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className={classes.container}>
      <h2>LATEST BLOGPOSTS</h2>
      {isLoading && (
        <ClipLoader
          color="rgba(0,0,0,0.5)"
          loading={isLoading}
          css={`
            display: block;
            margin: 0 auto;
          `}
          size={100}
        />
      )}
      {!isLoading && data && (
        <Fragment>
          <div className={classes.thumbnails}>
            {data.data.map((post) => {
              return <BlogThumbnail post={post} key={post.published} />;
            })}
          </div>
          <div className={classes["btn-container"]}>
            <Button type="text" text="More posts"/>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default BlogSection;
