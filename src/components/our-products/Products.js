import React from "react";
import Image from "next/image";
const Products = ({ name, img, price, desc, btn }) => {
  return (
    <div className="col-lg-4">
      <div className="product-box">
        <h3 data-aos="fade-up">{name}</h3>
        <Image
          width={136}
          height={206}
          data-aos="fade-up"
          src={img}
          alt={name}
          title={name}
        />
        <h4 data-aos="fade-up">
          {name === "Overseas Delivery" ? `$${price}` : `₹${price}`}/-
        </h4>
        <p data-aos="fade-up">{desc}</p>
        <a data-aos="fade-up" href="#" className="btn btn-success" title={btn}>
          {btn}
        </a>
      </div>
    </div>
  );
};

export default Products;
