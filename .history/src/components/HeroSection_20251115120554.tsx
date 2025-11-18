import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-periwinkle">
      {/* Header at top */}
      <div className="relative z-20 text-center py-8 px-4">
        <h1 className="text-6xl md:text-8xl font-retro text-deep-indigo" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3), 2px 2px 0px rgba(139, 149, 246, 0.5)' }}>
          Sanchalana 2k26
        </h1>
        <p className="text-xl md:text-2xl font-inter text-mint-green font-semibold max-w-md mx-auto mt-4">
          SVIT's flagship fest
        </p>
      </div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qbUlu5B0G9NJrvlR/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Buttons at bottom of spline */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center items-center pb-8 pointer-events-none">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
          <Button
            onClick={() => navigate('/events')}
            variant="outline"
            className="bg-card/80 backdrop-blur-sm hover:bg-card text-deep-indigo border-2 border-deep-indigo/30 font-inter font-semibold px-8 py-6 text-lg rounded-[20px] transition-all duration-300 hover:scale-105"
          >
            Events
          </Button>
          <Button
            onClick={() => navigate('/register')}
            className="bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold px-8 py-6 text-lg rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105"
          >
            Register
          </Button>
          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="bg-card/80 backdrop-blur-sm hover:bg-card text-deep-indigo border-2 border-deep-indigo/30 font-inter font-semibold px-8 py-6 text-lg rounded-[20px] transition-all duration-300 hover:scale-105"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/about')}
            variant="outline"
            className="bg-card/80 backdrop-blur-sm hover:bg-card text-deep-indigo border-2 border-deep-indigo/30 font-inter font-semibold px-8 py-6 text-lg rounded-[20px] transition-all duration-300 hover:scale-105"
          >
            About
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
