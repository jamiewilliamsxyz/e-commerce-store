"use client";

import { useState, useEffect } from "react";
import { products } from "../page";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Featured from "@/app/components/Featured";

const Product = ({ params }) => {
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = params;
    const selectedProduct = products.find((p) => p.id === id);
    setProduct(selectedProduct);
  }, [params]);

  const changeQuantity = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity += amount;
    } else {
      cartItems.push({ ...product, quantity: amount });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item added to cart");
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col align-middle justify-center items-center mt-16 mb-20 px-6 sm:px-10">
        <div className="max-w-full sm:max-w-[60rem] flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col max-w-full sm:max-w-[28rem] gap-6">
            <Image
              src={product.image}
              alt="Store products"
              width={400}
              height={400}
              className="self-center bg-neutral-100 rounded-lg"
            />
            <p className="text-lg sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col max-w-full sm:max-w-[28rem] gap-8">
            <h1 className="text-3xl sm:text-5xl font-semibold">
              {product.name}
            </h1>
            <p className="text-2xl">${product.price}</p>
            <div className="flex flex-col gap-2">
              <p className="text-base">Quantity</p>
              <select
                id="quantity-dropdown"
                name="quantity"
                value={amount}
                onChange={changeQuantity}
                className="w-[3.5rem] sm:w-[4rem] border py-1"
              >
                {quantityOptions.map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddToCart}
              type="submit"
              className="rounded-xl font-semibold bg-neutral-800 w-32 px-4 py-1 shadow-lg text-white hover:scale-105 transition-transform duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Featured />
      <Footer />
    </div>
  );
};

export default Product;
