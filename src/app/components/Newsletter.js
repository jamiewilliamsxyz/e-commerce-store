"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  function handleInput(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitted ${email}`);
    setEmail("");
  }

  return (
    <div className="bg-neutral-100 px-6 py-12 text-center">
      <h3 className="text-neutral-800 text-3xl md:text-5xl font-semibold mb-6 md:mb-10">
        Join Us For
        <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent bg-clip-text">
          {" "}
          10% Off
        </span>
      </h3>
      <p className="mx-4 md:mx-8 text-neutral-800 text-sm md:text-base">
        We respect your privacy. Unsubscribe at any time.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 md:gap-10 align-middle items-center mt-8 md:mt-10"
      >
        <input
          value={email}
          onChange={handleInput}
          type="email"
          maxLength="30"
          minLength="5"
          required
          placeholder="Type your email here..."
          className="w-full max-w-xs md:max-w-sm lg:max-w-md p-3 shadow-md rounded-xl"
        />
        <button
          type="submit"
          className="rounded-xl font-semibold bg-neutral-800 px-6 py-2 shadow-lg text-white hover:scale-105 transition-transform duration-300"
        >
          Send Discount Code
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
