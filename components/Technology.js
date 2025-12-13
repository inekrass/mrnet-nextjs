import Image from "next/image";

export default function Technology() {
  return (
    <section className="max-w-[1440px] mx-auto px-9 py-16">
      <div className="flex flex-col xl:flex-row gap-3 xl:items-center">
        <div className="xl:flex-shrink-0">
          <Image
            src="/images/tech-showcase-179d0e.png"
            alt="Технология mrnet"
            width={793}
            height={308}
            className="rounded-lg w-full xl:w-[793px] h-auto"
          />
        </div>

        <div className="relative border border-orange-600 rounded-lg bg-gradient-to-br from-transparent via-orange-600/10 to-orange-600/20 p-8 xl:flex-1">
          <p className="text-2xl leading-[1.25] mb-6">
            Прокачайте свой интернет с высокоскоростными технологиями mrnet. 
            Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), 
            значительно повышая устойчивость и скорость соединения!
          </p>

          <button className="px-8 py-2 rounded-full bg-cyan-400 text-black text-sm uppercase tracking-[0.07em] font-medium hover:bg-cyan-300 transition-colors">
            узнать больше
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-[32px] leading-[1.22] uppercase tracking-[0.05em] mb-8">
          не балансируем
        </h2>
        <h3 className="text-[32px] leading-[1.22] uppercase tracking-[0.05em] mb-12">
          а суммируем
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-8">
            <Image
              src="/images/feature-1-6e1a10.png"
              alt="Управление сетью"
              width={678}
              height={452}
              className="rounded-lg w-full h-auto mb-6"
            />
          </div>

          <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-8">
            <Image
              src="/images/feature-2-258e60.png"
              alt="Аналитика"
              width={678}
              height={452}
              className="rounded-lg w-full h-auto mb-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


