'use client';

import { useState, useEffect, useRef } from 'react';
import { Destination } from '@/components/Destination';
import { HeroWithNavbar } from '@/components/HeroWithNavbar';
import { div } from 'framer-motion/client';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0); // e a posição do scroll vertical atual
  const [isLoaded, setIsLoaded] = useState(false); // ver se a pagina foi carregado apos o timeout
  const [windowHeight, setWindowHeight] = useState(0); // para alculo da altura do navegador

  const rafId = useRef<number | null>(null); // guarda o ID para evital multiplas chamadas no scroll
  const lastScrollY = useRef(0); // guarda o ultimo valor do scroll

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const timer = setTimeout(() => setIsLoaded(true), 150); // controle inicial

    const handleScroll = () => {
      if (rafId.current) return; // evitação dos multiplos

      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
          setScrollY(currentScrollY);
          lastScrollY.current = currentScrollY;
        }
        rafId.current = null;
      });
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollProgress = Math.min(scrollY / (windowHeight * 0.7), 1); // quão avançado está a altura da janela

  const heroOpacity = Math.max(0, 1 - scrollProgress * 1.2); // opacidade do componente HeroWithNavbar
  const heroTransform = scrollY * 0.3; // Distancia que será deslocada

  const destOpacity =
    scrollProgress > 0.2 ? Math.min(1, (scrollProgress - 0.2) * 2.5) : 0; // opacidade da seção Destination
  const destTransform = Math.max(0, (1 - scrollProgress) * 30); // deslocamento do Destination

  // FLAGS PARA RENDERIZAR

  const shouldAnimateHero = scrollProgress < 0.9;
  const shouldAnimateDestination = scrollProgress > 0.1;

  return (
    <div className="relative">
      {/* Hero Section */}
      {shouldAnimateHero && (
        <div
          className={`fixed inset-0 z-10 transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translate3d(0, ${-heroTransform}px, 0`,
            opacity: heroOpacity,
          }}
        >
          <HeroWithNavbar />
        </div>
      )}

      {/* Espaço da altura da janela */}
      <div style={{ height: windowHeight }} />

      {/* Destination Section */}
      <div
        className="relative z-20 bg-brand-primary transition-all duration-500 ease-out"
        style={{
          opacity: shouldAnimateDestination ? destOpacity : 0,
          transform: shouldAnimateDestination
            ? `translate3d(0, ${destTransform}px, 0)`
            : 'translate3d(0, 50px, 0)',
        }}
      >
        <Destination />
      </div>

      {/* Indicador */}
      <div
        className={`fixed bottom-8 left-1/2 z-50 transition-all duration-300 ${
          scrollProgress > 0.15 || !isLoaded
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
        }`}
        style={{
          transform: 'translate3d(-50%, 0, 0)',
          transitionDelay: isLoaded ? '800ms' : '0ms',
        }}
      >
        <div className="w-6 h-10 border-2 border-brand-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-primary/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
