"use client";

const Button = ({ text }) => {
  return (
    <button className="rounded-xl font-semibold bg-neutral-800 w-32 px-4 py-1 shadow-lg text-white hover:scale-105 transition-transform duration-300">
      {text}
    </button>
  );
};

export default Button;
