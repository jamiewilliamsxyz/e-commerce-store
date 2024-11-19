"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    { text: "Our Story", path: "/about" },
    { text: "Terms & Conditions", path: "/terms" },
    { text: "Privacy Policy", path: "/privacy" },
    { text: "Shipping & Returns", path: "/returns" },
  ];

  const linksList = links.map((link) => (
    <Link key={link} href={link.path}>
      {link.text}
    </Link>
  ));

  return (
    <footer className="bg-neutral-800 text-white p-8 font-medium flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="mb-3"
          />
        </Link>
        <p>
          <u>&quot;Powered by Faith&quot;</u>
        </p>
      </div>
      <div className="flex flex-row gap-14">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Social & Contact</h4>
          <a href="mailto:someone@example.com">Contact Us</a>
          <Link href="https://www.tiktok.com" target="_blank">
            TikTok
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            YouTube
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Our Story & Policies</h4>
          {linksList}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
