import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const navItems = [
  { title: "Home", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "Blog", url: "#" },
  { title: "About", url: "#" },
];

const Header = () => {
  return (
    <header className="md:max-w-7xl mx-auto flex justify-between items-center p-4">
      <div className="text-purple-600 font-bold text-xl">
        <Logo width={60} height={60} />
      </div>
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item, index) => (
          <Link href={item.url} key={index}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex gap-2">
        <button className="bg--200 text-gray-800 px-4 py-2 rounded">
          Se connecter
        </button>
        <Link href="/dashboard">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Get started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
