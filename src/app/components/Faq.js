"use client";

import { useState } from "react";

function FaqBlock({ q, a }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className="bg-neutral-800 mx-auto mb-5 rounded-xl p-5 text-white w-full max-w-md md:max-w-xl lg:max-w-2xl cursor-pointer select-none"
    >
      <h4 className="font-semibold text-xl md:text-2xl text-center">{q}</h4>
      {toggle && <p className="text-center text-lg md:text-xl mt-4">{a}</p>}
    </div>
  );
}

const Faq = () => {
  return (
    <div className="bg-white px-6 py-12 md:p-12 flex flex-col items-center">
      <h3 className="text-center text-neutral-800 text-3xl md:text-5xl font-semibold mb-6 md:mb-8">
        FAQ
      </h3>
      <div className="flex flex-col items-center w-full gap-4">
        <FaqBlock
          q="What is the return policy?"
          a="You can return items within 30 days of purchase."
        />
        <FaqBlock
          q="Do you offer international shipping?"
          a="Yes, we offer shipping to select countries."
        />
        <FaqBlock
          q="How can I track my order?"
          a="You'll receive a tracking link once your order ships."
        />
      </div>
    </div>
  );
};

export default Faq;
