import HeroSection from '@/components/HeroSection';
import PaintDrip from '@/components/PaintDrip';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PaintDrip />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
