import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useSelector, useDispatch } from "react-redux";
import UpdateProfile from "@/components/profile/UpdateProfile";
import axios from "axios";
import ChangePassword from "@/components/profile/ChangePassword";

function profile() {
  const user = useSelector((state) => state.users.user);
  const [profileImage, setProfileImage] = useState("");

  const imageUpdate = async () => {
    const token = localStorage.getItem("tmToken");

    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/lead/update-profile-image",
        {
          profile_image: profileImage,
        },
        {
          headers: {
            "access-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      if (response.data.status) {
        window.location.reload();
      }
    } catch (error) {}
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      console.log(profileImage);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (profileImage) {
      imageUpdate();
    }
  });
  return (
    <Layout>
      <div className="row p-20 relative">
        <div className="col-xxl-4 col-lg-4">
          <div className="profile__tab mr-40">
            <nav>
              <div
                className="nav nav-tabs tp-tab-menu flex-column h-[70vh] "
                id="profile-tab"
                role="tablist"
                style={{ position: "relative", zIndex: -2 }}
              >
                <button
                  className="nav-link active py-4"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-regular fa-solid fa-gauge"></i>
                  </span>
                  Dashboard
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-information"
                  type="button"
                  role="tab"
                  aria-controls="nav-information"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-regular fa-user-pen"></i>
                  </span>
                  Profile Information
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-address-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-address"
                  type="button"
                  role="tab"
                  aria-controls="nav-address"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                  </span>
                  Saved Address
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-order-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-order"
                  type="button"
                  role="tab"
                  aria-controls="nav-order"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-light fa-clipboard-list-check"></i>
                  </span>
                  My Orders
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-cart-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-cart"
                  type="button"
                  role="tab"
                  aria-controls="nav-cart"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-light fa-cart-shopping"></i>
                  </span>
                  Cart
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-notification-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-notification"
                  type="button"
                  role="tab"
                  aria-controls="nav-notification"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-regular fa-timeline"></i>
                  </span>
                  Activity
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-product-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-product"
                  type="button"
                  role="tab"
                  aria-controls="nav-product"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-regular fa-cash-register"></i>
                  </span>
                  Product
                </button>
                <button
                  className="nav-link py-4"
                  id="nav-password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-password"
                  type="button"
                  role="tab"
                  aria-controls="nav-password"
                  aria-selected="false"
                >
                  <span>
                    <i className="fa-regular fa-lock"></i>
                  </span>
                  Change Password
                </button>

                <span
                  id="marker-vertical"
                  className="tp-tab-line d-none d-sm-inline-block"
                ></span>
              </div>
            </nav>
          </div>
        </div>

        <div
          className="col-xxl-8 col-lg-8 mt-2"
          style={{ position: "relative", zIndex: -2 }}
        >
          <div className="profile__tab-content">
            <div className="tab-content" id="profile-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="profile__main">
                  <div className="profile__main-top pb-20">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="profile__main-inner d-flex flex-wrap align-items-center">
                          <div className="profile__main-thumb">
                            <img src={user?.profile.profile_image} alt="" />
                            <div className="profile__main-thumb-edit">
                              <input
                                id="profile-thumb-input"
                                className="profile-img-popup"
                                type="file"
                                onChange={handleImageUpload}
                              />
                              <label for="profile-thumb-input">
                                <i className="fa-light fa-camera"></i>
                              </label>
                            </div>
                          </div>
                          <div className="profile__main-content">
                            <h4 className="profile__main-title">
                              Welcome Mr. {user?.first_name}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                  <div className="profile__main-info">
                    <div className="row gx-3">
                      <div className="col-md-3 col-sm-6">
                        <div className="profile__main-info-item">
                          <div className="profile__main-info-icon">
                            <span>
                              <span className="profile-icon-count profile-download">
                                2
                              </span>
                              <svg
                                enable-background="new 0 0 512 512"
                                viewBox="0 0 512 512"
                              >
                                <path d="m334.52 286.41c3.21 3.21 3.21 8.42 0 11.63l-71.73 71.73c-1.48 2.16-3.97 3.59-6.79 3.59-.03 0-.07 0-.1 0s-.07 0-.1 0c-2.11 0-4.21-.8-5.82-2.41l-72.5-72.5c-3.21-3.21-3.21-8.42 0-11.63s8.42-3.21 11.63 0l58.66 58.66v-198.62c0-4.54 3.68-8.23 8.23-8.23 4.54 0 8.23 3.68 8.23 8.23v198.21l58.66-58.66c3.21-3.21 8.42-3.21 11.63 0zm117.29-226.22c39.34 38.21 58.47 100.39 60.19 195.66v.3c-1.72 95.28-20.85 157.46-60.19 195.66-38.21 39.34-100.39 58.47-195.66 60.19-.05 0-.1 0-.15 0s-.1 0-.15 0c-95.28-1.72-157.46-20.85-195.66-60.19-39.34-38.21-58.47-100.38-60.19-195.66 0-.1 0-.2 0-.3 1.72-95.28 20.85-157.46 60.19-195.66 38.21-39.34 100.39-58.47 195.66-60.19h.3c95.27 1.72 157.45 20.85 195.66 60.19zm43.73 195.81c-1.65-90.63-19.22-149.13-55.28-184.09-.06-.06-.12-.12-.18-.18-34.95-36.06-93.45-53.62-184.08-55.27-90.63 1.65-149.13 19.22-184.09 55.28-.06.06-.12.12-.18.18-36.06 34.95-53.62 93.44-55.27 184.08 1.65 90.63 19.22 149.13 55.28 184.09l.18.18c34.95 36.06 93.45 53.62 184.09 55.28 90.63-1.65 149.13-19.22 184.09-55.28l.18-.18c36.04-34.96 53.61-93.45 55.26-184.09z" />
                              </svg>
                            </span>
                          </div>
                          <h4 className="profile__main-info-title">
                            Downloads
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="profile__main-info-item">
                          <div className="profile__main-info-icon">
                            <span>
                              <span className="profile-icon-count profile-order">
                                5
                              </span>
                              <svg viewBox="0 0 512 512">
                                <path d="M472.916,224H448.007a24.534,24.534,0,0,0-23.417-18H398V140.976a6.86,6.86,0,0,0-3.346-6.062L207.077,26.572a6.927,6.927,0,0,0-6.962,0L12.48,134.914A6.981,6.981,0,0,0,9,140.976V357.661a7,7,0,0,0,3.5,6.062L200.154,472.065a7,7,0,0,0,3.5.938,7.361,7.361,0,0,0,3.6-.938L306,415.108v41.174A29.642,29.642,0,0,0,335.891,486H472.916A29.807,29.807,0,0,0,503,456.282v-202.1A30.2,30.2,0,0,0,472.916,224Zm-48.077-4A10.161,10.161,0,0,1,435,230.161v.678A10.161,10.161,0,0,1,424.839,241H384.161A10.161,10.161,0,0,1,374,230.839v-.678A10.161,10.161,0,0,1,384.161,220ZM203.654,40.717l77.974,45.018L107.986,185.987,30.013,140.969ZM197,453.878,23,353.619V153.085L197,253.344Zm6.654-212.658-81.668-47.151L295.628,93.818,377.3,140.969ZM306,254.182V398.943l-95,54.935V253.344L384,153.085V206h.217A24.533,24.533,0,0,0,360.8,224H335.891A30.037,30.037,0,0,0,306,254.182Zm183,202.1A15.793,15.793,0,0,1,472.916,472H335.891A15.628,15.628,0,0,1,320,456.282v-202.1A16.022,16.022,0,0,1,335.891,238h25.182a23.944,23.944,0,0,0,23.144,17H424.59a23.942,23.942,0,0,0,23.143-17h25.183A16.186,16.186,0,0,1,489,254.182Z" />
                                <path d="M343.949,325h7.327a7,7,0,1,0,0-14H351V292h19.307a6.739,6.739,0,0,0,6.655,4.727A7.019,7.019,0,0,0,384,289.743v-4.71A7.093,7.093,0,0,0,376.924,278H343.949A6.985,6.985,0,0,0,337,285.033v32.975A6.95,6.95,0,0,0,343.949,325Z" />
                                <path d="M344,389h33a7,7,0,0,0,7-7V349a7,7,0,0,0-7-7H344a7,7,0,0,0-7,7v33A7,7,0,0,0,344,389Zm7-33h19v19H351Z" />
                                <path d="M351.277,439H351V420h18.929a7.037,7.037,0,0,0,14.071.014v-6.745A7.3,7.3,0,0,0,376.924,406H343.949A7.191,7.191,0,0,0,337,413.269v32.975A6.752,6.752,0,0,0,343.949,453h7.328a7,7,0,1,0,0-14Z" />
                                <path d="M393.041,286.592l-20.5,20.5-6.236-6.237a7,7,0,1,0-9.9,9.9l11.187,11.186a7,7,0,0,0,9.9,0l25.452-25.452a7,7,0,0,0-9.9-9.9Z" />
                                <path d="M393.041,415.841l-20.5,20.5-6.236-6.237a7,7,0,1,0-9.9,9.9l11.187,11.186a7,7,0,0,0,9.9,0l25.452-25.452a7,7,0,0,0-9.9-9.9Z" />
                                <path d="M464.857,295H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z" />
                                <path d="M464.857,359H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z" />
                                <path d="M464.857,423H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z" />
                              </svg>
                            </span>
                          </div>
                          <h4 className="profile__main-info-title">Orders</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="profile__main-info-item">
                          <div className="profile__main-info-icon">
                            <span>
                              <span className="profile-icon-count profile-wishlist">
                                10
                              </span>
                              <svg
                                viewBox="0 -20 480 480"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0" />
                              </svg>
                            </span>
                          </div>
                          <h4 className="profile__main-info-title">Wishlist</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="profile__main-info-item">
                          <div className="profile__main-info-icon">
                            <span>
                              <span className="profile-icon-count profile-wishlist">
                                07
                              </span>
                              <svg viewBox="0 0 512 512">
                                <path d="m352.742 291.476h-263.963l228.58-145.334a6 6 0 0 0 1.844-8.284l-22.647-35.618a36.285 36.285 0 0 0 -50.033-11.14l-32.165 20.451 2.548-12.191a34.314 34.314 0 1 0 -66.987-14.914l-16.71 75.054-55.951-12.454a34.315 34.315 0 0 0 -21 65.026l-34.458 21.91a36.285 36.285 0 0 0 -11.14 50.032l22.647 35.619a6 6 0 0 0 8.283 1.845l21.08-13.4v151.888a36.285 36.285 0 0 0 36.246 36.244h223.584a36.285 36.285 0 0 0 36.244-36.244v-162.49a6 6 0 0 0 -6.002-6zm-99.78-190.248a24.084 24.084 0 0 1 12.961-3.794 24.481 24.481 0 0 1 5.316.587 24.09 24.09 0 0 1 15.19 10.658l19.428 30.555-94.5 60.086-32.436-51.014zm-91.33-14.173a22.314 22.314 0 1 1 43.545 9.775l-4.926 23.564-53.667 34.249zm7.16 67.69 32.436 51.014-54.76 34.816-32.435-51.014zm-117.821 37.768a22.314 22.314 0 0 1 23.679-33.754l48.485 10.794-53.822 33.739-4.362-.972a22.168 22.168 0 0 1 -13.98-9.807zm-10.755 115.619-19.427-30.556a24.272 24.272 0 0 1 7.45-33.467l75.667-48.109 32.435 51.014zm116.353 176.078h-57.653a24.272 24.272 0 0 1 -24.244-24.244v-156.49h81.9zm76.264 0h-64.264v-180.734h64.264zm113.909-24.244a24.272 24.272 0 0 1 -24.242 24.244h-77.667v-180.734h101.909z" />
                                <path d="m419.833 236.971 2.87-16.735a6 6 0 0 0 -8.703-6.325l-15.028 7.9-15.029-7.9a6 6 0 0 0 -8.706 6.325l2.87 16.735-12.158 11.85a6 6 0 0 0 3.325 10.235l16.8 2.442 7.514 15.225a6 6 0 0 0 10.762 0l7.513-15.225 16.8-2.442a6 6 0 0 0 3.325-10.235zm-12.817 13.1a6 6 0 0 0 -4.518 3.282l-3.529 7.152-3.53-7.152a6 6 0 0 0 -4.517-3.282l-7.894-1.147 5.712-5.567a6 6 0 0 0 1.726-5.311l-1.349-7.862 7.06 3.711a5.994 5.994 0 0 0 5.584 0l7.059-3.711-1.348 7.862a6 6 0 0 0 1.725 5.311l5.712 5.567z" />
                                <path d="m488.841 154.3-16.5-4.01-6.051-15.863a6 6 0 0 0 -10.714-1.012l-8.911 14.453-16.957.853a6 6 0 0 0 -4.272 9.876l10.991 12.941-4.427 16.39a6 6 0 0 0 8.073 7.115l15.7-6.454 14.227 9.277a6 6 0 0 0 9.261-5.479l-1.285-16.93 13.213-10.657a6 6 0 0 0 -2.348-10.5zm-20.856 13.8a6 6 0 0 0 -2.216 5.125l.6 7.953-6.681-4.359a6 6 0 0 0 -5.559-.524l-7.376 3.032 2.08-7.7a6 6 0 0 0 -1.219-5.449l-5.163-6.079 7.966-.4a6 6 0 0 0 4.807-2.842l4.185-6.789 2.842 7.452a6 6 0 0 0 4.189 3.691l7.751 1.884z" />
                                <path d="m400.6 56.763-4.429 16.39a6 6 0 0 0 8.073 7.116l15.7-6.455 14.221 9.279a6 6 0 0 0 9.261-5.48l-1.285-16.93 13.216-10.658a6 6 0 0 0 -2.348-10.5l-16.5-4.009-6.05-15.864a6 6 0 0 0 -10.714-1.01l-8.91 14.452-16.958.852a6 6 0 0 0 -4.273 9.876zm13.991-11.844a6 6 0 0 0 4.806-2.843l4.186-6.789 2.842 7.452a6 6 0 0 0 4.189 3.692l7.75 1.883-6.208 5.006a6 6 0 0 0 -2.217 5.125l.6 7.954-6.681-4.359a6 6 0 0 0 -5.559-.524l-7.376 3.032 2.08-7.7a6 6 0 0 0 -1.219-5.45l-5.163-6.08z" />
                                <path d="m291.746 237.835c-13.546 8.525-20.164 18.855-20.439 19.291a6 6 0 0 0 10.134 6.427c.9-1.4 22.609-34.215 69.86-22.527a6 6 0 0 0 2.883-11.648c-29.072-7.193-50.001.628-62.438 8.457z" />
                                <path d="m405.6 174.293a6 6 0 0 0 4.6-11.084c-42.714-17.727-73.759-4.452-92.28 9.808a112.488 112.488 0 0 0 -29.868 35.246 6 6 0 1 0 10.748 5.337 101.191 101.191 0 0 1 26.44-31.075c23.288-17.925 50.325-20.697 80.36-8.232z" />
                                <path d="m338.178 129.844a6 6 0 0 0 3.862 7.555 90.163 90.163 0 0 0 25.438 3.676c10.034 0 21.623-1.811 32.015-7.971 13.6-8.058 22.32-21.787 25.934-40.8a6 6 0 1 0 -11.789-2.24c-2.938 15.461-9.738 26.46-20.211 32.69-19.921 11.853-47.267 3.367-47.7 3.229a6 6 0 0 0 -7.549 3.861z" />
                                <path d="m258.867 284.873a10.806 10.806 0 1 0 -10.805-10.806 10.819 10.819 0 0 0 10.805 10.806zm0-12a1.195 1.195 0 1 1 -1.194 1.194 1.2 1.2 0 0 1 1.194-1.194z" />
                                <path d="m343.887 88.873a10.806 10.806 0 1 0 -10.806-10.806 10.818 10.818 0 0 0 10.806 10.806zm0-12a1.195 1.195 0 1 1 -1.195 1.194 1.2 1.2 0 0 1 1.195-1.194z" />
                                <path d="m496.194 80.633a10.806 10.806 0 1 0 10.806 10.805 10.817 10.817 0 0 0 -10.806-10.805zm0 12a1.195 1.195 0 1 1 1.195-1.195 1.2 1.2 0 0 1 -1.195 1.195z" />
                                <path d="m254.444 224.027a10.806 10.806 0 1 0 -10.8 10.806 10.817 10.817 0 0 0 10.8-10.806zm-10.8 1.2a1.195 1.195 0 1 1 1.194-1.2 1.2 1.2 0 0 1 -1.199 1.195z" />
                                <path d="m478.4 230.812a10.806 10.806 0 1 0 10.806 10.806 10.818 10.818 0 0 0 -10.806-10.806zm0 12a1.194 1.194 0 1 1 1.195-1.194 1.2 1.2 0 0 1 -1.195 1.194z" />
                              </svg>
                            </span>
                          </div>
                          <h4 className="profile__main-info-title">Gift Box</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-information"
                role="tabpanel"
                aria-labelledby="nav-information-tab"
              >
                <div className="profile__info">
                  <h3 className="profile__notification-title">
                    Personal Details
                  </h3>
                  <div className="profile__info-content">
                    <UpdateProfile />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-password"
                role="tabpanel"
                aria-labelledby="nav-password-tab"
              >
                <div className="profile__notification-top mb-30">
                  <h3 className="profile__notification-title">
                    Change Password
                  </h3>
                </div>
                <div className="profile__password">
                  <ChangePassword />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-address"
                role="tabpanel"
                aria-labelledby="nav-address-tab"
              >
                <div className="profile__address">
                  <div className="row">
                    <div className="col-lg-12 pt-10 pb-10">
                      <button className="address-btn">
                        <i className="fa-solid fa-plus"></i> Add Address
                      </button>
                    </div>
                    <div className="col-md-6">
                      <div className="profile__address-item d-sm-flex align-items-start">
                        <div className="profile__address-icon">
                          <span>
                            <svg
                              enable-background="new 0 0 32 32"
                              viewBox="0 0 32 32"
                            >
                              <g>
                                <path d="m31.494 23.128-.959-.844v-3.708c0-1.315-1.067-2.382-2.382-2.382-1.144 0-2.126.813-2.34 1.937l-.821-.721c-.954-.835-2.378-.835-3.332 0l-6.5 5.717c-.307.276-.332.748-.057 1.055.262.292.704.331 1.014.091v5.326c.001 1.187.963 2.149 2.15 2.15h10.119c1.187-.001 2.148-.963 2.149-2.15v-5.326c.323.257.793.204 1.05-.119.248-.311.208-.763-.091-1.026zm-4.227-4.552c-.016-.488.366-.897.854-.913s.897.366.913.854c.001.02.001.04 0 .059v2.389l-1.767-1.554zm-2.625 11.671h-2.5v-1.748c.001-.613.497-1.109 1.11-1.11h.285c.613.001 1.109.497 1.11 1.11zm4.393-.648c0 .171-.068.336-.189.457h-.004c-.122.123-.287.191-.46.191h-2.24v-1.748c-.002-1.441-1.169-2.608-2.61-2.61h-.285c-1.441.002-2.608 1.169-2.61 2.61v1.746h-2.373c-.359-.001-.649-.291-.65-.65v-6.63l5.035-4.428c.387-.339.965-.339 1.352 0l5.034 4.426z" />
                                <path d="m21.106 22.318c0 1.226.993 2.219 2.219 2.219s2.219-.994 2.219-2.219v-.001c-.002-1.225-.994-2.217-2.219-2.218-1.226 0-2.219.993-2.219 2.219zm2.938-.001c-.002.396-.323.716-.719.717v.002c-.397 0-.719-.322-.719-.719s.322-.719.719-.719.719.322.719.719z" />
                                <path d="m23.001 10.145c0-.414-.336-.75-.75-.75h-15.462c-.414 0-.75.336-.75.75s.336.75.75.75h15.463c.414-.001.749-.336.749-.75z" />
                                <path d="m6.789 14.216c-.414 0-.75.336-.75.75s.336.75.75.75h10.572c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                                <path d="m12.075 19.039h-5.286c-.414 0-.75.336-.75.75s.336.75.75.75h5.286c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                                <path d="m11.556 30.247h-9.03c-.427-.001-.772-.346-.773-.773v-25.653c.001-.27.142-.52.372-.661l2.11-1.283c.268-.164.609-.148.862.039l1.404 1.037c.749.558 1.764.598 2.554.1l1.9-1.183c.26-.163.593-.156.846.018l1.629 1.111c.766.527 1.776.532 2.547.013l1.692-1.133c.255-.171.587-.175.846-.009l1.836 1.171c.783.504 1.796.476 2.55-.072l1.425-1.027c.265-.191.622-.195.891-.01l1.736 1.2c.21.144.335.382.335.637v8.089c0 .414.336.75.75.75s.75-.336.75-.75v-8.093c-.001-.748-.37-1.449-.987-1.872l-1.733-1.194c-.792-.544-1.839-.532-2.619.028l-1.425 1.025c-.256.186-.6.196-.867.025l-1.836-1.17c-.761-.485-1.736-.474-2.486.028l-1.692 1.133c-.262.177-.606.177-.868 0l-1.63-1.119c-.746-.509-1.722-.529-2.488-.05l-1.896 1.181c-.269.169-.614.155-.868-.034l-1.406-1.037c-.742-.55-1.744-.593-2.531-.11l-2.11 1.279c-.677.414-1.09 1.15-1.093 1.943v25.653c.001 1.255 1.018 2.272 2.273 2.273h9.03c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="profile__address-content">
                          <h3 className="profile__address-title">
                            Billing Address
                          </h3>
                          <p>
                            <span>Street:</span>3576 Glen Street
                          </p>
                          <p>
                            <span>City:</span>Summer Shade
                          </p>
                          <p>
                            <span>State/province/area:</span>Kentucky
                          </p>
                          <p>
                            <span>Phone number:</span>270-428-8378
                          </p>
                          <p>
                            <span>Zip code:</span>42166
                          </p>
                          <p>
                            <span>Country calling code:</span> +1
                          </p>
                          <p>
                            <span>Country:</span>United States
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile__address-item d-sm-flex align-items-start">
                        <div className="profile__address-icon">
                          <span>
                            <svg viewBox="0 0 64 64">
                              <g id="ad">
                                <g>
                                  <path d="m50 49c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z" />
                                  <path d="m13 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1z" />
                                  <path d="m62 47.278v-8.653c0-.612-.184-1.203-.533-1.708l-7.452-10.763c-.933-1.349-2.47-2.154-4.111-2.154h-7.61l1.742-3.049c1.285-1.731 1.963-3.788 1.963-5.951 0-5.514-4.486-10-10-10-1.791 0-3.547.479-5.081 1.385-.476.281-.633.895-.352 1.37s.893.632 1.37.353c1.225-.725 2.63-1.107 4.063-1.107 4.411 0 8 3.589 8 8 0 1.748-.554 3.408-1.601 4.802-.025.033-.048.068-.069.104l-6.331 11.078-6.33-11.077c-.021-.036-.044-.071-.069-.104-1.047-1.394-1.601-3.055-1.601-4.803 0-1.897.676-3.736 1.902-5.179.358-.42.307-1.052-.114-1.409-.421-.358-1.052-.308-1.41.114-1.534 1.803-2.379 4.103-2.379 6.474 0 1.781.467 3.486 1.346 5h-23.343c-1.654 0-3 1.346-3 3v27c0 1.654 1.346 3 3 3h2.08c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h9.223c.552 0 1-.447 1-1s-.448-1-1-1h-9.223c-.488-3.386-3.401-6-6.92-6s-6.432 2.614-6.92 6h-2.08c-.551 0-1-.448-1-1v-9h26c.552 0 1-.447 1-1s-.448-1-1-1h-26v-16.001c0-.552.449-1 1-1h24.563l6.569 11.496c.178.312.509.504.868.504s.69-.192.868-.504l1.132-1.981v7.485h-5c-.552 0-1 .447-1 1s.448 1 1 1h5v10h-5.5c-.552 0-1 .447-1 1s.448 1 1 1h10.58c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h4.08c1.103 0 2-.897 2-2v-2c0-.737-.405-1.375-1-1.722zm-49-.278c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm46.784-9h-15.784v-8h10.245zm-18.632-12h8.753c.984 0 1.906.483 2.466 1.293l.49.707h-8.86c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h16v7h-5.111c-1.263-1.235-2.988-2-4.889-2s-3.627.765-4.889 2h-5.111v-18.985l1.152-2.015zm-1.152 23h3.685c-.297.622-.503 1.294-.605 2h-3.08zm10 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm11-6h-4.08c-.102-.706-.308-1.378-.605-2h4.685z" />
                                  <path d="m36 21c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
                                  <path d="m43 43h4c.552 0 1-.447 1-1s-.448-1-1-1h-4c-.552 0-1 .447-1 1s.448 1 1 1z" />
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="profile__address-content">
                          <h3 className="profile__address-title">
                            Shipping Address
                          </h3>
                          <p>
                            <span>Street:</span>3133 Lewis Street
                          </p>
                          <p>
                            <span>City:</span>Naperville
                          </p>
                          <p>
                            <span>State/province/area:</span>Illinois
                          </p>
                          <p>
                            <span>Phone number:</span>630-857-9127
                          </p>
                          <p>
                            <span>Zip code:</span> 60563
                          </p>
                          <p>
                            <span>Country calling code:</span>+1
                          </p>
                          <p>
                            <span>Country:</span>United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-order"
                role="tabpanel"
                aria-labelledby="nav-order-tab"
              >
                <div className="profile__notification-top mb-30">
                  <h3 className="profile__notification-title">My Orders</h3>
                </div>
                <div className="tp-product-details-tab-nav tp-tab">
                  <nav>
                    <div
                      className="nav nav-tabs p-relative tp-product-tab"
                      id="navPresentationTab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="recent-orders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#recent-orders"
                        type="button"
                        role="tab"
                        aria-controls="recent-orders"
                        aria-selected="true"
                      >
                        <i className="fa-solid fa-calendar-days"></i> Recent
                      </button>
                      <button
                        className="nav-link"
                        id="completed-orders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#completed-orders"
                        type="button"
                        role="tab"
                        aria-controls="completed-orders"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-thumbs-up"></i> Completed
                      </button>
                      <button
                        className="nav-link"
                        id="cancelled-orders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#cancelled-orders"
                        type="button"
                        role="tab"
                        aria-controls="cancelled-orders"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancelled
                      </button>
                      <button
                        className="nav-link"
                        id="refund-orders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#refund-orders"
                        type="button"
                        role="tab"
                        aria-controls="refund-orders"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        Refund
                      </button>
                      <span
                        id="productTabMarker"
                        className="tp-product-details-tab-line"
                      ></span>
                    </div>
                  </nav>
                  <div className="tab-content" id="navPresentationTabContent">
                    <div
                      className="tab-pane fade"
                      id="recent-orders"
                      role="tabpanel"
                      aria-labelledby="recent-orders-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="completed-orders"
                      role="tabpanel"
                      aria-labelledby="completed-orders-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="cancelled-orders"
                      role="tabpanel"
                      aria-labelledby="cancelled-orders-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="refund-orders"
                      role="tabpanel"
                      aria-labelledby="refund-orders-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-cart"
                role="tabpanel"
                aria-labelledby="nav-cart-tab"
              >
                <div className="profile__notification-top mb-30">
                  <h3 className="profile__notification-title">My Cart</h3>
                </div>
                <div className="tp-product-details-tab-nav tp-tab">
                  <nav>
                    <div
                      className="nav nav-tabs p-relative tp-product-tab"
                      id="navPresentationTab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="current-items-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#current-items"
                        type="button"
                        role="tab"
                        aria-controls="current-items"
                        aria-selected="true"
                      >
                        <i className="fa-solid fa-cart-shopping"></i> Current
                        Items
                      </button>
                      <button
                        className="nav-link"
                        id="removed-items-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#removed-items"
                        type="button"
                        role="tab"
                        aria-controls="removed-items"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-cart-arrow-down"></i> Removed
                        Items
                      </button>
                      <button
                        className="nav-link"
                        id="wishlist-items-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#wishlist-items"
                        type="button"
                        role="tab"
                        aria-controls="wishlist-items"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-heart"></i> Wishlist
                      </button>
                      <span
                        id="productTabMarker"
                        className="tp-product-details-tab-line"
                      ></span>
                    </div>
                  </nav>
                  <div className="tab-content" id="navPresentationTabContent">
                    <div
                      className="tab-pane fade"
                      id="current-items"
                      role="tabpanel"
                      aria-labelledby="current-items-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="removed-items"
                      role="tabpanel"
                      aria-labelledby="removed-items-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="wishlist-items"
                      role="tabpanel"
                      aria-labelledby="wishlist-items-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="refund-orders"
                      role="tabpanel"
                      aria-labelledby="refund-orders-tab"
                      tabindex="0"
                    >
                      <div className="tp-product-details-review-wrapper pt-60">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__ticket table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"> #2245</th>
                                    <td data-info="title">How can i share ?</td>
                                    <td data-info="status pending">Pending </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2220</th>
                                    <td data-info="title">
                                      Send money, but not working
                                    </td>
                                    <td data-info="status reply">
                                      Need your replay
                                    </td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Reply
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2125</th>
                                    <td data-info="title">Balance error</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2124</th>
                                    <td data-info="title">
                                      How to decline bid
                                    </td>
                                    <td data-info="status hold">On Hold</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Status
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row"> #2121</th>
                                    <td data-info="title">How to contact</td>
                                    <td data-info="status done">Resolved</td>
                                    <td>
                                      <a href="#" className="tp-logout-btn">
                                        Invoice
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-notification"
                role="tabpanel"
                aria-labelledby="nav-notification-tab"
              >
                <div className="profile__notification-top mb-30">
                  <h3 className="profile__notification-title">Activity Log</h3>
                </div>
                <div className="profile__notification">
                  <div className="timeline">
                    <div id="overlay"></div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                    <div className="event">
                      <div className="event__date">12th June, 2023</div>
                      <div className="event__timeline">
                        <div className="event__dot"></div>
                        <div className="event__line"></div>
                      </div>
                      <div className="event__description">
                        <a className="event__link" href="#">
                          Event Title1
                        </a>
                        Event Description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-product"
                role="tabpanel"
                aria-labelledby="nav-product-tab"
              >
                <div className="profile__notification-top mb-30">
                  <h3 className="profile__notification-title">Products</h3>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-15">
                    <div className="tp-product-list-item d-md-flex">
                      <div className="tp-product-list-thumb p-relative fix">
                        <a href="#">
                          <img
                            src="assets/img/product/list/product-list-1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-product-list-content">
                        <div className="pt-15">
                          <div className="tp-product-tag-2">
                            <a href="#">Shirt, </a>
                            <a href="#">Branded</a>
                          </div>
                          <h3 className="tp-product-title-2">
                            <a href="product-details.html">
                              Simple Modern School Boys
                            </a>
                          </h3>
                          <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <div className="tp-product-price-wrapper-2">
                            <span className="tp-product-price-2 new-price">
                              $82.00
                            </span>
                            <span className="tp-product-price-2 old-price">
                              $99.00
                            </span>
                          </div>
                          <p>
                            Auctor urna nunc id cursus. Scelerisque purus semper
                            eget duis at pharetra vel turpis nunc eget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-15">
                    <div className="tp-product-list-item d-md-flex">
                      <div className="tp-product-list-thumb p-relative fix">
                        <a href="#">
                          <img
                            src="assets/img/product/list/product-list-1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-product-list-content">
                        <div className="pt-15">
                          <div className="tp-product-tag-2">
                            <a href="#">Shirt, </a>
                            <a href="#">Branded</a>
                          </div>
                          <h3 className="tp-product-title-2">
                            <a href="product-details.html">
                              Simple Modern School Boys
                            </a>
                          </h3>
                          <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <div className="tp-product-price-wrapper-2">
                            <span className="tp-product-price-2 new-price">
                              $82.00
                            </span>
                            <span className="tp-product-price-2 old-price">
                              $99.00
                            </span>
                          </div>
                          <p>
                            Auctor urna nunc id cursus. Scelerisque purus semper
                            eget duis at pharetra vel turpis nunc eget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-15">
                    <div className="tp-product-list-item d-md-flex">
                      <div className="tp-product-list-thumb p-relative fix">
                        <a href="#">
                          <img
                            src="assets/img/product/list/product-list-1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-product-list-content">
                        <div className="pt-15">
                          <div className="tp-product-tag-2">
                            <a href="#">Shirt, </a>
                            <a href="#">Branded</a>
                          </div>
                          <h3 className="tp-product-title-2">
                            <a href="product-details.html">
                              Simple Modern School Boys
                            </a>
                          </h3>
                          <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <div className="tp-product-price-wrapper-2">
                            <span className="tp-product-price-2 new-price">
                              $82.00
                            </span>
                            <span className="tp-product-price-2 old-price">
                              $99.00
                            </span>
                          </div>
                          <p>
                            Auctor urna nunc id cursus. Scelerisque purus semper
                            eget duis at pharetra vel turpis nunc eget.
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
      </div>
    </Layout>
  );
}

export default profile;
