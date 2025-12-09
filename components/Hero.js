import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-9 py-8 md:py-16">
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-orange-600/20 via-transparent to-transparent flex flex-col xl:flex-row xl:gap-3">
        
        {/* Изображение - показывается на всех экранах до xl, первым элементом */}
        <div className="relative w-full h-[270px] md:h-[400px] mb-4 xl:hidden">
          <Image
            src="/images/hero-image-34930b.png"
            alt="Мультироутер"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="p-3 md:p-5 relative z-10 border border-orange-600 rounded-[8px] xl:h-[525px] xl:flex xl:flex-col xl:justify-between xl:flex-1">
          <h1 className="text-3xl md:text-[50px] leading-[1.1] uppercase tracking-[0.03em] font-normal mb-3 max-w-full md:max-w-[747px]">
            Беспроводной <br /> интернет для бизнеса
          </h1>
          
          <div className="text-xl md:text-[26px] leading-[1.23] uppercase tracking-[0.06em]">
            от <strong>2 990</strong> рублей* в месяц!
            <br />
            Установка по любому адресу в РФ!
          </div>

          <button className="min-w-[305px] md:max-w-[334px] px-6 md:px-8 py-2 my-7 md:my-5 rounded-full bg-cyan-400 text-black text-xs md:text-sm uppercase tracking-[0.07em] font-medium hover:bg-cyan-300 transition-colors">
            попробовать
          </button>

          <div className="text-base md:text-lg mb-4 max-w-full md:max-w-[790px]">
            <p className="flex items-center gap-1 m-0 leading-none">
              <span className="text-white text-xl leading-none">•</span>
              Мультироутер с технологией суммирования нескольких каналов связи в один
            </p>
            <p className="flex items-center gap-1 m-0 leading-none">
              <span className="text-white text-xl leading-none">•</span>
              Высокая скорость и отказоустойчивость интернет-соединения
            </p>
            <p className="flex items-center gap-1 m-0 leading-none">
              <span className="text-white text-xl leading-none">•</span>
              Единый договор на ПО, оборудование и связь
            </p>
            <p className="flex items-center gap-1 m-0 leading-none">
              <span className="text-white text-xl leading-none">•</span>
              Простое подключение за 7 минут
            </p>
            <p className="flex items-center gap-1 m-0 leading-none">
              <span className="text-white text-xl leading-none">•</span>
              Моментальная техподдержка 24/7 в Telegram
            </p>
          </div>

          <p className="text-xs mt-3 text-gray-400 max-w-full md:max-w-[563px]">
            * Без учета стоимости оборудования, возможен выкуп оборудования или аренда, 
            стоимость будет зависеть от модели мультироутера
          </p>
        </div>

        <div className="hidden xl:block relative xl:w-[563px] xl:h-[525px] flex-shrink-0">
          <Image
            src="/images/hero-image-34930b.png"
            alt="Мультироутер"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

