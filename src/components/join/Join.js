import Image from "next/image";
import styles from "../join/join.module.css";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.joinTop}>
        <Image
          src="/images/shape-left.svg"
          alt="shape top"
          width={782}
          height={264}
        />
      </div>
      <div className="container position-relative z-1">
        <div className="row">
          <div className={`col-lg-6 ${styles.joinLeft}`}>
            <Image
              src="/images/join.png"
              alt="join"
              className="w-100"
              width={541}
              height={269}
            />
          </div>
          <div className={`col-lg-6 ${styles.joinRight}`}>
            <p data-aos="fade-up">
              Join the community of individuals who have embraced the power of
              Ayurveda and witnessed remarkable transformations.
            </p>
            <p data-aos="fade-up">
              Take the first step towards a holistic, Ayurvedic approach to
              muscle building.
            </p>
            <p data-aos="fade-up">
              Order your Pushtivardhanam today and witness the transformation
              firsthand!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.joinBottom}>
        <Image
          src="/images/shape-right.svg"
          alt="shape bottom"
          width={782}
          height={264}
        />
      </div>
    </div>
  );
};

export default Join;
