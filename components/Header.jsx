import Link from "next/link";
import React, { useEffect, useState } from "react";
// FaUserCircle

import { useRouter } from "next/router";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import SignInPage from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { setPopUp } from "@/store/popUpSlice";
import { setAlert } from "@/store/alertSlice";
import UserMenu from "./UserMenu";
import Wishlist_modal from "./Wishlist_modal";
import { addImage } from "@/store/cartSlice";
function Header() {
  const cartItems = useSelector((state) => state.cart);
  const [wish1, setWish] = useState(false);
  const users = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [cartglow, setCartglow] = useState(false);

  const popup = useSelector((state) => state.popup);
  console.log(popup);
  const router = useRouter();
  const checkUser = (wish) => {
    if (!users?.id) {
      dispatch(setPopUp(!popup));
    }
    if (users?.id && wish === "cart" && users?.cart.length > 0) {
      router.push("/products/cart");
    }
    if (users?.id && wish === "wish" && users?.wishlist.length > 0) {
      setWish(!wish1);
    }
    if (users?.id && wish === "cart" && users?.cart.length < 1) {
      dispatch(
        setAlert({ message: "Add Something to your cart", color: "blue" })
      );
      setTimeout(() => {
        dispatch(setAlert({ message: "", color: "blue" }));
      }, 1500);
    }
    if (users?.id && wish === "wish" && users?.wishlist.length < 1) {
      dispatch(
        setAlert({ message: "Add Something to your wishlist", color: "blue" })
      );
      setTimeout(() => {
        dispatch(setAlert({ message: "", color: "blue" }));
      }, 1500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(addImage({ img1: "" }));
    }, 4000);
  }, [cartItems]);

  return (
    <div>
      <div className="offcanvas__area offcanvas__radius">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button className="offcanvas__close-btn offcanvas-close-btn flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <a href="index.html">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="offcanvas__category pb-40">
              <button className="tp-offcanvas-category-toggle">
                <i className="fa-solid fa-bars"></i>
                All Categories
              </button>
              <div className="tp-category-mobile-menu"></div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-40"></div>
            <div className="offcanvas__contact align-items-center d-none">
              <div className="offcanvas__contact-icon mr-20">
                <span>
                  <img src="/assets/img/icon/contact.png" alt="" />
                </span>
              </div>
              <div className="offcanvas__contact-content">
                <h3 className="offcanvas__contact-title">
                  <a href="#">004524865</a>
                </h3>
              </div>
            </div>
            <div className="offcanvas__btn">
              <a href="#" className="tp-btn-2 tp-btn-border-2">
                Contact Us
              </a>
            </div>
          </div>
          <div className="offcanvas__bottom">
            <div className="offcanvas__footer d-flex align-items-center justify-content-between">
              <div className="offcanvas__currency-wrapper currency">
                <span
                  className="offcanvas__currency-selected-currency tp-currency-toggle"
                  id="tp-offcanvas-currency-toggle"
                >
                  Currency : USD
                </span>
                <ul className="offcanvas__currency-list tp-currency-list">
                  <li>USD</li>
                  <li>ERU</li>
                  <li>BDT </li>
                  <li>INR</li>
                </ul>
              </div>
              <div className="offcanvas__select language">
                <div className="offcanvas__lang d-flex align-items-center justify-content-md-end">
                  <div className="offcanvas__lang-img mr-15">
                    <img src="/assets/img/icon/language-flag.png" alt="" />
                  </div>
                  <div className="offcanvas__lang-wrapper">
                    <span
                      className="offcanvas__lang-selected-lang tp-lang-toggle"
                      id="tp-offcanvas-lang-toggle"
                    >
                      English
                    </span>
                    <ul className="offcanvas__lang-list tp-lang-list">
                      <li>Spanish</li>
                      <li>Portugese</li>
                      <li>American</li>
                      <li>Canada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
        <div className="container">
          <div className="row row-cols-5">
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link href="" className="tp-mobile-item-btn">
                  <i className="flaticon-store"></i>
                  <span>Store</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-search-open-btn">
                  <i className="flaticon-search-1"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link href="#" className="tp-mobile-item-btn">
                  <i className="flaticon-love"></i>
                  <span>Wishlist</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link href="/profile" className="tp-mobile-item-btn">
                  <i className="flaticon-user"></i>
                  <span>Account</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-offcanvas-open-btn">
                  <i className="flaticon-menu-1"></i>
                  <span>Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="tp-search-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-search-form">
                <div className="tp-search-close text-center mb-20">
                  <button className="tp-search-close-btn tp-search-close-btn"></button>
                </div>
                <form action="#">
                  <div className="tp-search-input mb-10">
                    <input type="text" placeholder="Search for product..." />
                    <button type="submit">
                      <i className="flaticon-search-1"></i>
                    </button>
                  </div>
                  <div className="tp-search-category">
                    <span>Search by : </span>
                    <a href="#">Men, </a>
                    <a href="#">Women, </a>
                    <a href="#">Children, </a>
                    <a href="#">Shirt, </a>
                    <a href="#">Demin</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="sticky top-0">
        <div className="tp-header-area p-relative z-index-11 ">
          <div className="tp-header-top theme-black p-relative z-index-1 d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-header-welcome d-flex align-items-center">
                    <span>
                      <svg
                        width="22"
                        height="19"
                        viewBox="0 0 22 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6364 1H1V12.8182H14.6364V1Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6364 5.54545H18.2727L21 8.27273V12.8182H14.6364V5.54545Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.0909 17.3636C6.3461 17.3636 7.36363 16.3461 7.36363 15.0909C7.36363 13.8357 6.3461 12.8182 5.0909 12.8182C3.83571 12.8182 2.81818 13.8357 2.81818 15.0909C2.81818 16.3461 3.83571 17.3636 5.0909 17.3636Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.9091 17.3636C18.1643 17.3636 19.1818 16.3461 19.1818 15.0909C19.1818 13.8357 18.1643 12.8182 16.9091 12.8182C15.6539 12.8182 14.6364 13.8357 14.6364 15.0909C14.6364 16.3461 15.6539 17.3636 16.9091 17.3636Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p>FREE Express Shipping On Orders $570+</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-header-top-right d-flex align-items-center justify-content-end">
                    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
                      <div className="tp-header-top-menu-item tp-header-lang">
                        <p className="ss-tp-text">
                          <i className="fa fa-map-marker-alt"></i>
                          <span className="">Tamilnadu,</span>
                          <span className="ss-tp-text-title">India</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-header-main  sticky top-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/assets/img/logo/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                  <div className="tp-header-search pl-70">
                    <form action="#">
                      <div className="tp-header-search-wrapper d-flex align-items-center">
                        <div className="tp-header-search-box">
                          <input
                            type="text"
                            placeholder="Search for Products..."
                          />
                        </div>
                        <div className=" border-l-2 p-1 border-gray-600">
                          <select className="outline-none p-1 border-gray-300 border-l-[1px] cursor-pointer rounded">
                            <option className="m-1">Select Category</option>
                            <option className="m-1">Posters</option>
                            <option className="m-1">
                              Day Trader Mouse Pad
                            </option>
                            <option className="m-1">Trading Desk Mat</option>
                            <option className="m-1">
                              Candlestick Chart Patterns Posters
                            </option>
                            <option className="m-1">Day Trading Journal</option>
                            <option className="m-1">Trading Cards</option>
                            <option className="m-1">
                              Price Actions & Setup Posters
                            </option>
                            <option className="m-1">
                              Guide on Price Action
                            </option>
                          </select>
                        </div>
                        <div className="tp-header-search-btn">
                          <button type="submit">
                            <FaSearch
                              size={"30px"}
                              className="m-auto text-gray-600"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-8 col-6 ">
                  <div className="tp-header-main-right d-flex align-items-center justify-content-end ">
                    <div className="tp-header-login d-none d-lg-block">
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                      >
                        <div className="tp-header-login-icon">
                          <span>
                            <i className="fa fa-phone"></i>
                          </span>
                        </div>
                        <div className="tp-header-login-content d-none d-xl-block">
                          <span>Contact</span>
                          <h5 className="tp-header-login-title">
                            +91 - 9901234567
                          </h5>
                        </div>
                      </a>
                    </div>

                    <div
                      className="tp-header-action-item d-none d-lg-block"
                      onClick={() => checkUser("wish")}
                    >
                      <Link href="#" className="tp-header-action-btn">
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="tp-header-action-badge">
                          {users?.wishlist_count || 0}
                        </span>
                      </Link>
                    </div>
                    <div className="tp-header-action-item">
                      <button
                        type="button"
                        className={`tp-header-action-btn cartmini-open-btn ${
                          cartItems.img1 ? "cart_glow" : ""
                        }`}
                        onClick={() => checkUser("cart")}
                      >
                        <svg
                          width="21"
                          height="22"
                          viewBox="0 0 21 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.70365 10.1018H7.74942"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5343 10.1018H13.5801"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="tp-header-action-badge">
                          {users?.cart_count || 0}
                        </span>
                      </button>
                    </div>
                    <div className="  mt-[-7px] ml-6">
                      <div className="">
                        {users?.id ? (
                          <div className=" items-center flex">
                            <UserMenu />
                            <p className="text-lg font-semibold hidden sm:flex">
                              {users?.first_name}
                            </p>
                          </div>
                        ) : (
                          <button className=" border-blue-200 font-semibold text-blue-400 border-b-2 py-1">
                            <Link href={"/sign-in"}>Login</Link>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="tp-header-action-item d-lg-none">
                      <button
                        type="button"
                        className="tp-header-action-btn tp-offcanvas-open-btn"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="16"
                          viewBox="0 0 30 16"
                        >
                          <rect
                            x="10"
                            width="20"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="5"
                            y="7"
                            width="25"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="10"
                            y="14"
                            width="20"
                            height="2"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block ">
          <div className="container ">
            <div className="tp-mega-menu-wrapper p-relative  z-10">
              <div className="row align-items-center ">
                <div className="col-xl-3 col-lg-3 ">
                  <div className="tp-header-category tp-category-menu tp-header-category-toggle ">
                    <button className="tp-category-menu-btn tp-category-menu-toggle flex">
                      <span>
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      All Products
                    </button>
                    <nav className="tp-category-menu-content">
                      <ul>
                        <li className="has-dropdown">
                          <a href="#" className="flex items-center">
                            <span>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10C1 10.8284 1.67157 11.5 2.5 11.5H14.5C15.3284 11.5 16 10.8284 16 10V2.5C16 1.67157 15.3284 1 14.5 1Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.5 14.5H11.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.5 11.5V14.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Trading Materials
                          </a>
                          <ul className="tp-submenu">
                            <li>
                              <a href="#">Posters</a>
                            </li>
                            <li>
                              <a href="#">Day Trader Mouse Pad</a>
                            </li>
                            <li>
                              <a href="#">Trading Desk Mat</a>
                            </li>
                            <li>
                              <a href="#">Candlestick Chart Patterns Posters</a>
                            </li>
                            <li>
                              <a href="#">Day Trading Journal</a>
                            </li>
                            <li>
                              <a href="#">Trading Cards</a>
                            </li>
                            <li>
                              <a href="#">Price Actions & Setup Posters</a>
                            </li>
                            <li>
                              <a href="#">Guide on Price Action</a>
                            </li>
                          </ul>
                        </li>

                        <li className="has-dropdown">
                          <a href="#">
                            <span>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10C1 10.8284 1.67157 11.5 2.5 11.5H14.5C15.3284 11.5 16 10.8284 16 10V2.5C16 1.67157 15.3284 1 14.5 1Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.5 14.5H11.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.5 11.5V14.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Bundles
                          </a>
                          <ul className="tp-submenu">
                            <li>
                              <a href="#">All Trading Materials Pack on Shop</a>
                            </li>
                            <li>
                              <a href="#">Bundle Pack 1</a>
                            </li>
                            <li>
                              <a href="#">Bundle Pack 2</a>
                            </li>
                            <li>
                              <a href="#">Bundle Pack 3</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="main-menu menu-style-1">
                    <nav className="tp-main-menu-content">
                      <ul>
                        <li className="has-dropdown has-mega-menu ">
                          <Link href="/">Home</Link>
                          <div className="home-menu tp-submenu tp-mega-menu in z-50">
                            <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-5 ">
                              <div className="col">
                                <div className="home-menu-item ">
                                  <a href="index.html">
                                    <div className="home-menu-thumb p-relative fix">
                                      <img
                                        src="/assets/img/menu/menu-home-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="home-menu-content">
                                      <h5 className="home-menu-title">
                                        Trading Material
                                      </h5>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="home-menu-item ">
                                  <a href="#">
                                    <div className="home-menu-thumb p-relative fix">
                                      <img
                                        src="/assets/img/menu/menu-home-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="home-menu-content">
                                      <h5 className="home-menu-title">
                                        Trading Material Two
                                      </h5>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="home-menu-item ">
                                  <a href="#">
                                    <div className="home-menu-thumb p-relative fix">
                                      <img
                                        src="/assets/img/menu/menu-home-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="home-menu-content">
                                      <h5 className="home-menu-title">
                                        Trading Material Three
                                      </h5>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="home-menu-item ">
                                  <a href="#">
                                    <div className="home-menu-thumb p-relative fix">
                                      <img
                                        src="/assets/img/menu/menu-home-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="home-menu-content">
                                      <h5 className="home-menu-title">
                                        Trading Material Four
                                      </h5>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="home-menu-item ">
                                  <a href="#">
                                    <div className="home-menu-thumb p-relative fix">
                                      <img
                                        src="/assets/img/menu/menu-home-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="home-menu-content">
                                      <h5 className="home-menu-title">
                                        Trading Material Five
                                      </h5>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/today-deals">
                            <span className="tag tag__text">Hot</span>
                            Todays Deals
                          </Link>
                        </li>
                        <li>
                          <Link href="/shipping-policy">Shipping Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions">
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="tp-header-contact d-flex align-items-center justify-content-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="header-sticky-2" className="tp-header-sticky-area pt-2">
        <div className="container">
          <div className="tp-mega-menu-wrapper p-relative">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="logo">
                  <a href="index.html">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-6 d-none d-md-block">
                <div className="tp-header-sticky-menu main-menu menu-style-1">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown has-mega-menu">
                        <Link href="/">Home</Link>
                        <div className="home-menu tp-submenu tp-mega-menu ">
                          <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-5 ">
                            <div className="col">
                              <div className="home-menu-item ">
                                <a href="index.html">
                                  <div className="home-menu-thumb p-relative fix">
                                    <img
                                      src="/assets/img/menu/menu-home-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="home-menu-content">
                                    <h5 className="home-menu-title">
                                      Trading Material
                                    </h5>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-menu-item ">
                                <a href="#">
                                  <div className="home-menu-thumb p-relative fix">
                                    <img
                                      src="/assets/img/menu/menu-home-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="home-menu-content">
                                    <h5 className="home-menu-title">
                                      Trading Material Two
                                    </h5>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-menu-item ">
                                <a href="#">
                                  <div className="home-menu-thumb p-relative fix">
                                    <img
                                      src="/assets/img/menu/menu-home-3.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="home-menu-content">
                                    <h5 className="home-menu-title">
                                      Trading Material Three
                                    </h5>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-menu-item ">
                                <a href="#">
                                  <div className="home-menu-thumb p-relative fix">
                                    <img
                                      src="/assets/img/menu/menu-home-4.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="home-menu-content">
                                    <h5 className="home-menu-title">
                                      Trading Material Four
                                    </h5>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-menu-item ">
                                <a href="#">
                                  <div className="home-menu-thumb p-relative fix">
                                    <img
                                      src="/assets/img/menu/menu-home-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="home-menu-content">
                                    <h5 className="home-menu-title">
                                      Trading Material Five
                                    </h5>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/today-deals">
                          <span className="tag tag__text">Hot</span>
                          Todays Deals
                        </Link>
                      </li>
                      <li>
                        <Link href="/shipping-policy">Shipping Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">
                          Terms and Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-6 absolute  top-4 right-6">
                  <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
                    <div
                      className="tp-header-action-item d-none d-lg-block"
                      onClick={() => checkUser("wish")}
                    >
                      <a href="#" className="tp-header-action-btn">
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="tp-header-action-badge">
                          {users?.wishlist_count ? users?.wishlist_count : 0}
                        </span>
                      </a>
                    </div>
                    <div className="tp-header-action-item">
                      <button
                        type="button"
                        className={`tp-header-action-btn cartmini-open-btn ${
                          cartItems.img1 ? "cart_glow" : ""
                        }`}
                        onClick={() => checkUser("cart")}
                      >
                        <svg
                          width="21"
                          height="22"
                          viewBox="0 0 21 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.70365 10.1018H7.74942"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5343 10.1018H13.5801"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="tp-header-action-badge">
                          {users?.cart_count || 0}
                        </span>
                      </button>
                    </div>
                    <div className="  mt-[-7px] ml-6">
                      <div className="">
                        {users?.id ? (
                          <div className=" items-center flex">
                            <UserMenu />
                            <p className="text-lg font-semibold hidden sm:flex">
                              {users?.first_name}
                            </p>
                          </div>
                        ) : (
                          <button className=" border-blue-200 text-bold text-blue-400">
                            <Link href={"/sign-in"}>Login</Link>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="tp-header-action-item d-lg-none">
                      <button
                        type="button"
                        className="tp-header-action-btn tp-offcanvas-open-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="16"
                          viewBox="0 0 30 16"
                        >
                          <rect
                            x="10"
                            width="20"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="5"
                            y="7"
                            width="25"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="10"
                            y="14"
                            width="20"
                            height="2"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <div className="com">
          <span className="  fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[100] ">
            <AiFillCloseCircle
              className="text-red-500 text-3xl cursor-pointer"
              onClick={() => dispatch(setPopUp(!popup))}
            />
            <Link href={"/register"}>
              <img src="/banner-cart.jpg" alt="" />
            </Link>
          </span>
        </div>
      )}

      {wish1 && (
        <div className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[100] w-full m-1 p-4 bg-white shadow md:w-[70vw] lg:w-[60vw] xl:w-[40vw]  ">
          <AiFillCloseCircle
            className="float-right mb-2  text-3xl text-red-500 cursor-pointer"
            onClick={() => setWish(!wish1)}
          />
          <Wishlist_modal />
        </div>
      )}
      {cartItems.img1 && (
        <div
          className={`${cartItems.delete ? "animate-image1" : "animate-image"}`}
        >
          <img src={cartItems.img1} alt="" />
        </div>
      )}

      <Link href={"/products/cart"}>
        <div
          className="fixed bottom-20 right-4 md:right-20 rounded-full shadow-lg p-3 z-[455] bg-white "
          style={{ border: "3px solid blue" }}
        >
          <span
            className="absolute right-3 top-2 font-bold text-xs text-blue-500 bg-white p-1 rounded-full h-4 w-4 flex items-center justify-center  "
            style={{ boxShadow: "1px 1px 2px" }}
          >
            {users?.cart_count || 0}
          </span>
          <AiOutlineShoppingCart
            className={`text-2xl  md:text-3xl  text-blue-900 ${
              cartItems.img1 && "cart_glow"
            } `}
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
