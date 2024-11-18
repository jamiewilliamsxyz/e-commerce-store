"use client";

import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";

const About = () => {
  return (
    <div>
      <Navbar />

      <h1 className="text-neutral-800 text-[5rem] font-bold text-center mt-10">
        About Us
      </h1>

      <h2 className="text-neutral-800 text-[1.25rem] font-semibold mb-6 text-center">
        Online Christian Store
      </h2>

      <div className="flex justify-center mb-10">
        <div className="flex flex-col justify-center items-center m-12 max-w-[75rem]">
          <div className="flex flex-col md:flex-row gap-8 self-center w-full">
            <p className="text-left text-lg self-center md:w-1/2">
              At Crucifix.Shop, we are dedicated to providing high-quality
              Christian products that reflect faith, purpose, and devotion. Our
              mission is to offer a range of thoughtfully designed items—from
              apparel to home goods—that allow you to share and celebrate your
              faith in your everyday life. We take pride in creating products
              that inspire connection, uplift the spirit, and remind you of the
              strength found in belief. Every product in our store is crafted
              with attention to detail and a commitment to quality, so you can
              carry a piece of faith with you wherever you go. Thank you for
              being part of our journey to spread hope, love, and positivity.
            </p>
            <Image
              src="/images/headerImg.png"
              alt="Store products"
              width={600}
              height={600}
              className="w-full md:w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      <Featured />

      <Footer />
    </div>
  );
};

export default About;
