import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Games from "@/components/Games";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
