import Products from "./Products";
import styles from "../our-products/ourProducts.module.css";

const OurProducts = () => {
  let proPic = "/images/pushtivardhanam-product.png";
  let productsAll = [
    {
      name: "Online Payment",
      img: proPic,
      price: "3240",
      desc: "Inclusive Of Shipping Charges",
      btn: "BUY NOW",
    },
    {
      name: "Cash On Delivery",
      img: proPic,
      price: "3600",
      desc: "Inclusive Of Shipping Charges",
      btn: "BUY NOW",
    },
    {
      name: "Overseas Delivery",
      img: proPic,
      price: "100",
      desc: "Inclusive Of Shipping Charges",
      btn: "BUY NOW",
    },
  ];
  return (
    <div className={`our-products ${styles.ourProducts}`} id="buy-now">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up">
          Our Product
        </h2>
        <div className="row">
          {productsAll.map((pro) => (
            <Products
              key={Math.random() * 10}
              name={pro.name}
              img={pro.img}
              price={pro.price}
              desc={pro.desc}
              btn={pro.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
