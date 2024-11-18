"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div>
      <Navbar />

      <div className="p-12">
        <h1 className="text-[5rem] font-bold text-center">Contact Us</h1>
        <h2 className="text-lg text-center mt-4">
          We'd love to hear from you! Reach out to us for any questions or
          support
        </h2>

        <div className="flex items-center justify-center p-4 mt-10 flex-col md:flex-row gap-14">
          <div className="w-full hidden md:block md:w-[500px]">
            <Image
              src="/images/headerImg.png"
              alt="Store products"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full px-4 md:w-[500px] lg:w-[600px]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-5"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                maxLength="50"
                minLength="1"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-neutral-100 p-3 rounded-lg w-full"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                maxLength="100"
                minLength="3"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-neutral-100 p-3 rounded-lg w-full"
              />
              <textarea
                id="message"
                name="message"
                rows="12"
                cols="30"
                placeholder="Your Message"
                minLength="10"
                maxLength="500"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="bg-neutral-100 p-3 rounded-lg resize-none w-full"
              ></textarea>
              <div className="self-center mt-4">
                <button
                  type="submit"
                  className="rounded-xl font-semibold bg-neutral-800 w-32 px-4 py-1 shadow-lg text-white hover:scale-105 transition-transform duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Featured />

      <Footer />
    </div>
  );
};

export default Contact;
