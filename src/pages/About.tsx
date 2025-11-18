import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, MapPin, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Participants', value: '2000+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events', value: '50+', color: 'text-green-600' },
    { icon: Trophy, label: 'Prize Pool', value: '₹3,00,000', color: 'text-yellow-600' },
    { icon: MapPin, label: 'Venue', value: 'SVIT Campus', color: 'text-purple-600' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Innovation Hub',
      description: 'A platform where creativity meets technology, fostering innovation and collaboration among students.'
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Building lasting connections between students, faculty, and industry professionals.'
    },
    {
      icon: Trophy,
      title: 'Excellence Recognition',
      description: 'Celebrating talent and achievements across technical, cultural, and sports domains.'
    }
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Header */}
      <section className="bg-periwinkle py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-retro text-deep-indigo mb-4"
          >
            About Sanchalana 2k26
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            SVIT's flagship technical, cultural, and sports extravaganza!
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&crop=center"
              alt="SVIT Campus"
              className="w-full h-96 object-cover rounded-[20px] shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-indigo/80 to-periwinkle/80 rounded-[20px] flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-retro mb-4">
                  Welcome to SVIT
                </h2>
                <p className="text-xl md:text-2xl font-inter max-w-2xl mx-auto">
                  SAI VIDYA INSTITUTE OF TECHNOLOGY - Where Innovation Meets Excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-periwinkle rounded-full mb-4">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-retro text-deep-indigo mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-inter text-deep-indigo/70 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-retro text-deep-indigo mb-6">
                Our Vision
              </h2>
              <p className="text-lg font-inter text-deep-indigo/80 leading-relaxed mb-6">
                Sanchalana 2k26 is SVIT's annual techno-cultural fest that brings together the brightest minds from across the country. Our mission is to create a vibrant platform where innovation, creativity, and sportsmanship converge to inspire the next generation of leaders and innovators.
              </p>
              <p className="text-lg font-inter text-deep-indigo/80 leading-relaxed mb-6">
                With over 50 events spanning technical competitions, cultural performances, and sports tournaments, Sanchalana provides the perfect environment for students to showcase their talents, learn new skills, and build lasting memories.
              </p>
              <p className="text-lg font-inter text-deep-indigo/80 leading-relaxed">
                Join us in celebrating the spirit of innovation and excellence that defines SVIT's legacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="Sanchalana 2k26 Theme"
                className="w-full h-80 object-cover rounded-[20px] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-periwinkle/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-retro text-deep-indigo mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl font-inter text-deep-indigo/70 max-w-3xl mx-auto">
              Discover the unique aspects that make Sanchalana 2k26 an unforgettable experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="bg-card border-2 border-periwinkle rounded-[20px] h-full transition-all duration-300 hover:float-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-green rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-deep-indigo" />
                      </div>
                      <h3 className="text-2xl font-retro text-deep-indigo mb-4 group-hover:text-periwinkle transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base font-inter text-deep-indigo/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 bg-periwinkle/50">
        <div className="max-w-7xl mx-auto text-center">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-card/80 backdrop-blur-sm hover:bg-card text-deep-indigo border-2 border-deep-indigo/30 font-inter font-semibold px-8 py-4 rounded-[20px] transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
