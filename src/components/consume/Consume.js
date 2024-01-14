import Image from "next/image";
import styles from "../consume/consume.module.css";
import ConsumeData from "./ConsumeData";

const Consume = () => {
  return (
    <div className={`overflow-hidden ${styles.consume}`}>
      <div className="container-fluid">
        <h2 className="text-center" data-aos="fade-up">
          How to Consume Pushtivardhanam
        </h2>
      </div>
      <div className={styles.consumeBg}>
        <div className="container text-center">
          <div className="consume-icon d-lg-none">
            <Image
              width={104}
              height={103}
              src="/images/course-duration.svg"
              alt="Course Duration"
              title="Course Duration"
            />
          </div>
          <ConsumeData heading="Course Duration" desc="45 days" />
          <div className="row align-items-center">
            <div className="col-lg-3" data-aos="fade-right">
              <div className="consume-icon d-lg-none">
                <Image
                  width={104}
                  height={104}
                  src="/images/dosage.svg"
                  alt="Dosage"
                  title="Dosage"
                />
              </div>
              <ConsumeData
                heading="Dosage"
                desc="Two scoops (5 gm each) every morning and evening OR 1 scoop of 10 gm every morning and evening."
              />
            </div>
            <div className="col-lg-6 d-lg-block d-none" data-aos="fade-up">
              <Image
                width={541}
                height={298}
                src="/images/consume.svg"
                alt="How to Consume Pushtivardhanam"
                title="How to Consume Pushtivardhanam"
              />
            </div>
            <div className="col-lg-3" data-aos="fade-left">
              <div className="consume-icon d-lg-none">
                <Image
                  width={109}
                  height={109}
                  src="/images/package-contains.svg"
                  alt="Package Contains"
                  title="Package Contains"
                />
              </div>
              <ConsumeData
                heading="Package Contains"
                desc="3 bottles each of 300 gm with a scoop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consume;
