"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "../testimonials/testimonials.module.css";
import { TestimonialsList } from "./TestimonialsList";

const Testimonials = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const testimonialAll = [
    {
      name: "Prakhar Mohapatra",
      forHealth: "Good for health",
      desc: "I occasionally suffer from heartburn and it makes me absolutely miserable. I typically try to avoid taking medicines but I broke down and decided to give this a shot. I was so glad I did. I felt the results almost immediately after starting the course.",
      rating: "/images/star.svg",
      userPic: "/images/t1.png",
    },
    {
      name: "Sarah",
      forHealth: "Good for health",
      desc: "I&apos;ve always been passionate about fitness, but I struggled to gain muscle mass. I tried various workout programs and diets, but nothing seemed to work. Then, I decided to seek help from a personal trainer who specialized in muscle-building.",
      rating: "/images/star.svg",
      userPic: "/images/t2.png",
    },
    {
      name: "Mike",
      forHealth: "Good for health",
      desc: "I used to be overweight and out of shape. I decided to make a lifestyle change and embarked on a muscle-building journey. Initially, it was challenging, but I remained consistent and determined. Slowly but surely, I started seeing progress.",
      rating: "/images/star.svg",
      userPic: "/images/t3.png",
    },
    {
      name: "Emily",
      forHealth: "Good for health",
      desc: "As a woman, I used to believe that lifting weights and building muscle would make me look bulky and unfeminine. However, I decided to challenge that misconception and started a muscle-building program. I was amazed by the results.",
      rating: "/images/star.svg",
      userPic: "/images/t4.png",
    },
    {
      name: "David",
      forHealth: "Good for health",
      desc: "I&apos;ve always been a skinny guy and struggled with low self-esteem because of it. I wanted to change my physique and build muscle, so I dedicated myself to a disciplined workout routine and proper nutrition. It wasn&apos;t easy, but I pushed through the challenges.",
      rating: "/images/star.svg",
      userPic: "/images/t5.png",
    },
  ];

  return (
    <div
      className={`testimonials overflow-hidden ${styles.testimonials}`}
      id="testimonials"
    >
      <div className="container">
        <div className={styles.testimonialRow}>
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-lg-6 testimonial-left">
              <div className={`testimonial-main ${styles.testimonialMain}`}>
                <Slider
                  adaptiveHeight={true}
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {testimonialAll.map((test) => (
                    <TestimonialsList
                      key={Math.random() * 10}
                      name={test.name}
                      forHealth={test.forHealth}
                      desc={test.desc}
                      rating={test.rating}
                    />
                  ))}
                </Slider>
                <div className="slider-nav">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                  >
                    <div>
                      <Image
                        src="/images/t1.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t2.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t3.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t4.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t5.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t1.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t2.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t3.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t4.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/t5.png"
                        alt="testimonial author"
                        width={38}
                        height={38}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 ${styles.testimonialRight}`}>
              <div className="text-end" data-aos="fade-left">
                <Image
                  width={476}
                  height={161}
                  src="/images/top-shape.svg"
                  alt="shape"
                />
              </div>
              <div className={styles.quote} data-aos="fade-up">
                <Image
                  width={60}
                  height={54}
                  src="/images/quote.svg"
                  alt="What Our Customers Are Saying"
                  title="What Our Customers Are Saying"
                />
                What Our Customers <br />
                Are Saying
              </div>
              <div className="text-end" data-aos="fade-left">
                <Image
                  width={316}
                  height={107}
                  src="/images/bottom-shape.svg"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
