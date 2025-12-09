"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь можно добавить отправку данных на сервер
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-9 py-16">
      <div className="grid grid-cols-[448px_1fr] gap-12">
        <div className="bg-gradient-to-br from-orange-600 via-purple-400 to-cyan-400 rounded-lg p-8 flex items-center">
          <p className="text-[32px] leading-[1.25] uppercase tracking-[0.04em] font-medium">
            Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?
          </p>
        </div>

        <div className="border border-cyan-400 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-12">
          <h2 className="text-lg mb-8">Оставьте ваши контакты</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-8 py-4 rounded-full bg-black text-white border border-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон +7 (___)___-__-__ *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-8 py-4 rounded-full bg-black text-white border border-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <input
                type="text"
                name="telegram"
                placeholder="Ваш ник в tg"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-8 py-4 rounded-full bg-black text-white border border-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 accent-cyan-400"
              />
              <label htmlFor="agree" className="text-xs text-gray-400 leading-[1.58]">
                Я даю согласие на обработку моих персональных данных в форме обращения на странице сайта. 
                Ознакомиться с условиями Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
              </label>
            </div>

            <p className="text-xs text-gray-400">
              * Поля, обязательные для заполнения
            </p>

            <button
              type="submit"
              className="px-12 py-3 rounded-full bg-gradient-to-r from-orange-600 via-purple-400 to-cyan-400 text-black text-xl uppercase tracking-[0.07em] font-medium hover:opacity-90 transition-opacity"
            >
              Начать!
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl uppercase tracking-[0.05em]">
          Услуга доступна только для юридических лиц
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-lg mb-8">Отделы продаж</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { logo: "/images/feature-1-6e1a10.png", alt: "Клиент 1" },
            { logo: "/images/feature-2-258e60.png", alt: "Клиент 2" },
            { logo: "/images/feature-3-1a524a.png", alt: "Клиент 3" },
            { logo: "/images/cta-image-343134.png", alt: "Клиент 4" },
          ].map((client, index) => (
            <div
              key={index}
              className="w-[220px] h-[80px] bg-white rounded-lg flex items-center justify-center p-4 hover:scale-105 transition-transform"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={166}
                height={42}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg mb-8">Наши клиенты</h3>
        <ClientLogos />
      </div>
    </section>
  );
}

function ClientLogos() {
  const clients = [
    { name: "Шоколадница", logo: "🍫" },
    { name: "Ермолино", logo: "🏭" },
    { name: "Аптеки 36,6", logo: "💊" },
    { name: "Кофемания", logo: "☕" },
    { name: "Додо Пицца", logo: "🍕" },
    { name: "Азбука Вкуса", logo: "🛒" },
    { name: "Перекрёсток", logo: "🛍️" },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {clients.map((client, index) => (
        <div
          key={index}
          className="w-[220px] h-[80px] bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer group"
        >
          <div className="text-center">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {client.logo}
            </div>
            <div className="text-black text-xs font-medium">
              {client.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

