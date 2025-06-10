'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay,
        ease: 'easeOut',
      },
    }),
  };

  const cloudVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background-image */}
      <div className="absolute inset-0 bg-forest-responsive bg-cover bg-center"></div>

      {/* Nuvens */}
      <motion.div variants={cloudVariants} initial="hidden" animate="visible">
        <Image
          src="/img/cloud-full.svg"
          alt="Nuvem Esquerda"
          width={1920}
          height={600}
          priority
          className="absolute left-0 top-0 opacity-90 pointer-events-none
               w-[120vw] sm:w-[110vw] md:w-[105vw] lg:w-[100vw] xl:w-[100vw] 2xl:w-full
               h-auto object-cover"
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute top-0 left-0 w-full p-6 lg:p-10 z-50"
      >
        <div>
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1
                style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
                className="text-2xl md:text-3xl lg:text-4xl tracking-[0.5em] text-brand-secundary font-light font-ogg uppercase"
              >
                Forest
              </h1>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-brand-secundary focus:outline-none z-50 relative"
                type="button"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <IoClose size={30} />
                ) : (
                  <CiMenuBurger size={30} />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul
                style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
                className="uppercase font-ogg flex gap-12 items-center cursor-pointer text-brand-secundary"
              >
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
                <Link
                  href="/"
                  className="text-brand-primary bg-brand-secundary p-4 px-8 rounded-3xl"
                >
                  Sign Up
                </Link>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div
                className="fixed inset-0 bg-brand-secundary/35 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <div className="absolute left-0 right-0 top-full mt-4 mx-6 bg-brand-secundary/90 backdrop-blur-md rounded-lg p-6 z-50 shadow-2xl">
                <ul
                  style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
                  className="flex flex-col gap-6 font-ogg uppercase text-lg text-brand-primary"
                >
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 hover:opacity-70 transition-opacity"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-block text-brand-secundary bg-brand-primary p-4 px-8 rounded-3xl w-fit hover:opacity-90 transition-opacity"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Conteúdo principal */}
      <div className="relative z-40 flex flex-col h-full">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="
            absolute 
            left-1/2 -translate-x-1/2 
            top-1/2 -translate-y-1/2 
            xl:static xl:left-auto xl:top-auto xl:translate-x-0 xl:translate-y-0 xl:pt-32
            flex flex-col items-center text-center 
            uppercase font-ogg
          "
        >
          <p
            style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
            className="
              mb-4 sm:mb-6 
              text-[10px] md:text-xl lg:text-3xl 
              tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em]
              text-brand-primary xl:text-brand-secundary
            "
          >
            Discover
          </p>
          <h1
            style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
            className="
              text-3xl md:text-6xl lg:text-7xl 
              tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em]
              text-brand-primary xl:text-brand-secundary
            "
          >
            Switzerland
          </h1>
        </motion.div>

        {/* Espaçador */}
        <div className="flex-1"></div>

        {/* Mídias Sociais */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.6}
          className="w-full px-8 py-6 flex items-center justify-between font-ogg text-brand-primary relative"
        >
          <div className="flex items-end gap-4 cursor-pointer z-10">
            <Link href="https://github.com/danilo1opes">
              <FaGithub className="text-2xl md:text-4xl" />
            </Link>
            <Link href="https://www.instagram.com/danilo1opes/">
              <FaInstagram className="text-2xl md:text-4xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/danilo-1opes/">
              <FaLinkedin className="text-2xl md:text-4xl" />
            </Link>
          </div>

          {/* Datas */}
          <div className="flex items-end gap-[10px] md:gap-6 text-right z-10">
            <span
              style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
              className="text-4xl md:text-7xl xl:text-9xl "
            >
              01
            </span>
            <span className="w-6 md:w-16 lg:w-28 h-px bg-brand-primary mb-2" />
            <span
              style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
              className="text-base md:text-4xl"
            >
              05
            </span>
          </div>

          {/* Scroll */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex flex-col items-center text-center">
            <p
              style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}
              className="text-xl lg:text-5xl uppercase tracking-[0.5em] mb-4"
            >
              Scroll
            </p>
            <span className="w-px h-[80px] md:h-[115px] bg-brand-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
