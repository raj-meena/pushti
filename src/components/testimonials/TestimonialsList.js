import Image from "next/image";

export const TestimonialsList = ({ name, forHealth, desc, rating }) => {
  return (
    <div>
      <div className="testimonial-box" data-aos="fade-up">
        <div className="cust-name" data-aos="fade-up">
          {name}
        </div>
        <div className="cust-note" data-aos="fade-up">
          {forHealth}
        </div>
        <div className="cust-mess" data-aos="fade-up">
          {desc}
        </div>
        <div className="cust-rating" data-aos="fade-up">
          <Image
            width={113}
            height={19}
            src={rating}
            alt="5 Star"
            title="5 Star"
          />
        </div>
      </div>
    </div>
  );
};
