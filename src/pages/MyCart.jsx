import React from "react";

function MyCart() {
  return (
    <div className="container">
      {/* <h1 className="mt-4 mb-4 ">My Cart</h1> */}
      <div className="row">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="col-4">
            <div className="card mb-3">
              <img src={`/images/bg.jpeg`} className="card-img-top" alt={`Product ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">$100</p>
                <button className="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg">Order Now</button>
      </div>
    </div>
  );
}

export default MyCart;
