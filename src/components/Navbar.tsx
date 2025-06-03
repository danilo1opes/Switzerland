'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Blog', href: '/' },
    { name: 'About', href: '/' },
  ];

  return (
    <div>
      <nav className="p-6 lg:p-10 z-[999] relative">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl lg:text-4xl tracking-widest text-brand-secundary font-light font-ogg uppercase">
            Cosmos
          </h1>

          {/* Botão Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-brand-secundary focus:outline-none"
              type="button"
            >
              {isMobileMenuOpen ? (
                <IoClose size={30} />
              ) : (
                <CiMenuBurger size={30} />
              )}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <ul className="uppercase font-ogg flex gap-12 items-center cursor-pointer">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <Link
                href="/"
                className="text-brand-primary bg-brand-secundary p-4 px-8 rounded-3xl"
              >
                Sing Up
              </Link>
            </ul>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col gap-4 font-ogg uppercase text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-primary bg-brand-secundary p-4 px-8 rounded-3xl w-fit"
              >
                Sign Up
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
