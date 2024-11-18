"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";

export const products = [
  {
    name: "Cross Cap",
    id: "1",
    productType: "cap",
    price: 15,
    image: "/images/cap.png",
  },
  {
    name: "Christ Is King Cap",
    id: "2",
    productType: "cap",
    price: 15,
    image: "/images/cikCap.png",
  },
  {
    name: "Bible Verse Mug",
    id: "3",
    productType: "mug",
    price: 12,
    image: "/images/mug.png",
  },
  {
    name: "Cross Mug",
    id: "4",
    productType: "mug",
    price: 11.99,
    image: "/images/crossMug.png",
  },
  {
    name: "Sacred Heart iPhone Case",
    id: "5",
    productType: "phoneCase",
    price: 13.99,
    image: "/images/sacredHeartPhoneCase.png",
  },
  {
    name: "Cross iPhone Case",
    id: "6",
    productType: "phoneCase",
    price: 12.99,
    image: "/images/phonecase.png",
  },
];

const Shop = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (filter) => {
    setSelectedFilter((prev) => (prev === filter ? "" : filter));
  };

  const filteredProducts = selectedFilter
    ? products.filter((product) => product.productType === selectedFilter)
    : products;

  const Filters = [
    { label: "Caps", value: "cap" },
    { label: "Phone Cases", value: "phoneCase" },
    { label: "Mugs", value: "mug" },
  ];

  return (
    <div>
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-neutral-800 text-[5rem] font-bold">Shop</h1>
        <h2 className="text-neutral-800 text-[1.25rem] font-semibold mb-6">
          Shop Our Range of Products
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filter Sidebar */}
        <div className="bg-neutral-100 p-6 max-w-[12rem] min-w-[12rem] ml-10 rounded-lg mt-10 h-auto md:h-96">
          <h3 className="font-semibold text-4xl text-center mb-6">Filter</h3>
          <div className="flex flex-col text-center gap-4">
            {Filters.map(({ label, value }) => (
              <div key={value} className="flex flex-row gap-3 items-center">
                <p className="text-xl">{label}</p>
                <input
                  type="checkbox"
                  checked={selectedFilter === value}
                  onChange={() => handleFilterChange(value)}
                  className="appearance-none h-5 w-5 bg-white checked:bg-neutral-800 border border-neutral-800 rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product List */}
        <ul className="flex flex-row flex-wrap mb-12 justify-center px-4 md:px-0">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="flex flex-col bg-neutral-100 w-[20rem] rounded-lg p-4 text-center m-10 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Link href={`/shop/${product.id}`} passHref>
                <div>
                  <Image
                    src={product.image}
                    alt="Store products"
                    width={400}
                    height={400}
                    className="self-center"
                  />
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-2xl">${product.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Featured />

      <Footer />
    </div>
  );
};

export default Shop;
