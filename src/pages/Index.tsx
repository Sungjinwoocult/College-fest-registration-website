import HeroSection from '@/components/HeroSection';
import PaintDrip from '@/components/PaintDrip';
import PreviousEventsSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PaintDrip />
      <PreviousEventsSection />
      <Footer />
    </div>
  );
};

export default Index;
