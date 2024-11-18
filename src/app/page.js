"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVanShuttle,
  faCheck,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Featured from "./components/Featured";
import TrustCard from "./components/TrustCard";
import Newsletter from "./components/Newsletter";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="flex flex-col md:flex-row gap-8 md:gap-10 w-full items-center justify-center mt-8 pb-12 px-4 md:px-12">
        <div className="text-center md:text-left flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-neutral-800 text-4xl md:text-[5rem] font-bold">
              CRUCIFIX.SHOP
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-neutral-800 text-lg md:text-[1.25rem] font-semibold mb-6 text-center mt-7">
              Online Christian Store
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="flex justify-center">
              <Link href="/shop">
                <Button text="Shop Now" />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="md:order-1"
        >
          <Image
            src="/images/headerImg.png"
            alt="Store products"
            width={500}
            height={500}
            className="w-full max-w-[300px] md:max-w-none md:w-[500px]"
          />
        </motion.div>
      </header>

      <Featured />

      <div className="w-full px-4 md:px-12 py-8">
        <h3 className="text-center text-neutral-800 text-3xl md:text-5xl font-semibold mb-6">
          Why Buy From Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 justify-items-center">
          <TrustCard
            icon={
              <FontAwesomeIcon
                icon={faVanShuttle}
                style={{ color: "#000000" }}
                className="text-4xl"
              />
            }
            title="Designed, Printed & Shipped From the UK"
            text="Everything is designed and printed here in the UK. We take pride in using local suppliers and supporting other businesses."
          />
          <TrustCard
            icon={
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#000000" }}
                className="text-4xl"
              />
            }
            title="High Quality Garments Made To Order"
            text="As our garments are made to order we have the ability to customise every item and produce unique products."
          />
          <TrustCard
            icon={
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#000000" }}
                className="text-4xl"
              />
            }
            title="An Extensive Range of Products"
            text="At Crucifix.Shop, it's easy to find something you'll love. With our wide range of Christian products, there's something for everyone."
          />
        </div>
      </div>
      <Newsletter />
      <Faq />
      <Footer />
      <Popup />
    </>
  );
}
