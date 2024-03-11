import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/bg.jpeg" alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">06 March 2024</p>
          <h5 className="title">A Beautiful Morning Renaissance</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nam
            sequi harum aut necessitatibus repellendus!
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
