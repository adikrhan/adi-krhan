import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Butter from "buttercms";
import moment from "moment";

import ClipLoader from "react-spinners/ClipLoader";
import classes from "./SinglePost.module.css";
import {
  FaArrowLeft,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const butter = Butter("436a6c093ecc4ae2554bb1bffc61f1dc77a011da");

const SinglePost = () => {
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { slug } = useParams();

  const fetchPost = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await butter.post.retrieve(slug);
      setBlogPost(response["data"].data);
      console.log(response["data"].data);
      setIsLoading(false);
    } catch (err) {
      setError(`There was an error: ${err.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
      <div className={classes.header}>
        <h2>BLOG</h2>
        <span onClick={() => navigate(-1)}>
          <FaArrowLeft /> BACK
        </span>
      </div>
      {isLoading && spinner}
      {!isLoading && error && errorMessage}
      {!isLoading && !error && blogPost && (
        <div className={classes.content}>
          <h3>{blogPost.title}</h3>
          <div className={classes.metadata}>
            <span>{blogPost.tags[0]["name"]}</span>|
            <span>{moment(blogPost.published).format("LL")}</span>
          </div>
          <div className={classes["img-container"]}>
            <img
              src={blogPost.featured_image}
              alt={blogPost.featured_image_alt}
            />
          </div>
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: blogPost.body }}
          ></div>
          <div className={classes.author}>
            <div className={classes.name}>
              {blogPost.author.first_name} {blogPost.author.last_name}
            </div>
            <div className={classes.social}>
              <FaEnvelope className={classes.icon} />
              <FaInstagram className={classes.icon} />
              <FaLinkedin className={classes.icon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
