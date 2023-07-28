import Layout from "@/components/Layout";
import React from "react";

function payment_success() {
  return (
    <Layout>
      <section className="profile__area pt-25 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1 pb-20 d-flex align-items-center justify-content-between">
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span>Payment Success</span>
                </div>
                <div className="profile__main-logout text-sm-end">
                  <a href="login.html" className="tp-logout-btn">
                    <i className="fa-solid fa-house-chimney"></i> Home
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__inner p-relative">
            <div className="profile__shape">
              <img
                className="profile__shape-1"
                src="assets/img/login/laptop.png"
                alt=""
              />
              <img
                className="profile__shape-2"
                src="assets/img/login/man.png"
                alt=""
              />
              <img
                className="profile__shape-3"
                src="assets/img/login/shape-1.png"
                alt=""
              />
              <img
                className="profile__shape-4"
                src="assets/img/login/shape-2.png"
                alt=""
              />
              <img
                className="profile__shape-5"
                src="assets/img/login/shape-3.png"
                alt=""
              />
              <img
                className="profile__shape-6"
                src="assets/img/login/shape-4.png"
                alt=""
              />
            </div>
            <div className="row main-row">
              <div className="col-lg-6">
                <div className="profile__main shadow h-100">
                  <div className="profile__main-top p-20">
                    <div className="">
                      <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 border-right">
                          <div className="profile__address-item">
                            <div className="profile__address-content">
                              <h3 className="profile__address-title text-info">
                                Contact Info
                              </h3>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Name</span>
                                </p>
                                <p className="mb-0">Customer Name</p>
                              </div>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Email</span>
                                </p>
                                <p className="mb-0">Customer@mail.com</p>
                              </div>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Phone</span>
                                </p>
                                <p className="mb-0">9525958545</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile__address-item mt-20">
                            <div className="profile__address-content">
                              <h3 className="profile__address-title text-info">
                                Order Info
                              </h3>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Order ID</span>
                                </p>
                                <p className="mb-0">PROD5202</p>
                              </div>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Order Date</span>
                                </p>
                                <p className="mb-0">10th June, 2023</p>
                              </div>
                              <div className=" border-bottom-light p-1">
                                <p className="mb-0">
                                  <span>Estimated Delivery</span>
                                </p>
                                <p className="mb-0 text-primary">
                                  15th June, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                          <div className="profile__address-item">
                            <div className="profile__address-content">
                              <h3 className="profile__address-title text-info">
                                Shipping Address
                              </h3>
                              <div className="row">
                                <div className="col-12 col-lg-12 border-bottom-light p-1">
                                  <p className="mb-0">
                                    <span>Address Line 1</span>
                                  </p>
                                  <p className="mb-0">
                                    3rd F Cross, 401, level-4 ragavs building
                                  </p>
                                </div>
                                <div className="col-12 col-lg-12 border-bottom-light p-1">
                                  <p className="mb-0">
                                    <span>Address Line 2</span>
                                  </p>
                                  <p className="mb-0">Ramamurthy nagar</p>
                                </div>
                                <div className="col-12 col-lg-6 border-bottom-light border-right-light p-1">
                                  <p className="mb-0">
                                    <span>City</span>
                                  </p>
                                  <p className="mb-0">Bengaluru</p>
                                </div>
                                <div className="col-12 col-lg-6 border-bottom-light p-1">
                                  <p className="mb-0">
                                    <span>State</span>
                                  </p>
                                  <p className="mb-0">Karnataka</p>
                                </div>
                                <div className="col-12 col-lg-6 border-bottom-light border-right-light p-1">
                                  <p className="mb-0">
                                    <span>Country</span>
                                  </p>
                                  <p className="mb-0">India</p>
                                </div>
                                <div className="col-12 col-lg-6 border-bottom-light p-1">
                                  <p className="mb-0">
                                    <span>Zip code</span>
                                  </p>
                                  <p className="mb-0">560016</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="profile__main shadow h-100">
                  <div className="profile__main-top p-20">
                    <div className="text-center">
                      <h4 className="text-info">Payment Successful</h4>
                      <img
                        src="https://www.asiaticpack.com/wp-content/uploads/2022/12/box-animation.gif"
                        width="175px"
                      />
                    </div>
                    <div className="">
                      <p
                        className="text-center text-info mb-5"
                        style={{ lineHeight: 1.25 }}
                      >
                        <b>Successful!</b>
                        <br /> We have received your advance payment, we are
                        packing your order to be shipped to your doorstep.
                      </p>
                      <div className="row">
                        <div className="col-12 col-lg-6 border-bottom-light border-right-light">
                          <p className="detail-title mb-0">Transaction ID : </p>
                          <p className="detail-desc mb-0">TXN87HRTH54RE4G46</p>
                        </div>
                        <div className="col-12 col-lg-6 border-bottom-light">
                          <p className="detail-title mb-0">Order ID : </p>
                          <p className="detail-desc mb-0">PROD5202</p>
                        </div>
                        <div className="col-12 col-lg-6 border-bottom-light border-right-light">
                          <p className="detail-title mb-0">Order Date : </p>
                          <p className="detail-desc mb-0">10th June, 2023</p>
                        </div>
                        <div className="col-12 col-lg-6 border-bottom-light">
                          <p className="detail-title mb-0">Product Name : </p>
                          <p className="detail-desc mb-0">
                            Trading Material Mouse Pad
                          </p>
                        </div>
                        <div className="col-12 col-lg-6 border-bottom-light border-right-light">
                          <p className="detail-title mb-0">Advance Paid : </p>
                          <p className="detail-desc mb-0">₹5,500</p>
                        </div>
                        <div className="col-12 col-lg-6 border-bottom-light">
                          <p className="detail-title mb-0">
                            <b>Balance : </b>
                          </p>
                          <p className="detail-desc mb-0">
                            <b>₹10,500</b>
                          </p>
                        </div>
                      </div>

                      <p className="text-center text-orange mb-0 mt-15">
                        <b>Note : </b> Balance amount to be paid once you
                        recieve the product as COD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default payment_success;
