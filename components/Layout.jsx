import Header from '@/components/Header';

import Head from 'next/head';
import React, { Children, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Footer from '@/components/Footer';
import { addUser } from '@/store/userSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
function Layout({children}) {
  const user=useSelector(state=>state.users.user)
  const dispatch=useDispatch()
  const state=useSelector(state=>state)
  console.log(state)
  const router = useRouter();
  const fetchData = async () => {
    const authToken = localStorage.getItem("tmToken"); // Replace with your cookie retrieval logic

    if (authToken) {
      try {
        const response = await axios.get(
          "https://admin.tradingmaterials.com/api/lead/get-user-info",
        {
          headers: {
            "access-token": localStorage.getItem("tmToken"),
          },
        }
        );
        const { data } = response;
        console.log(data)
        dispatch(addUser(data.data.client));

        console.log(user)
       
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response) {
          localStorage.removeItem("tmToken");
        }
      }
    }
  };
  const token =typeof window !== "undefined" && localStorage.getItem("tmToken")
  useEffect(() => {
    fetchData();
    
    if (user && localStorage.getItem("tmToken")) {
      return;
    }
    
    if (!localStorage.getItem("tmToken") ) {
      if (router.pathname.includes("/cart")) {
        router.push("/");
      }
      if (router.pathname.includes("/checkout")) {
        router.push("/");
      }
      if (router.pathname.includes("/profile")) {
        router.push("/");
      }
    }
  }, [user?.id, token]);
  


  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/flaticon_shofy.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <script src="/assets/js/vendor/waypoints.js"></script>
        <script src="/assets/js/bootstrap-bundle.js"></script>
        <script src="/assets/js/meanmenu.js"></script>
        {/* <script src="/assets/js/swiper-bundle.js"></script> */}
        <script src="/assets/js/slick.js"></script>
        <script src="/assets/js/range-slider.js"></script>
        <script src="/assets/js/magnific-popup.js"></script>
        <script src="/assets/js/nice-select.js"></script>
        <script src="/assets/js/purecounter.js"></script>
        <script src="/assets/js/countdown.js"></script>
        <script src="/assets/js/wow.js"></script>
        <script src="/assets/js/isotope-pkgd.js"></script>
        <script src="/assets/js/imagesloaded-pkgd.js"></script>
        <script src="/assets/js/ajax-form.js"></script>
        {/* <script src="/assets/js/script.js"></script> */}
        <script src="/assets/js/main.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>

      <Header />

      
{children}
<Footer/>

    </div>
  );
}

export default Layout;


