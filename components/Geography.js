import Image from "next/image";

export default function Geography() {
  const cities = [
    { name: "Москва", phone: "8 800 600 35 38", x: 238, y: 5012 },
    { name: "Санкт-Петербург", phone: "8 931 394 46 11", x: 260, y: 4922 },
    { name: "Казань", phone: "8 904 769 96 54", x: 321, y: 5083 },
    { name: "Краснодар", phone: "8 993 307 01 77", x: 104, y: 5142 },
    { name: "Екатеринбург", phone: "8 902 635 22 39", x: 425, y: 5136 },
    { name: "Челябинск", phone: "8 922 636 86 06", x: 413, y: 5227 },
    { name: "Новосибирск", phone: "8 902 635 22 39", x: 617, y: 5247 },
    { name: "Владивосток", phone: "8 902 635 22 39", x: 1213, y: 5338 },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-9 py-16">
      <h2 className="text-[32px] leading-[1.25] uppercase tracking-[0.05em] mb-12 max-w-[1298px]">
        Подключаем к стабильному интернету по всей России
      </h2>

      <div className="relative border border-orange-600 rounded-lg overflow-hidden p-12 shadow-[0_0_7px_4px_rgba(255,76,0,0.6)]">
        {/* Decorative gradient circles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-40 rounded-full bg-gradient-radial from-orange-600/40 via-orange-600/10 to-transparent blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative">
          <Image
            src="/images/map-russia.svg"
            alt="Карта России"
            width={1287}
            height={707}
            className="w-full h-auto"
          />

          {/* City markers */}
          {cities.map((city, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${(city.x / 1440) * 100}%`,
                top: `${(city.y / 6663) * 100}%`,
              }}
            >
              <div className="bg-cyan-400 rounded-full p-3 hover:scale-110 transition-transform cursor-pointer group relative">
                <div className="w-3 h-3 bg-white rounded-full" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-cyan-400 text-black px-4 py-2 rounded whitespace-nowrap text-sm">
                    {city.name}
                    <br />
                    {city.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Image
          src="/images/scroll-icon.svg"
          alt=""
          width={52}
          height={52}
          className="mx-auto animate-bounce"
        />
      </div>
    </section>
  );
}


