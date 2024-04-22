import React from "react";

function Collection() {
  return (
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
  );
}

export default Collection;
