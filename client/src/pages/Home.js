import React from "react";
import '../styles/Home.css'
import NavbarHome from "../components/Home/NavbarHome";
import SearchSection from "../components/Home/SearchSection";
import TileSection from "../components/Home/TileSection";
import SpecialitiesSection from "../components/Home/SpecialitiesSection";
import BlogsSection from "../components/Home/BlogsSection";
import NewsletterSection from "../components/Home/NewsletterSection";

const Home = () => {

  return <div className="component-wrapper">
    <NavbarHome />
    <SearchSection />
    <TileSection />
    <SpecialitiesSection />
    <BlogsSection />
    <NewsletterSection />
  </div>;
};

export default Home;