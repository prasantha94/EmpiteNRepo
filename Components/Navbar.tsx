"use client";
import { NAV_LINKS, NAV_LINKS2 } from "@/utils";
import { navLinks } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav className="flex justify-between items-center py-8 px-20 w-full relative">
      <Link href="/">
        <Image src="/Group 5.svg" alt="logo" width={94} height={59} />
      </Link>

      <ul className="h-full gap-12 hidden md:flex items-center">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="font-mulish text-xl text-black cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="btn-black py-3">Let’s Talk</button>
        </li>
      </ul>

      <span className="flex md:hidden cursor-pointer">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenuLine size={27} onClick={() => setToggleMenu(true)} />
        )}
      </span>

      {toggleMenu && (
        <ul className="mobile-nav scale-up-center md:hidden">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="font-mulish text-base text-black cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="btn-black py-3">Let’s Talk</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
