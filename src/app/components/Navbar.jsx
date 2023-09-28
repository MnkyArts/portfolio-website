"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const links = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="flex items-center text-3xl text-white font-semibold"
        >
          <Image
            src="/img/logo.gif"
            alt="Liam Robinson Logo"
            className="mr-2 filter invert"
            width={75}
            height={75}
          />
          <h1>LIAM ROBINSON</h1>
        </Link>
        <div className="block md:hidden">
          {!menuOpen ? (
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-wrap items-center justify-between text-l text-white">
            {links.map((link, index) => (
              <NavLinks key={index} href={link.href} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
      {menuOpen ? <MenuOverlay links={links} /> : null}
    </nav>
  );
};

export default Navbar;
