import { Fragment } from "react";
import AboutSection from "../components/about-section/AboutSection";
import HeroSection from "../components/hero-section/HeroSection";
import RecentContentSection from "../components/recent-content-section/RecentContentSection";
import BlogSection from "../components/blog-section/BlogSection";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../UI/Footer";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <RecentContentSection />
      <Subscribe />
      <BlogSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
