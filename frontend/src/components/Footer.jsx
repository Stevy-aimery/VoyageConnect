import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "../assets/assets/css/main.css"; // Adjust the path based on your folder structure
import './Welcome/style.css';
import './footer.css';



const Footer = () => {
    return (
      <footer id="footer" className="footer dark-background container-fluid">
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
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
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
              <div className="container p-4 pb-0">
                <section>
                  <form action="">
                    <div className="row d-flex justify-content-center">
                      <div className="col-auto">
                        <p className="pt-2">
                          <strong>Sign up for our newsletter</strong>
                        </p>
                      </div>
  
                      <div className="col-md-5 col-12">
                        <div className="form-outline mb-4">
                          <input type="email" id="form5Example26" className="form-control" />
                          <label className="form-label" htmlFor="form5Example26">Email address</label>
                        </div>
                      </div>
  
                      <div className="col-auto">
                        <button type="submit" className="btn btn-success mb-4">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
  
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">VoyageConnect</strong> <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a href="#">Stevy&Tresor</a>
          </div>
        </div>
  
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </footer>
    );
  };
  
  export default Footer;