"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "../shop/page";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchFunc = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="relative">
      <input
        className="p-2 border rounded-xl text-black w-full"
        placeholder="Search here..."
        value={search}
        onChange={searchFunc}
      />
      {search && (
        <ul className="absolute left-0 mt-2 bg-white text-neutral-800 border rounded-lg shadow-lg w-full max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const path = `/shop/${product.id}`;
              return (
                <li
                  key={product.id}
                  className="p-2 border-b hover:bg-gray-200 cursor-pointer"
                >
                  <Link href={path}>{product.name}</Link>
                </li>
              );
            })
          ) : (
            <li className="p-2 text-gray-500">No results found...</li>
          )}
        </ul>
      )}
    </div>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navItems = items.map((item) => (
    <li key={item.name} className="py-2 md:py-0">
      <Link href={item.path}>{item.name}</Link>
    </li>
  ));

  return (
    <nav className="flex flex-col w-full bg-neutral-800 text-white shadow-lg min-h-[60px] md:min-h-[80px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-4 py-4 relative overflow-hidden">
        <Link href="/" className="flex justify-center md:static mx-auto">
          <Image
            src="/images/logo.svg"
            alt="Store products"
            width={150}
            height={150}
            className="mx-auto"
          />
        </Link>

        <button
          className="text-3xl md:hidden absolute right-4 top-4 z-10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-between items-center px-6 py-4 md:pb-3`}
      >
        <ul className="flex flex-col md:flex-row gap-4 font-semibold text-lg text-center">
          {navItems}
        </ul>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <SearchBar />
          <Link href="/cart" className="mt-2 md:mt-0">
            <FontAwesomeIcon icon={faCartShopping} className="text-3xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
