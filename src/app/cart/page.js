"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const validPromoCodes = {
    SAVE10: 0.1,
    DISCOUNT5: 5,
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault();
    if (validPromoCodes[promoCode.toUpperCase()]) {
      const promoDiscount = validPromoCodes[promoCode.toUpperCase()];
      setDiscount(promoDiscount);
    } else {
      alert("Invalid Promo Code");
    }
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return subtotal.toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    let total = subtotal + 4.99;
    if (discount) {
      if (discount < 1) {
        total -= total * discount;
      } else {
        total -= discount;
      }
    }
    return total.toFixed(2);
  };

  const thankYouMessage = () => {
    alert("Thank you for exploring my e-commerce website project!");
  };

  return (
    <div>
      <Navbar />
      <header className="p-12">
        <h1 className="text-neutral-800 text-[5rem] font-bold text-center mt-10">
          Your Cart
        </h1>
        <h2 className="text-lg text-center mt-6 mb-10">
          Ready to check out? Here's what you've got.
        </h2>
      </header>

      <div className="flex flex-col md:flex-row items-start pb-12 px-5 sm:px-10 justify-center max-w-[50rem] mx-auto">
        <div className="flex flex-col gap-6 w-full items-center md:items-start mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-5 bg-neutral-100 p-5 rounded-lg w-full max-w-[400px] mx-auto sm:mx-0 shadow-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="object-cover rounded-lg"
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="font-semibold text-lg">${item.price}</p>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-[3.5rem] border py-1 h-[2rem]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-400 cursor-pointer self-center text-xl"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 w-full md:w-[14rem]">
          <div className="flex flex-col gap-3 bg-neutral-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-2xl">Order Summary</h3>
            <p className="text-lg">Subtotal: ${calculateSubtotal()}</p>
            <p className="text-lg">Delivery: $4.99</p>
            {discount > 0 && (
              <p className="text-lg">
                {discount < 1 ? `${discount * 100}% off` : `$${discount} off`}
              </p>
            )}
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
            <button
              onClick={thankYouMessage}
              className="rounded-xl font-semibold bg-neutral-800 w-full px-4 py-2 shadow-lg text-white hover:scale-105 transition-transform duration-300"
            >
              Checkout
            </button>
          </div>

          <form
            onSubmit={handlePromoCodeSubmit}
            className="bg-neutral-100 flex flex-col gap-4 items-center w-full md:w-[14rem] rounded-lg p-5 shadow-md"
          >
            <label htmlFor="promoCode" className="font-semibold text-xl">
              Promo Code
            </label>
            <input
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full rounded-lg px-3 py-2 border"
            />
            <button
              type="submit"
              className="rounded-xl font-semibold bg-neutral-800 w-full px-4 py-2 mt-2 shadow-lg text-white hover:scale-105 transition-transform duration-300"
            >
              Apply Promo Code
            </button>
          </form>
        </div>
      </div>
      <Featured />
      <Footer />
    </div>
  );
};

export default Cart;
