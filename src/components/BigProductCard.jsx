import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";



const BigProductcard = ({prod_name,prod_price,prod_stars,prod_brand,prod_discount}) =>  {
    const name = prod_name
    const price = prod_price
    const stars = prod_stars
    const brand = prod_brand
    const discount = prod_discount
  return (
    <>
        <div className="big-product-card">
            <div className="big-product-image">
                <img src="images/img1.jpg"></img>
            </div>
            <div className="big-product-lefthand">
                <div className="big-product-name">
                    <div className="big-brand">Nova Clear Xpress Epoxy Resin | Twine Specialties |<br></br> Crystal clear fast drying resin | Mixing ratio 2:1 (300)
                    </div>
                </div>
                <div className="big-product-details">
                    <div className="big-brand-subname">
                        Brand: Nova Clear
                    </div>
                </div>
                <h5 className="big-product-title"></h5>
                <ReactStars
                count={stars}
                size={24}
                value= '3'
                edit={false}
                activeColor="#ffd700"
                />
                <p className="big-product-price-lh">
                    <div className="sub-price"> -{discount}%</div>
                    $ {price}
                </p>
                <Link className="button" to={"/PaymentMethod"} >BUY NOW</Link>
            </div>
            <div className="big-product-righthand">
                <div className="big-product-price-rh-title">Final Price</div>
                <div className="big-product-price-rh"> $ 100.99</div>
                <Link className="rh-button" to={"/BuyNow"} >Add to Cart</Link>
            </div>
        </div>
    </>
  );
}

export default BigProductcard;
