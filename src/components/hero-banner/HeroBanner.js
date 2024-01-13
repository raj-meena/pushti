import styles from "../hero-banner/heroBanner.module.css";
import HeroBannerList from "./HeroBannerList";
import HeroSlideButton from "./HeroSlideButton";
import HeroNextPrev from "./HeroNextPrev";
const HeroBanner = () => {
  const bannerList = [
    {
      img: "/images/banner1.jpg",
      isFirst: true,
    },
    {
      img: "/images/banner2.jpg",
      isFirst: false,
    },
    {
      img: "/images/banner3.jpg",
      isFirst: false,
    },
    {
      img: "/images/banner4.jpg",
      isFirst: false,
    },
    {
      img: "/images/banner5.jpg",
      isFirst: false,
    },
  ];
  return (
    <div className={styles.heroBanner} id="home">
      <div id="carouselExampleIndicators" className="carousel slide">
        <HeroSlideButton />
        <div className="carousel-inner">
          {bannerList.map((banner) => (
            <HeroBannerList
              key={Math.random() * 10}
              img={banner.img}
              isFirst={banner.isFirst}
            />
          ))}
        </div>
        <HeroNextPrev />
      </div>
    </div>
  );
};

export default HeroBanner;
