import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/images/vector-gradient.svg",
      title: "надежный и быстрый интернет, который не падает",
      description: "500+ клиентов уже с нами",
    },
    {
      icon: "/images/tech-icon-1.svg",
      title: "КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ",
      description: "технология",
    },
    {
      icon: "/images/tech-icon-2.svg",
      title: "Единый инструмент для масштабирования по всей стране",
      description: "не балансируем",
      subtitle: "а суммируем",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-9 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-6 md:p-8"
          >
            <div className="mb-4 md:mb-6">
              <Image
                src={feature.icon}
                alt=""
                width={82}
                height={60}
                className="mb-4 w-16 h-auto md:w-[82px]"
              />
            </div>
            
            <p className="text-base md:text-[20px] leading-[1.34] uppercase tracking-[0.04em] mb-4">
              {feature.title}
            </p>
            
            <p className="text-2xl md:text-[32px] leading-[1.22] uppercase tracking-[0.05em]">
              {feature.description}
            </p>
            
            {feature.subtitle && (
              <p className="text-[32px] leading-[1.22] uppercase tracking-[0.05em]">
                {feature.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

