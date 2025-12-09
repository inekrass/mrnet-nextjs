export default function Testimonials() {
  const testimonials = [
    {
      company: "Шоколадница",
      author: "Чистяков Марк",
      position: "Начальник управления\nУправление эксплуатации и развития ИТ-сервисов",
      text: "Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают...",
    },
    {
      company: "Ермолино",
      author: "Тараканов Михаил",
      position: "Руководитель\nСИТ АО «Подмосковия»",
      text: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником.\nТеперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!",
    },
    {
      company: "Аптеки 36,6",
      author: "Константин Старцев",
      position: "",
      text: "Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета и реактивная поддержка в telegram — важные преимущества mrnet!",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-9 py-16">
      <h2 className="text-[32px] leading-[1.25] uppercase tracking-[0.05em] mb-12 max-w-[786px]">
        95% клиентов выбирают mrnet после тест-драйва
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-6"
          >
            <div className="mb-4 text-cyan-400 text-xs">
              <span className="uppercase font-semibold text-sm">{testimonial.company}</span>
              <br />
              {testimonial.author}
            </div>
            
            {testimonial.position && (
              <div className="text-sm mb-6 whitespace-pre-line">
                {testimonial.position}
              </div>
            )}
            
            <p className="text-lg leading-[1.23]">{testimonial.text}</p>
            
            {index < testimonials.length - 1 && (
              <div className="mt-4 text-right">
                <span className="text-4xl">»</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-12 py-3 rounded-full bg-cyan-400 text-black text-sm uppercase tracking-[0.07em] font-medium hover:bg-cyan-300 transition-colors">
          Испытать все возможности
        </button>
      </div>
    </section>
  );
}


