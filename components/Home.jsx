import React, { useEffect, useState } from "react";
import Produuct from "./Produuct";
import Footer from "./Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";

function Home() {
  const [topClass, setTopClass] = useState("top-[254px]");
  const user=useSelector(state=>state.users.user)
const [show ,setShow]=useState(true)
const [products,setProducts]=useState([])

const checkAuthentication = async () => {
  const token = localStorage.getItem("tmToken");

      try {
        
       
        const response = await axios.get(
          "https://admin.tradingmaterials.com/api/get/products",
      
          {
            headers: {
              "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
              "accept":"application/json"
            },
          }
        );

        if (response.data.status) {
         
          console.log(response);
        setProducts(response.data.data.products)
        }
      } catch (error) {           
        console.error("Error fetching user info:", error);
     
      }



};
useEffect(()=>{
checkAuthentication()
},[])
  useEffect(() => {   
    const handleScroll = () => {
      if (window.scrollY >= 110) {
        setTopClass("top-24");
      } else {
        setTopClass("top-[254px]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" w-full  xl:w-[55%] 2xl:w-[50%]  lg:pt-10 2xl:ml-40 xl:ml-14" >
   

      <div className="w-full m-2  xl:w-[100%] 2xl:w-[95%]">

        <div className="relative -z-10" >
        <video  autoPlay muted loop >
          <source src="https://cdn.shopify.com/s/files/1/0154/6449/7216/files/DIVA.mp4?v=1646306156" type="video/mp4" />
          <source src="https://cdn.shopify.com/s/files/1/0154/6449/7216/files/DIVA.mp4?v=1646306156" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-10 left-5 text-2xl font-semibold">
          <h1>
            Sale 50% Off
            <br /> Grab your deal soon!
          </h1>
          <br />
          <span className="btnss">Shop Now</span>
        </div>
        </div>
       





      </div>

      <div className={`tp-product-gadget-sidebar w-full hidden lg:w-96 static xl:fixed lg:right-10 xl:right-28 2xl:right-[18.5vw] ${topClass} pt-5 -z-10 lg:m-auto xl:block`} >
        <div className="tp-product-gadget-categories p-relative fix mb-10">
          <div className="tp-product-gadget-thumb">
            <img src="/assets/img/product/gadget/gadget-girl.png" alt="" />
          </div>
          <h3 className="tp-product-gadget-categories-title">
            Product 1 Gadgets
          </h3>
          <div className="tp-product-gadget-categories-list -mt-1">
            <ul>
              <li>
                <a href="#">Micrscope</a>
              </li>
              <li>
                <a href="#">Remote Control</a>
              </li>
              <li>
                <a href="#">Monitor</a>
              </li>
              <li>
                <a href="#">Thermometer</a>
              </li>
              <li>
                <a href="#">Backpack</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
            </ul>
          </div>
          <div className="tp-product-gadget-btn">
            <a href="#" className="tp-link-btn">
              More Products
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9998 6.19656L1 6.19656"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.75674 0.975394L14 6.19613L8.75674 11.4177"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="tp-product-gadget-banner w-full lg:w-96 -mt-9 h-20">
          <div className="tp-product-gadget-banner-slider-active swiper-container h-36">
            <div className="swiper-wrapper">
              <div
                className="tp-product-gadget-banner-item swiper-slide include-bg"
                style={{
                  backgroundImage:
                    "url(/assets/img/product/gadget/gadget-banner-1.jpg)",
                }}
              >
                <div className="tp-product-gadget-banner-content">
                  <span className="tp-product-gadget-banner-price">
                    Only $4999.00
                  </span>
                  <h3 className="tp-product-gadget-banner-title">
                    <a href="#">
                      Intermediate <br /> Products
                    </a>
                  </h3>
                </div>
              </div>
              <div
                className="tp-product-gadget-banner-item swiper-slide include-bg"
                data-background="assets/img/product/gadget/gadget-banner-2.jpg"
              >
                <div className="tp-product-gadget-banner-content">
                  <span className="tp-product-gadget-banner-price">
                    Only $55.00
                  </span>
                  <h3 className="tp-product-gadget-banner-title">
                    <a href="#">
                      Top Rated <br /> Products
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="tp-product-gadget-banner-slider-dot tp-swiper-dot"></div>
          </div>
        </div>
      </div>
      {show&&<AiOutlineArrowRight className="text-blue-500 fixed right-[2px] top-52 text-3xl product3 xl:hidden cursor-pointer" onClick={()=>setShow(!show)}/>}
<button className="vertical-text text-center font-semibold bg-blue-500 rounded text-white p-1 fixed right-0 top-60 xl:hidden z-[300] cursor-pointer" onClick={()=>setShow(!show)}>Exclusive</button>
{show&&<div className={`tp-product-gadget-sidebar fixed right-10 top-60 w-[282px] md:w-96 xl:hidden  pt-5  lg:m-auto  z-[244] product3 `} >
        <div className="tp-product-gadget-categories p-relative fix mb-10">
          <div className="tp-product-gadget-thumb">
            <img src="/assets/img/product/gadget/gadget-girl.png" alt="" />
          </div>
          <h3 className="tp-product-gadget-categories-title">
            Product 1 Gadgets
          </h3>
          <div className="tp-product-gadget-categories-list -mt-1">
            <ul>
              <li>
                <a href="#">Micrscope</a>
              </li>
              <li>
                <a href="#">Remote Control</a>
              </li>
              <li>
                <a href="#">Monitor</a>
              </li>
              <li>
                <a href="#">Thermometer</a>
              </li>
              <li>
                <a href="#">Backpack</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
            </ul>
          </div>
          <div className="tp-product-gadget-btn">
            <a href="#" className="tp-link-btn">
              More Products
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9998 6.19656L1 6.19656"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.75674 0.975394L14 6.19613L8.75674 11.4177"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="tp-product-gadget-banner w-full lg:w-96 -mt-9 h-20">
          <div className="tp-product-gadget-banner-slider-active swiper-container h-36">
            <div className="swiper-wrapper">
              <div
                className="tp-product-gadget-banner-item swiper-slide include-bg"
                style={{
                  backgroundImage:
                    "url(/assets/img/product/gadget/gadget-banner-1.jpg)",
                }}
              >
                <div className="tp-product-gadget-banner-content">
                  <span className="tp-product-gadget-banner-price">
                    Only $4999.00
                  </span>
                  <h3 className="tp-product-gadget-banner-title">
                    <a href="#">
                      Intermediate <br /> Products
                    </a>
                  </h3>
                </div>
              </div>
              <div
                className="tp-product-gadget-banner-item swiper-slide include-bg"
                data-background="assets/img/product/gadget/gadget-banner-2.jpg"
              >
                <div className="tp-product-gadget-banner-content">
                  <span className="tp-product-gadget-banner-price">
                    Only $55.00
                  </span>
                  <h3 className="tp-product-gadget-banner-title">
                    <a href="#">
                      Top Rated <br /> Products
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="tp-product-gadget-banner-slider-dot tp-swiper-dot"></div>
          </div>
        </div>
      </div>}


 <div className="w-full flex flex-wrap gap-4 mt-20 mb-8 justify-center">
  {products.map((data,index)=>(
    
    <Link href={`/products/${data.id}`}><Produuct key={index} data={data}/></Link>
  ))}
    
   
 </div>
 
    </div>
  );
}

export default Home;
