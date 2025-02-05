import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "../../assets/assets/css/main.css"; // Adjust the path based on your folder structure
import './style.css';

const Welcome = () => {
  const galleryImages = [
    "assets/img/gallery/gallery-1.jpg",
    "assets/img/gallery/gallery-2.jpg",
    "assets/img/gallery/gallery-3.jpg",
    "assets/img/gallery/gallery-4.jpg",
    "assets/img/gallery/gallery-5.jpg",
    "assets/img/gallery/gallery-6.jpg",
    "assets/img/gallery/gallery-7.jpg",
    "assets/img/gallery/gallery-8.jpg",
  ];

  return (
    <>
      <div className="container-fluid">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">

          {/* <img src="src/assets/assets/img/hero-bg-2.jpg" alt="" className="hero-bg" /> */}
          <div className="container">

            <div className="row gy-4 justify-content-between">
              <div
                className="col-lg-4 order-lg-last hero-img"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img
                  src="src/assets/assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-in"
              >
                <h1>
                  Construis ton voyage avec <span>Voyage Connect</span>
                </h1>
                <p>Partagez vos moments de voyage avec nous</p>
                <div className="d-flex">
                  <Link to="/register">
                    <button className="btn-get-started">S'inscrire</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x="50" y="3"></use>
            </g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x="50" y="0"></use>
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x="50" y="9"></use>
            </g>
          </svg>
        </section>

        <section id="details" className="details section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Details</h2>
            <div>
              <span>Check Our</span> <span className="description-title">Details</span>
            </div>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <img src="assets/img/details-1.png" className="img-fluid" alt="Details" />
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <img
                  className="logo"
                  src="src/assets/Mes_images/Logo__VoyageConnect_The_travel_and_connect-removebg-preview.png"
                  alt="app logo"
                />
                <ul>
                  {detailsList.map((detail, index) => (
                    <li key={index}>
                      <i className="bi bi-check"></i> <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Features Item */}
          </div>
        </section>

        <section id="gallery" className="gallery section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <div>
              <span>Check Our</span> <span className="description-title">Gallery</span>
            </div>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-0">
              {galleryImages.map((image, index) => (
                <div className="col-lg-3 col-md-4" key={index}>
                  <div className="gallery-item">
                    <a href={image} className="glightbox" data-gallery="images-gallery">
                      <img src={image} alt="Gallery" className="img-fluid" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="home">
          {/* <h1 className='welcomeTo'>Welcome to VoyageConnect - Your Travel Agency</h1> */}
          <p className="explore">Explorez le monde avec nous !</p>
          <Link to="/register">
            <button className="btn btn-success">S'inscrire</button>
          </Link>
        </div>

        <footer id="footer" className="footer dark-background">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">VoyageConnect</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>Fes, Maroc 535022</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+212 589 55488</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>info@example.com</span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Voyage Planning</a></li>
                  <li><a href="#">Hotel Booking</a></li>
                  <li><a href="#">Flight Booking</a></li>
                  <li><a href="#">Car Rental</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12">
                {/* <h4>Our Newsletter</h4> */}
                {/* <!-- Grid container --> */}
                <div class="container p-4 pb-0">
                  {/* <!-- Section: Form -->   */}
                  <section class="">
                    <form action="">
                      {/* <!--Grid row--> */}
                      <div class="row d-flex justify-content-center">
                        {/* <!--Grid column--> */}
                        <div class="col-auto">
                          <p class="pt-2">
                            <strong>Sign up for our newsletter</strong>
                          </p>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-5 col-12">
                          {/* <!-- Email input --> */}
                          <div data-mdb-input-init class="form-outline mb-4">
                            <input type="email" id="form5Example26" class="form-control" />
                            <label class="form-label" for="form5Example26">Email address</label>
                          </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-auto">
                          {/* <!-- Submit button --> */}
                          <button data-mdb-ripple-init type="submit" className='btn-get-started' class="btn btn-success mb-4">
                            Subscribe
                          </button>
                        </div>
                        {/* <!--Grid column--> */}
                      </div>
                      {/* <!--Grid row--> */}
                    </form>
                  </section>
                  {/* <!-- Section: Form --> */}
                </div>
                {/* <!-- Grid container --> */}
              </div>

            </div>
          </div>

          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">voyageconnect</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              Designed by <a href="#">Stevy&Tresor</a>
            </div>
          </div>
        </footer>

        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        {/* <div id="preloader"></div> */}

        {/* Vendor JS Files */}
        <script src="src/assets/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="src/assets/assets/vendor/php-email-form/validate.js"></script>
        <script src="src/assets/assets/vendor/aos/aos.js"></script>
        <script src="src/assets/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="src/assets/assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="src/assets/assets/vendor/swiper/swiper-bundle.min.js"></script>

        {/* Main JS File */}
        <script src="src/assets/assets/js/main.js"></script>
      </div>
    </>
  );
};


const detailsList = [
  "Nous sommes fiers de vous offrir notre offre de voyages.",
  "Vous trouverez ici toutes les informations nécessaires pour vous organiser votre voyage.",
  "Nous avons une équipe de professionnels passionnés qui travaillent dur pour vous offrir des voyages exceptionnels.",
  "Nous sommes reconnus pour notre expertise et notre attention aux détails.",
  "Nous sommes là pour vous aider."

];


export default Welcome;
