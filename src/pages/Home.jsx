import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Productcard from "../components/ProductCard";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="main-banner1 display-flex">
                <div>
                  <img
                    src="/images/img1.jpg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                </div>
                <div className="main-banner-content ">
                  <h4>Best Selling Product</h4>
                  <h5>Nova Clear Xpress Epoxy Resin</h5>
                  <p>₹465/-</p>
                  <Link className="button" to={"/BuyNow"} >BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-item-center">
                <div className="small-banner position-relative">
                  <img
                    src="/images/bg.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>ATTENTION STATEMENT</h4>
                    <h5>Product Name</h5>
                    <p>
                      From ₹10,000 <br /> or ₹2000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/bg.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>ATTENTION STATEMENT</h4>
                    <h5>Product Name</h5>
                    <p>
                      From ₹10,000 <br /> or ₹2000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/bg.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>ATTENTION STATEMENT</h4>
                    <h5>Product Name</h5>
                    <p>
                      From ₹10,000 <br /> or ₹2000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/bg.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>ATTENTION STATEMENT</h4>
                    <h5>Product Name</h5>
                    <p>
                      From ₹10,000 <br /> or ₹2000/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection-wrapper py-5">
      <div className="container-xxl">
        <h3 className="section-heading">Our Collections</h3>
          <a href="/ShopNow">
        <div className="collection-items">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="collection-item">
              <img src="/images/bg.jpeg" />
              <h6>Collection {index + 1}</h6>
              <p>10 Items</p>
              <div className="sub-products">
                {[...Array(3)].map((_, subIndex) => (
                  <div key={subIndex} className="sub-product">
                    <img src="/images/bg.jpeg" alt={`Sub Product ${subIndex + 1}`} />
                    <h6>Sub Product {subIndex + 1}</h6>
                    <p>$10</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
          </a>
      </div>
    </section>

    <section className="customer-reviews py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Customer Reviews</h3>
              <div className="customer-reviews-container">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="customer-review">
                    <div className="star-rating">
                      <span role="img" aria-label="star">⭐️⭐️⭐️⭐️⭐️</span>
                    </div>
                    <p className="review-text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero eu metus sodales sagittis. Quisque accumsan orci non sapien vulputate dictum."
                    </p>
                    <p className="review-date">
                      January 1, 2024
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
