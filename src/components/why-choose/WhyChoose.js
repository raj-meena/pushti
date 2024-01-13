import Image from "next/image";
import styles from "../why-choose/whyChoose.module.css";

const WhyChoose = () => {
  return (
    <div className={styles.whyChoose}>
      <div className={styles.whyChooseFirst} id="our-product">
        <div className="container">
          <h2 className="text-center" data-aos="fade-up">
            Why Choose Pushtivardhanam?
          </h2>
          <div className="row">
            <div className={`col-lg-6 ${styles.whyChooseLeft}`}>
              <Image
                src="/images/why-choose.png"
                alt="Why Choose Pushtivardhanam?"
                title="Why Choose Pushtivardhanam?"
                className="w-100"
                width={553}
                height={525}
              />
              <div className="dot-sep">
                <Image
                  src="images/dot.svg"
                  alt="dot"
                  width="220"
                  height="220"
                />
              </div>
            </div>
            <div className={`col-lg-6 ${styles.whyChooseRight}`}>
              <h3 data-aos="fade-up">Ayurvedic Excellence</h3>
              <p data-aos="fade-up">
                Pushtivardhanam is carefully crafted by following the classical
                Ayurvedic formulation. Carefully selected herbs, botanical
                extracts, and traditional ingredients combine to create a
                synergistic formula that supports muscle growth, promotes
                balance, and optimizes overall well-being.
              </p>
              <h3 data-aos="fade-up">Natural and Pure Muscle Fuel</h3>
              <p data-aos="fade-up">
                Packed with premium quality proteins sourced from ethically
                harvested sources. Pea protein, moringa extracts, and
                ashwagandha provide a sustained release of protein, promoting
                muscle synthesis throughout the day.
              </p>
              <h3 data-aos="fade-up">Energize Your Workouts</h3>
              <p data-aos="fade-up">
                Pushtivardhanam is enriched with Ayurvedic herbs and botanicals
                including Sahjna extract, Methi extract, and Spirulina for their
                ability to enhance muscle recovery, boost stamina, and promote
                strength.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whyChooseSecond}>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className={`col-lg-6 ${styles.whyChooseSecondLeft}`}>
              <h3 data-aos="fade-up">Essential Nutrients</h3>
              <p data-aos="fade-up">
                Ayurvedic blend goes beyond protein and carbs. That&apos;s why
                Pushtivardhanam is fortified with Brahmi extract, which is a
                powerful antioxidant and it improves the nutritional status of
                the body. Spinacia oleracea has high fiber and helps in good
                digestion.
              </p>
              <h3 data-aos="fade-up">Optimal nutrient Absorption</h3>
              <p data-aos="fade-up">
                Ayurveda teaches us that proper digestion and assimilation are
                key to reaping the benefits of any supplement. Pushtivardhanam
                includes ingredients like pipali extract, flax seed extract, and
                amla extract known to boost metabolism and support healthy
                digestion, ensuring that your body efficiently absorbs and
                utilizes the essential nutrients required for muscle growth.
              </p>
              <h3 data-aos="fade-up">Trusted Ayurvedic Expertise</h3>
              <p data-aos="fade-up">
                We are committed to providing you with the highest quality
                products. We pride ourselves on our deep-rooted understanding of
                Ayurveda and its application to modern health and wellness.
                Pushtivardhanam is developed by a team of experienced Ayurvedic
                practitioners, ensuring authenticity, safety, and efficacy in
                every product we deliver.
              </p>
            </div>
            <div className={`col-lg-6 ${styles.whyChooseSecondRight}`}>
              <Image
                width={553}
                height={627}
                src="/images/essential-nutrients.png"
                alt="Essential Nutrients, Optimal nutrient Absorption, Trusted Ayurvedic Expertise"
                title="Essential Nutrients, Optimal nutrient Absorption, Trusted Ayurvedic Expertise"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
