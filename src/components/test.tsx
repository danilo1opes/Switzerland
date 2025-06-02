'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const containerRef = useRef(null);

  // Scroll progress dentro da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Movimento das nuvens
  const cloudFrontY = useTransform(scrollYProgress, [0, 1], [0, 200]); // rápida
  const cloudBackY = useTransform(scrollYProgress, [0, 1], [0, 100]); // lenta

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#f9f7f4]"
    >
      {/* Fundo - Montanhas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/mountain-bg.jpg"
          alt="Montanhas"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Nuvens atrás */}
      <motion.div style={{ y: cloudBackY }} className="absolute inset-0 z-10">
        <Image
          src="/img/clouds.png"
          alt="Nuvens fundo"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Nuvens frente esquerda */}
      <motion.div style={{ y: cloudFrontY }} className="absolute inset-0 z-20">
        <Image
          src="/img/clouds-f.png"
          alt="Nuvens frente"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Nuvens frente direita */}
      <motion.div style={{ y: cloudBackY }} className="absolute inset-0 z-20">
        <Image
          src="/img/clouds-r.png"
          alt="Nuvens direita"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Conteúdo */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center text-black font-ogg">
        <p className="mb-6 text-sm uppercase tracking-widest">Discover</p>
        <h1 className="text-6xl sm:text-8xl tracking-widest">Switzerland</h1>
        <p className="mt-10 text-sm uppercase tracking-widest">Scroll</p>
      </div>
    </section>
  );
}
