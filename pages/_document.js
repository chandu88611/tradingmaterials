import ErrorBoundary from "@/components/ErrorBoundary";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    //  <ErrorBoundary>
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/flaticon_shofy.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="/assets/js/vendor/jquery.js"></script>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    // </ErrorBoundary>
  );
}
