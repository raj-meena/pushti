import Image from "next/image";
import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-3 ${styles.foo1}`}>
              <div className={styles.fooLogo}>
                <Image
                  src="/images/pushti-vardhnam.svg"
                  alt="Pushti Vardhnam"
                  title="Pushti Vardhnam"
                  width="203"
                  height="54"
                  priority={false}
                  placeholder="empty"
                />
              </div>
              <ul className={styles.footerList}>
                <li data-aos="fade-up">
                  <a href="#" title="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#" title="Return & Refund Policy">
                    Return & Refund Policy
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#" title="Terms and conditions">
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 ps-5">
              <h3 data-aos="fade-up">Pages</h3>
              <ul className={styles.footerList}>
                <li data-aos="fade-up">
                  <a href="#home" title="Home">
                    Home
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#about-us" title="About Us">
                    About Us
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#our-product" title="Our Product">
                    Our Product
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#testimonials" title="Testimonial">
                    Testimonial
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#contact-us" title="Contact Us">
                    Contact Us
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a href="#buy-now" title="Buy Now">
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 data-aos="fade-up">Email</h3>
              <p data-aos="fade-up">
                <a
                  href="mailto:info@Pushtivardhanam.com"
                  title="info@Pushtivardhanam.com"
                >
                  info@
                  <br />
                  Pushtivardhanam.com
                </a>
              </p>
              <h3 data-aos="fade-up">Contact Info</h3>
              <p className="ph-line" data-aos="fade-up">
                <a href="tel:+919229337811">+91 - 9229337811</a>
                <br />
                <a href="tel:+919229337813">+91 - 9229337813</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h3 data-aos="fade-up">Address</h3>
              <p data-aos="fade-up">
                701, Atulya It Park, Bhawarkuan Indore 452016
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          © Copyright 2024, Pushti Vardhanam. All Rights Reserved.
        </div>
      </div>
      <a className={styles.cta} href="tel:+919229337811">
        <Image
          src="/images/call-now.svg"
          title=""
          alt="Call Now"
          width="250"
          height="127"
        />
      </a>
    </footer>
  );
};

export default Footer;
