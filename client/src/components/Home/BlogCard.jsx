import React from "react";

const BlogCard = ({ cover, title }) => {
  return (
    <div className="blogCard-wrapper">
      <div className="blogCard-image-wrapper">
        <img className="img-fluid" src={cover} alt="blog" />
      </div>
      <div className="blogCard-content-wrapper">
        <div className="blogCard-title">{title}</div>
        <div className="blogCard-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi vel consectetur interdum nisi vel consectetur interdum,
        </div>
        <div className="blogCard-readmore">
          <span>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
