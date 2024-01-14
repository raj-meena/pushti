import styles from "../get-in-touch/getInTouch.module.css";

const Form = () => {
  return (
    <div className={`row g-3 ${styles.row}`}>
      <div className="col-lg-12" data-aos="fade-up">
        <input
          type="text"
          name="name"
          className={`form-control ${styles.formControl}`}
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div className="col-lg-12" data-aos="fade-up">
        <input
          type="email"
          name="email"
          className={`form-control ${styles.formControl}`}
          placeholder="Enter Your Email Address"
          required
        />
      </div>
      <div className="col-lg-12" data-aos="fade-up">
        <textarea
          name="message"
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
  );
};

export default Form;
