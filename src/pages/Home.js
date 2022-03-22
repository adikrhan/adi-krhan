import { Fragment } from "react";
import AboutSection from "../components/home-about-section/AboutSection";
import HeroSection from "../components/home-hero-section/HeroSection";
import RecentContentSection from "../components/home-recent-content-section/RecentContentSection";
import BlogSection from "../components/home-blog-section/BlogSection";
import Subscribe from "../components/subscribe/Subscribe";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <RecentContentSection />
      <Subscribe />
      <BlogSection />
    </Fragment>
  );
};

export default Home;
