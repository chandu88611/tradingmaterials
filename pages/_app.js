// import { useEffect, useState } from 'react';
// import Router from 'next/router';
// import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { wrapper } from '@/store/store';

// import { BiLoaderAlt } from "react-icons/bi";
import '@/styles/globals.css';

// Router.events.on('routeChangeStart', () => {
//   NProgress.start();
// });

// Router.events.on('routeChangeComplete', () => {
//   NProgress.done();
// });

// Router.events.on('routeChangeError', () => {
//   NProgress.done();
// });

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const startLoading = () => setLoading(true);
  //   const stopLoading = () => setLoading(false);

  //   Router.events.on('routeChangeStart', startLoading);
  //   Router.events.on('routeChangeComplete', stopLoading);
  //   Router.events.on('routeChangeError', stopLoading);

  //   return () => {
  //     Router.events.off('routeChangeStart', startLoading);
  //     Router.events.off('routeChangeComplete', stopLoading);
  //     Router.events.off('routeChangeError', stopLoading);
  //   };
  // }, []);

  return (
    <>
     
  <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
