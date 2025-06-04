'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export function HeroWithNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Blog', href: '/' },
    { name: 'About', href: '/' },
  ];

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Fundo com Montanhas */}
      <Image
        src="/img/mountain-bg.jpg"
        fill
        alt="Montanhas"
        priority
        className="object-cover"
      />

      {/* Nuvens */}
      <Image
        src="/img/clouds.png"
        alt="Nuvem Esquerda"
        width={800}
        height={600}
        priority
        className="absolute left-0 top-0 object-contain opacity-90 pointer-events-none"
      />

      <Image
        src="/img/clouds-f.png"
        alt="Nuvem Frente"
        width={1400}
        height={900}
        priority
        className="absolute top-0 left-1/2 -translate-x-1/2 object-contain opacity-95 pointer-events-none"
      />

      <Image
        src="/img/clouds-r.png"
        alt="Nuvem Direita"
        width={600}
        height={300}
        priority
        className="absolute right-0 top-0 object-contain opacity-90 pointer-events-none"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 lg:p-10 z-50">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl lg:text-4xl tracking-[0.5em] text-brand-secundary font-light font-ogg uppercase">
              Cosmos
            </h1>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={toggleMobileMenu}
              className="text-brand-secundary focus:outline-none relative z-50"
              type="button"
            >
              {isMobileMenuOpen ? (
                <IoClose size={30} />
              ) : (
                <CiMenuBurger size={30} />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-full  mt-4 w-screen bg-brand-secundary/20 backdrop-blur-sm rounded-lg p-4 z-40">
                <ul className="flex flex-col gap-4 font-ogg uppercase text-lg text-brand-secundary">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="uppercase font-ogg flex gap-12 items-center cursor-pointer text-brand-secundary">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <Link
                href="/signup"
                className="text-brand-primary bg-brand-secundary p-4 px-8 rounded-3xl"
              >
                Sign Up
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="relative z-40 flex flex-col h-full">
        <div className="flex flex-col items-center text-center uppercase text-brand-secundary font-ogg pt-32 lg:pt-40">
          <p className="mb-6 text-sm tracking-[0.5em]">Discover</p>
          <h1 className="text-6xl tracking-[0.5em]">Switzerland</h1>
        </div>

        {/* Espaçador */}
        <div className="flex-1"></div>

        {/* Mídias Sociais */}
        <div className="w-full px-8 py-6 flex items-end justify-between font-ogg text-brand-primary relative">
          <div className="flex items-end gap-4 cursor-pointer z-10">
            <FaGithub size={32} />
            <FaInstagram size={32} />
            <FaLinkedin size={32} />
          </div>

          {/* Datas */}
          <div className="flex items-end gap-6 text-right z-10">
            <span className="text-9xl font-light">01</span>
            <span className="w-28 h-px bg-brand-primary mb-2" />
            <span className="text-3xl font-light">05</span>
          </div>

          {/* Scroll - centralizado com absoluto */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex flex-col items-center text-center">
            <p className="text-4xl uppercase tracking-[0.5em] mb-4">Scroll</p>
            <span className="w-px h-[115px] bg-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
