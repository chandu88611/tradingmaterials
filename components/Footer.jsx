import React from 'react'

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
                            <a href="index.html">
                            <img src="/assets/img/logo/logo.png" alt="logo"/>
                            </a>
                         </div>
                         <p className="tp-footer-desc">We are a team of designers and developers that create high quality WordPress</p>
                         <div className="tp-footer-social">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                   <div className="tp-footer-widget footer-col-2 mb-50">
                      <h4 className="tp-footer-widget-title">My Account</h4>
                      <div className="tp-footer-widget-content">
                         <ul>
                            <li><a href="#">Track Orders</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                   <div className="tp-footer-widget footer-col-3 mb-50">
                      <h4 className="tp-footer-widget-title">Infomation</h4>
                      <div className="tp-footer-widget-content">
                         <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Contact Us</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                   <div className="tp-footer-widget footer-col-4 mb-50">
                      <h4 className="tp-footer-widget-title">Talk To Us</h4>
                      <div className="tp-footer-widget-content">
                         <div className="tp-footer-talk mb-2">
                     
                         </div>
                         <div className="tp-footer-contact">
                            <div className="tp-footer-contact-item d-flex align-items-start mb-3">
                               <div className="tp-footer-contact-icon">
                                  <span>
                                     <i className="fas fa-mobile-alt"></i>
                                  </span>
                               </div>
                               <div className="tp-footer-contact-content">
                                  <p><a href="tel:+91 - 9901234567">+91 - 9901234567</a></p>
                               </div>
                            </div>
                            <div className="tp-footer-contact-item d-flex align-items-start mb-3">
                               <div className="tp-footer-contact-icon">
                                  <span>
                                     <i className="fas fa-envelope-open-text"></i>
                                  </span>
                               </div>
                               <div className="tp-footer-contact-content">
                                  <p><a href="mailto:shofy@support.com">support@tmaterial.com</a></p>
                               </div>
                            </div>
                            <div className="tp-footer-contact-item d-flex align-items-start">
                               <div className="tp-footer-contact-icon">
                                  <span>
                                     <i className="fas fa-map-marker-alt"></i>
                                  </span>
                               </div>
                               <div className="tp-footer-contact-content">
                                  <p><a href="#" target="_blank">79 Sleepy Hollow St. <br/> Jamaica, New York 1432</a></p>
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
                         <p>© 2023 All Rights Reserved  |  Trading Material.</p>
                      </div>
                   </div>
                   <div className="col-md-6">
                      <div className="tp-footer-payment text-md-end">
                         <p>
                            <img src="/assets/img/footer/footer-pay.png" alt=""/>
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>
  )
}

export default Footer