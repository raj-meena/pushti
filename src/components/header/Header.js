import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-black" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#home" title="Pushti Vardhnam">
            <Image
              src="images/pushti-vardhnam.svg"
              alt="Pushti Vardhnam"
              title="Pushti Vardhnam"
              width="147"
              height="39"
              priority={false}
              placeholder="empty"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#home"
                  title="Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us" title="About Us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-product" title="Our Product">
                  Our Product
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#testimonials"
                  title="Testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us" title="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a
                className="btn btn-success text-uppercase d-flex align-items-center"
                href="#buy-now"
                title="Buy Now"
              >
                Buy Now
                <Image
                  src="images/cart.svg"
                  alt="Buy Now"
                  title="Buy Now"
                  width={44}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
