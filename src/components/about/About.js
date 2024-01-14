"use client";
import React, { useEffect } from "react";
import styles from "../about/about.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  let aboutPic = "/images/pushti-vardhnam.jpg";
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  return (
    <div className={styles.about} id="about-us">
      <div className="container">
        <div className={`row ${styles.aboutRow}`}>
          <div className={`col-lg-6 ${styles.aboutLeft}`}>
            <Image
              width={553}
              height={653}
              src={aboutPic}
              alt="Unique Formula For Your Muscle"
              title="Unique Formula For Your Muscle"
              className="w-100"
            />
          </div>
          <div className={`col-lg-6 ${styles.aboutRight}`}>
            <div className={`${styles.aboutRightInner}`}>
              <div className={`rounded ${styles.redefine}`} data-aos="fade-up">
                Redefine your limits - Be an Alpha
              </div>
              <h1 data-aos="fade-up">
                Welcome To The Unique Formula For Your Muscle - Building Goals!
              </h1>
              <div className="seprator" data-aos="fade-up"></div>
              <p data-aos="fade-up">
                <span className="green-text">Pushtivardhanam</span> is a
                traditional polyherbal formulation mass gainer that has balya
                guna (fortifying properties). The main ingredient of this
                preparation is Pisum sativum, Ashwagandha, and Moringa Oleifera.
              </p>
              <p data-aos="fade-up">
                Ayurveda recognizes the interrelation of the mind and body.{" "}
                <span className="green-text">Pushtivardhanam</span> aims to
                create harmony between these two aspects.
              </p>
              <p data-aos="fade-up">
                A perfect companion for individuals striving to pack on solid
                mass and maximize their strength gains. Unlock your true
                potential with ancient wisdom and modern science to fuel your
                body with the essential nutrients it needs to build lean muscle
                mass effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
