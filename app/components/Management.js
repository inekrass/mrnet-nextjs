export default function Management() {
  return (
    <section className="max-w-[1440px] mx-auto px-9 py-16">
      <h2 className="text-[32px] leading-[1.25] uppercase tracking-[0.05em] mb-12 max-w-[1141px]">
        Решение, созданное айтишниками для айтишников
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="border border-orange-600 rounded-lg bg-gradient-to-br from-orange-600/20 via-transparent to-transparent p-8">
          <h3 className="text-[26px] leading-[1.23] uppercase tracking-[0.05em] mb-4">
            Ценим ваше время
          </h3>
          <p className="text-lg leading-[1.23]">
            Подключите мультироутер с быстрым интернетом всего за 7 минут. 
            Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся).
            <br />
            <br />
            Вы получаете надёжную связь и отсутствие головной боли в виде договоров 
            с разными провайдерами
          </p>
        </div>

        <div className="border border-orange-600 rounded-lg bg-gradient-to-br from-orange-600/20 via-transparent to-transparent p-8">
          <h3 className="text-[26px] leading-[1.23] uppercase tracking-[0.05em] mb-4">
            Безграничные
            <br />
            Возможности
          </h3>
          <p className="text-lg leading-[1.23]">
            Подберём оборудование для новых точек и оперативно подключим к интернету 
            по любому адресу.
            <br />
            <br />
            Всё это — без необходимости заключения дополнительных контрактов
          </p>
        </div>

        <div className="border border-orange-600 rounded-lg bg-gradient-to-br from-orange-600/20 via-transparent to-transparent p-8">
          <h3 className="text-[26px] leading-[1.23] uppercase tracking-[0.05em] mb-4">
            Индивидуальный подход
          </h3>
          <p className="text-lg leading-[1.23] mb-6">
            Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.
            <br />
            <br />
            Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт
          </p>
          <button className="px-8 py-2 rounded-full bg-black text-white text-sm uppercase tracking-[0.07em] font-medium border border-white hover:bg-white hover:text-black transition-colors">
            заявка
          </button>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-br from-orange-600 via-purple-400 to-cyan-400 rounded-lg p-12">
        <h2 className="text-[45px] leading-[1.18] uppercase font-medium mb-6">
          Попробуйте
          <br />
          14 дней бесплатно
        </h2>
        <p className="text-2xl leading-[1.25] mb-8 max-w-[613px]">
          Развивайте свою инфру с mrnet. Без лишних затрат и костылей. 
          Высокоскоростной интернет — удобно, эффективно!
        </p>
        <button className="px-12 py-3 rounded-full bg-gradient-to-r from-orange-600 via-purple-400 to-cyan-400 text-black text-xl uppercase tracking-[0.07em] font-medium hover:opacity-90 transition-opacity">
          Начать!
        </button>
      </div>
    </section>
  );
}


