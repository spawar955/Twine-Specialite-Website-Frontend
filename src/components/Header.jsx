import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-start text-white mb-0">
                Free Shiping Over ₹5000 & Free Returns
              </p>
            </div>
            
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center ">
            <div className="col-2">
              <a href="/" className="logo">
                <img src="/images/Logo.png"></img>
              </a>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-9" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center ">
                
                <div>
                  <a href="/MyCart" className="d-flex align-items-center gap-10 text-white" >
                    <img src="/images/cart.svg" alt="card" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₹500</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br /> My Account{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                    {/* <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-inline-block">
                          <img
                            className="me-3"
                            src="/images/menu.svg"
                            alt="menu"
                          />
                          Shop Categories
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Collection">View Collections</NavLink>
                    <NavLink to="/">New Products</NavLink>
                    <NavLink to="/ShopNow">Shop Now</NavLink>
                    <NavLink to="/ResinCalculator">Resin Calculator</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
