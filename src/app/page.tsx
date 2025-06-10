'use client';

import { useState, useEffect, useRef } from 'react';
import { Destination } from '@/components/Destination';
import { HeroWithNavbar } from '@/components/HeroWithNavbar';
import { MdTouchApp } from 'react-icons/md';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const rafId = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    updateDimensions();

    const timer = setTimeout(() => setIsLoaded(true), 150);

    const handleScroll = () => {
      if (rafId.current) return;

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
      updateDimensions();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Atualiza dimensões após o carregamento completo
    window.addEventListener('load', updateDimensions);

    return () => {
      clearTimeout(timer);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', updateDimensions);
    };
  }, []);

  // Cálculo mais preciso considerando diferentes tamanhos de tela
  const scrollThreshold = Math.max(windowHeight * 0.8, 600); // Mínimo de 600px para telas muito pequenas
  const scrollProgress = Math.min(scrollY / scrollThreshold, 1);

  // Animações do Hero
  const heroOpacity = Math.max(0, 1 - scrollProgress * 1.3);
  const heroTransform = scrollY * 0.4;

  // Animações do Destination com transição mais suave
  const destOpacity =
    scrollProgress > 0.15 ? Math.min(1, (scrollProgress - 0.15) * 1.8) : 0;
  const destTransform = Math.max(0, (1 - scrollProgress) * 40);

  // Flags de renderização otimizadas
  const shouldAnimateHero = scrollProgress < 0.95;
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
            transform: `translate3d(0, ${-heroTransform}px, 0)`,
            opacity: heroOpacity,
            willChange: 'transform, opacity',
          }}
        >
          <HeroWithNavbar />
        </div>
      )}

      {/* Espaço para permitir o scroll */}
      <div style={{ height: `${windowHeight}px` }} />

      {/* Destination Section */}
      <div
        className="relative z-20 bg-brand-secundary transition-all duration-700 ease-out"
        style={{
          opacity: shouldAnimateDestination ? destOpacity : 0,
          transform: shouldAnimateDestination
            ? `translate3d(0, ${destTransform}px, 0)`
            : 'translate3d(0, 60px, 0)',
          willChange: 'transform, opacity',
        }}
      >
        <Destination />
      </div>

      {/* Indicador de Scroll */}
      <div
        className={`fixed bottom-8 left-1/2 z-50 transition-all duration-500 ${
          scrollProgress > 0.2 || !isLoaded
            ? 'opacity-0 pointer-events-none scale-90'
            : 'opacity-100 scale-100'
        }`}
        style={{
          transform: 'translate3d(-50%, 0, 0)',
          transitionDelay: isLoaded ? '1000ms' : '0ms',
        }}
      >
        {/* Indicador Mobile */}
        <div className="flex flex-col items-center md:hidden">
          <MdTouchApp className="w-8 h-8 text-brand-primary/70 animate-bounce" />
          <span className="text-xs text-brand-primary/60 mt-1 font-medium">
            Deslize
          </span>
        </div>

        {/* Indicador Desktop */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-brand-primary/50 rounded-full flex justify-center relative overflow-hidden">
            <div
              className="w-1 h-3 bg-brand-primary/70 rounded-full mt-2 animate-bounce"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          <span className="text-xs text-brand-primary/60 mt-2 font-medium">
            Scroll
          </span>
        </div>
      </div>

      {/* Background overlay para transição mais suave */}
      <div
        className="fixed inset-0 z-5 bg-brand-secundary pointer-events-none"
        style={{
          opacity: Math.max(0, scrollProgress - 0.7) * 2,
          transition: 'opacity 0.3s ease-out',
        }}
      />
    </div>
  );
}
