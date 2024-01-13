import React from "react";

const ConsumeData = ({ heading, desc }) => {
  return (
    <>
      <h3 data-aos="fade-up">{heading}</h3>
      <p data-aos="fade-up">{desc}</p>
    </>
  );
};

export default ConsumeData;
