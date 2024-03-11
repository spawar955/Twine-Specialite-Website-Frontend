import React from "react";
import {Helmet} from "react-helmet";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import BreadCrum from "../components/BreadCrum";


function ShopNow() {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Shop Now</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <BreadCrum title = 'Go to home' />

        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
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
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="filter-sub-title">
                                    Availability
                                </h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"></input>
                                    <label className="form-check-label" for=""> In Stock</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"></input>
                                    <label className="form-check-label" for=""> Out of Stock</label>
                                </div>
                                <h5 className="filter-sub-title">
                                    Price
                                </h5>
                                <div className="d-flex align-items-center gap-10">
                                <div className="form-floating mb-3" style={{height:"35px"}}>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="From" />
                                    <label for="floatingInput">From</label>
</div>
                                <div className="form-floating mb-3" style={{height:"35px"}}>
                                    <input type="email" class="form-control" id="floatingInput1" placeholder="To" />
                                    <label for="floatingInput1">To</label>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                        </div>
                    </div>
                    <div className="col-9">
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
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ShopNow;
