import classes from "./BlogSection.module.css";
import BlogThumbnail from "./BlogThumbnail";
import Button from "../../UI/Button";

const BLOG_DUMMY = [
  {
    src: "https://source.unsplash.com/ljhCEaHYWJ8",
    alt: "Lisbon",
    headline: "My trip to Lisbon",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    src: "https://source.unsplash.com/jFCViYFYcus",
    alt: "Forest",
    headline: "Out in the wild",
    text: "Last weekend I spent a day out in the wild. I got hunted by a black bear but luckily I could use my Jiu Jitsu skills on him.",
  },
  {
    src: "https://source.unsplash.com/hC_796Wu-VY",
    alt: "Work",
    headline: "Hard work work",
    text: "This work is really hard. Sitting on a train and coding my website and looking out through the window no the passing landscape.",
  },
];

const BlogSection = () => {
  return (
    <div className={classes.container}>
      <h2>LATEST BLOGPOSTS</h2>
      <div className={classes.thumbnails}>
        {BLOG_DUMMY.map((post) => {
          return <BlogThumbnail post={post} />;
        })}
      </div>
      <div className={classes["btn-container"]}>
        <Button type="text" text="More posts" bgColor="yellow-bg" />
      </div>
    </div>
  );
};

export default BlogSection;
