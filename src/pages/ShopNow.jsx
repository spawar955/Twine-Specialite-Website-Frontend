import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import BreadCrum from "../components/BreadCrum";

function ShopNow() {
  return (
    <>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              {/* Filter Cards */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="filter-sub-title">Availability</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"></input>
                    <label className="form-check-label" htmlFor="">In Stock</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"></input>
                    <label className="form-check-label" htmlFor="">Out of Stock</label>
                  </div>
                  <h5 className="filter-sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3" style={{height:"35px"}}>
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3" style={{height:"35px"}}>
                      <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Other Filter Cards */}
            </div>
            <div className="col-9">
              {/* Filter and Sort Grid */}
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block">Sort By:</p>
                    <select name="" className="form-control form-select">
                      <option>Price(Increasing)</option>
                      <option>Price(Decreasing)</option>
                      <option>Best Selling</option>
                      <option>Alphabetically</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Product Cards */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="col">
                    <div className="card h-100">
                      <img src="images/bg.jpeg" className="card-img-top" alt={`Product ${index + 1}`} />
                      <div className="card-body">
                        <h5 className="card-title">Product Name</h5>
                        <p className="card-text">$100</p>
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNow;
