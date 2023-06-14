import Head from 'next/head';
import React from 'react';

const UnderConstruction = () => {
  return (
    <>
   
    <div className="relative flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-75 bg-customColor"></div>
      <div className="relative z-10 bg-white p-8 m-2 rounded-lg shadow-lg text-center sm:w-2/3 lg:w-1/2 xl:w-1/3 top">
        <div className="flex items-center justify-center">
          <img src="https://gtechwebservice.com/TradingMaterial/assets/images/logo/tm-logo.png" alt="Under Construction" className="animate-slide-left w-32 sm:w-48 md:w-54" />
        </div>
        <h1 className=" text-black font-bold my-4 animate-slide-right text-sm sm:text-3xl md:text-4xl ">On Production</h1>
        <p className="text-black animate-slide-right text-xs sm:text-base md:text-lg lg:text-xl">We are working on something awesome. Please check back later.</p>
      </div>
    </div></>
  );
};

export default UnderConstruction;
