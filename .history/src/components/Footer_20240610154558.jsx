import React from "react";

const Footer = () => {
  return (
    <div className="footer mx-10 my-5">
      <div className="top flex gap-12">
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="text-lg font-medium text-gray-700">Categories</h1>
          <span className="text-gray-500">Women</span>
          <span className="text-gray-500">Men</span>
          <span className="text-gray-500">Shoes</span>
          <span className="text-gray-500">Accessories</span>
          <span className="text-gray-500">New Arrivals</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="text-lg font-medium text-gray-700">Links</h1>
          <span className="text-gray-500">FAQ</span>
          <span className="text-gray-500">Pages</span>
          <span className="text-gray-500">Stores</span>
          <span className="text-gray-500">Compare</span>
          <span className="text-gray-500">Cookies</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="text-lg font-medium text-gray-700">About</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore.
          </span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="text-lg font-medium text-gray-700">Contact</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore.
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-12">
        <div className="left flex items-center">
          <span className="logo text-blue-500 font-bold text-2xl">JOJOstore</span>
          <span className="copyright ml-5 text-xs text-gray-500">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="../" alt="payment" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
