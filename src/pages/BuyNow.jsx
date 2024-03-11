import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import BigProductcard from "../components/BigProductCard";

const BuyNow = () =>{
  return (
    <>
        <section className="blog-wrapper py-5 home-wrapper-2" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            </div>
            <BigProductcard />
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyNow;
