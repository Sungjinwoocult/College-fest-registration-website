import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Shield } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with modern technologies to meet your unique business needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and reliable cloud architecture designed for growth.',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning to transform your business processes.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-soft-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-retro text-deep-indigo mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl font-inter text-deep-indigo/70 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-card border-2 border-periwinkle rounded-[20px] p-8 h-full transition-all duration-300 hover:float-shadow">
                <div className="bg-periwinkle/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-mint-green/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-periwinkle group-hover:text-mint-green transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-retro text-deep-indigo mb-3">
                  {service.title}
                </h3>
                
                <p className="text-base font-inter text-deep-indigo/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
