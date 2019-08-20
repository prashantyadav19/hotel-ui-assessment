import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const Gallery = ({
  isOpen,
  activeSrc,
  nextSrc,
  prevSrc,
  onCloseRequest,
  onMovePrevRequest,
  onMoveNextRequest
}) => (
  <div>
    {isOpen && (
      <Lightbox
        mainSrc={activeSrc}
        nextSrc={nextSrc}
        prevSrc={prevSrc}
        onCloseRequest={onCloseRequest}
        onMovePrevRequest={onMovePrevRequest}
        onMoveNextRequest={onMoveNextRequest}
      />
    )}
  </div>
);

export const Aminities = ({ name }) => (
  <div className="aminities-checkbox">
    <label className="container">
      {name}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  </div>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            As the most recognized name in the industry, travelers all over the
            world have been saying “Take me to the Hilton” for almost a century.
            And because of our innovative approach to products, amenities and
            service, Hilton continues to be synonymous with hotel across the
            globe. Hilton Hotels & Resorts remains the stylish, forward thinking
            global leader of hospitality – and we help make traveling easier
            with our smart design, innovative restaurant concepts, authentic
            hospitality and commitment to the global community.
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Cities</h6>
          <ul className="footer-links">
            <li>
              <a href="#">New York</a>
            </li>
            <li>
              <a href="#">Los Angeles</a>
            </li>
            <li>
              <a href="#">Chicago</a>
            </li>
            <li>
              <a href="#">Houston</a>
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="#"> Hilton.com</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
