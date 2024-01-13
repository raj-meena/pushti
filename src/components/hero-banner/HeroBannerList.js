import React from "react";
import Image from "next/image";
const HeroBannerList = ({ img, isFirst }) => {
  return (
    <div className={`carousel-item ${isFirst ? "active" : ""}`}>
      <Image
        width={1903}
        height={793}
        src={img}
        className="d-block w-100"
        alt="Pushti Vardhnam Banner 2"
      />
    </div>
  );
};

export default HeroBannerList;
