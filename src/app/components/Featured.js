"use client";

import Image from "next/image";
import Link from "next/link";

function FeaturedCard({ image, path }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
      <Link href={path}>
        <Image
          src={image}
          alt="Store products"
          width={270}
          height={270}
          className="rounded-lg shadow-lg cursor-pointer bg-neutral-200 hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
}

const Featured = () => {
  return (
    <div className="w-full bg-neutral-100 p-12">
      <div className="text-center mb-10">
        <h3 className="text-neutral-800 text-5xl font-semibold">Featured</h3>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-wrap gap-8 justify-center">
        <FeaturedCard image="/images/cap.png" path="/shop/1" />
        <FeaturedCard image="/images/mug.png" path="/shop/3" />
        <FeaturedCard image="/images/phonecase.png" path="/shop/6" />
      </div>
    </div>
  );
};

export default Featured;
