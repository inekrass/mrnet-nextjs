'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Clients() {
  const scrollRef = useRef(null);

  const clients = [
    { name: "36,6", logo: "/images/clients/36,6.png" },
    { name: "Nadezhda", logo: "/images/clients/nadezhda.png" },
    { name: "Eyecrafft", logo: "/images/clients/eyecrafft.png" },
    { name: "Pokupochka", logo: "/images/clients/pokupochka.png" },
    { name: "OPTK", logo: "/images/clients/optk.png" },
    { name: "Alenka", logo: "/images/clients/alenka.png" },
    { name: "Krasniy", logo: "/images/clients/krasnyi.png" },
  ];

  // Дублируем массив для бесшовной анимации
  const duplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      const itemWidth = scrollContainer.scrollWidth / 3;
      
      if (scrollPosition >= itemWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-9 py-4 md:py-7" suppressHydrationWarning>
      <h2 className="text-[24px] md:text-[32px] uppercase mb-8 md:mb-12 text-left tracking-[0.02em]" suppressHydrationWarning>
        500+ КЛИЕНТОВ УЖЕ С НАМИ
      </h2>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" suppressHydrationWarning />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" suppressHydrationWarning/>

        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-3 overflow-x-hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="shrink-0 w-[140px] h-[51px] md:w-[220px] md:h-[80px] relative bg-black rounded-lg flex items-center justify-center p-4 md:p-6"
            suppressHydrationWarning>
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain p-3 md:p-4"
                sizes="(max-width: 768px) 140px, 220px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

