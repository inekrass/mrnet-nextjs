export default function ClientLogos() {
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


