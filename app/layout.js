import "./globals.css";

export const metadata = {
  title: "mrnet - Беспроводной интернет для бизнеса",
  description: "Надежный и быстрый интернет для бизнеса. Мультироутер с технологией суммирования каналов. Подключение за 7 минут по всей России.",
  keywords: "интернет для бизнеса, мультироутер, бондинг, стабильный интернет, mrnet",
  authors: [{ name: "mrnet" }],
  openGraph: {
    title: "mrnet - Беспроводной интернет для бизнеса",
    description: "Надежный и быстрый интернет для бизнеса. От 2 990 рублей в месяц.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
