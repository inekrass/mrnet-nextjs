import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Monitoring from "./components/Monitoring";
import Management from "./components/Management";
import Testimonials from "./components/Testimonials";
import Geography from "./components/Geography";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-[113px]">
        <Hero />
        <Features />
        <Technology />
        <Monitoring />
        <Management />
        <Testimonials />
        <Geography />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
