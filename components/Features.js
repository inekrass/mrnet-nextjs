'use client';

import Image from "next/image";
import { useState } from "react";

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      icon: "/images/vector-gradient.svg",
      title: "надежный и быстрый интернет, который не падает",
    },
    {
      icon: "/images/tech-icon-1.svg",
      title: "контроль всей сети через гибкую настройку",
    },
    {
      icon: "/images/tech-icon-2.svg",
      title: "единый инструмент для масштабирования по всей стране"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-9 py-8 md:py-16">
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-8"
          >
            <div className="mb-6 h-[60px] flex items-center">
              <Image
                src={feature.icon}
                alt=""
                width={82}
                height={60}
                className="w-auto h-[60px]"
              />
            </div>
            
            <p className="text-[20px] leading-[1.34] uppercase tracking-[0.04em]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-8">
                  <div className="mb-6 h-[60px] flex items-center">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={82}
                      height={60}
                      className="w-auto h-[60px]"
                    />
                  </div>
                  
                  <p className="text-[20px] leading-[1.34] uppercase tracking-[0.04em]">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-8 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors flex-shrink-0"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cyan-400' : 'border-2 border-cyan-400 bg-transparent'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors flex-shrink-0"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
