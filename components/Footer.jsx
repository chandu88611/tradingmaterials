import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="tp-footer-area" data-bg-color="footer-bg-grey">
        <div className="tp-footer-top pt-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">
                      We are a team of designers and developers that create high
                      quality WordPress
                    </p>
                    <div className="tp-footer-social">
                      <Link href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link href="/">
                        <i className="fa-brands fa-vimeo-v"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">My Account</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/">Track Orders</Link>
                      </li>
                      <li>
                        <Link href="/">Shipping</Link>
                      </li>
                      <li>
                        <Link href="/">Wishlist</Link>
                      </li>
                      <li>
                        <Link href="/">My Account</Link>
                      </li>
                      <li>
                        <Link href="/">Order History</Link>
                      </li>
                      <li>
                        <Link href="/">Returns</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Infomation</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/">Our Story</Link>
                      </li>
                      <li>
                        <Link href="/">Careers</Link>
                      </li>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link href="/">Latest News</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Talk To Us</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-2"></div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start mb-3">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <i className="fas fa-mobile-alt"></i>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <Link href="tel:+91 - 9901234567">
                              +91 - 9901234567
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start mb-3">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <i className="fas fa-envelope-open-text"></i>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <Link href="mailto:shofy@support.com">
                              support@tmaterial.com
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <Link href="/" target="_blank">
                              79 Sleepy Hollow St. <br /> Jamaica, New York 1432
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-footer-copyright">
                    <p>© 2023 All Rights Reserved | Trading Material.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-footer-payment text-md-end">
                    <p>
                      <img src="/assets/img/footer/footer-pay.png" alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
