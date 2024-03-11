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

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over ₹500</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center"> 
                  <div>
                    <h6>Item name</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Products</h3>
            </div>
            <Productcard
                prod_name = "product1"
                prod_stars = '1'
                prod_price = '100.99'
            />
            <Productcard
                prod_name = "nikki"
                prod_stars = '5'
                prod_price = '100'
            />
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;