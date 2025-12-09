import Image from "next/image";

export default function Monitoring() {
  return (
    <section className="max-w-[1440px] mx-auto px-9 py-16">
      <h2 className="text-[32px] leading-[1.25] uppercase tracking-[0.05em] mb-12 max-w-[1023px]">
        Настраивайте сеть и управляйте всеми устройствами через единый личный кабинет
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-6">
          <h3 className="text-[26px] leading-[1.5] uppercase tracking-[0.05em] mb-4">
            мониторинг
          </h3>
          <p className="text-lg leading-[1.23]">
            Графики потребления трафика
            <br />
            <br />
            Просмотр подключенных к мультироутеру сетевых устройств
          </p>
        </div>

        <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-6">
          <h3 className="text-[26px] leading-[1.5] uppercase tracking-[0.05em] mb-4">
            тонкая настройка
          </h3>
          <p className="text-lg leading-[1.34]">
            Настройка тоннелей PPTP, L2TP, GRE, IPIP
            <br />
            <br />
            Настройка пробросов портов
          </p>
        </div>
      </div>

      <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent overflow-hidden">
        <Image
          src="/images/feature-3-1a524a.png"
          alt="Панель управления"
          width={793}
          height={452}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}


