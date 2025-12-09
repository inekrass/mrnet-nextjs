import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  const documents = [
    "Пользовательское соглашение",
    "Политика в отношении обработки персональных данных",
    "Соглашение об обработке данных",
    "Соглашение о порядке оказания услуг",
    "Соглашение о технической поддержке",
    "Требования по эксплуатации оборудования mrnet",
    "Требования к серверным ресурсам для установки ПО",
  ];

  const instructions = [
    "Инструкция по работе с личным кабинетом",
    "Инструкция по эксплуатации мультироутера 04",
    "Инструкция по эксплуатации мультироутера 05",
    "Инструкция по эксплуатации мультироутера 06",
    "Инструкция по эксплуатации мультироутера 07",
  ];

  return (
    <footer className="max-w-[1440px] mx-auto px-9 py-16 border-t border-white/10">
      <div className="mb-12">
        <h3 className="text-xl uppercase tracking-[0.05em] mb-8 leading-[1.95]">
          Дефолтный подвал
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-12 mb-16">
        <div>
          <div className="mb-8">
            <p className="text-xs leading-[1.63] tracking-[0.01em] font-light">
              ООО «Ньюком Дистрибьюшн»,
              <br />
              ОГРН: 1207700420784,
              <br />
              Юридический адрес: 119017, Российская
              <br />
              Федерация, г. Москва,
              <br />
              ул. Большая Ордынка, д. 54 стр. 2
            </p>
          </div>

          <div className="mb-8">
            <Logo />
          </div>
        </div>

        <div>
          <div className="space-y-2 text-xs leading-[1.63] tracking-[0.01em] font-light">
            {documents.map((doc, index) => (
              <div key={index}>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  {doc}
                </a>
              </div>
            ))}
            <div className="pt-4">
              {instructions.map((instruction, index) => (
                <div key={index}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {instruction}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs leading-[1.63] tracking-[0.01em] font-light space-y-4">
            <div>
              <p>Почта: info@mrnet.ru</p>
              <p>График работы: по будням с 9:00 до 19:00 по Москве</p>
            </div>

            <div>
              <p className="font-normal">Служба поддержки:</p>
              <p>Тел: 8 (495) 308-41-51</p>
              <p>Тел: 8 (800) 600-35-38</p>
              <p>Почта: helpdesk@mrnet.ru</p>
              <p>График работы: 24/7</p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/images/footer-gradient.svg"
              alt=""
              width={368}
              height={327}
              className="opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-white/10">
        <p className="text-xs uppercase tracking-[0.07em] leading-[1.5]">
          КАТЕГОРИЧЕСКИ НОВЫЙ ИНТЕРНЕТ ДЛЯ БИЗНЕСА
        </p>
        <p className="text-xs tracking-[0.01em] font-light leading-[1.4]">
          ©2025 mrnet.ru Все права защищены
        </p>
      </div>
    </footer>
  );
}

