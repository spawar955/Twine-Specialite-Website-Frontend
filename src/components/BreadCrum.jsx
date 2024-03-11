import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const BreadCrum = (props) => {
    const{title} = props;
  return (
    <>
    <div className="breadcrum mb-0 py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 d-flex justify-content-center ">
                    <p className="text-center">
                        <Link to={"/"} className="text-dark">
                            Home / {title}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default BreadCrum;
