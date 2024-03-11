import React from "react";
import ReactStars from "react-rating-stars-component";


const Productcard = ({prod_name,prod_stars,prod_price}) => {
  const name = prod_name;
  const stars = prod_stars;
  const price = prod_price;

  return (

    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="images/bg.jpeg"></img>
            </div>
            <div className="product-details">
                <h6 className="brand">{name}</h6>
            </div>
            <h5 className="product-title"></h5>
            <ReactStars
              count={5}
              size={24}
              value= {stars}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="product-price"> $ {price}</p>
        </div>
    </div>
  );
}

export default Productcard;
