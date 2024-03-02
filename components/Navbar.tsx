"use client";
import { useState } from "react";
import { navigationData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ArrowButton from "./common/ArrowButton";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav
      className="section-container padding-container flex-between relative z-20 gap-10"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="flex flex-1 items-center gap-4">
        <Image src="/img/logo.png" alt="logo" width={50} height={35} />
      </div>
      <div className="flex-center gap-20 z-20">
        <Nav />
        {mobileNavOpen && (
          <div className="lg:hidden absolute top-28 right-0 left-0 bg-accent-tertiary font-bold rounded transition-all">
            <MobileNav />
          </div>
        )}
      </div>
      <ArrowButton text="Request Demo" />
      <div
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="lg:hidden text-primary text-2xl cursor-pointer flex-1 flex justify-center"
      >
        <FaBars />
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <ul className="hidden lg:flex-between lg:gap-12">
      {navigationData.map((nd, i) => (
        <Link key={i} href={nd.href}>
          {nd.name}
        </Link>
      ))}
    </ul>
  );
};

const MobileNav = () => {
  return (
    <ul className="flex flex-col px-6 py-8 gap-y-4">
      {navigationData.map((nd, i) => (
        <Link key={i} className="text-white" href={nd.href}>
          {nd.name}
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
