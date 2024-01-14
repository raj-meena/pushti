import Image from "next/image";
import styles from "../get-in-touch/getInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch} id="contact-us">
      <div className="container">
        <div className={styles.getInTouchBox}>
          <div className="row">
            <div className={`col-lg-6 ${styles.getInTouchLeft}`}>
              <h2 data-aos="fade-up">Get In Touch</h2>
              <p data-aos="fade-up">We are here for you! How can we help?</p>

              <div className={`row g-3 ${styles.row}`}>
                <div className="col-lg-12" data-aos="fade-up">
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="col-lg-12" data-aos="fade-up">
                  <input
                    type="email"
                    className={`form-control ${styles.formControl}`}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="col-lg-12" data-aos="fade-up">
                  <textarea
                    placeholder="Enter Your Message"
                    className={`form-control ${styles.formControl}`}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-12" data-aos="fade-up">
                  <button
                    className={`btn btn-success w-100 text-uppercase ${styles.btnSuccess}`}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 ${styles.getInTouchRight}`}>
              <Image
                width={483}
                height={535}
                src="/images/get-in-touch.jpg"
                alt="Get In Touch"
                title="Get In Touch"
                className="rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
