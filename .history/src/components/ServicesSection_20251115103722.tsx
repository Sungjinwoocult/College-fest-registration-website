import { motion } from 'framer-motion';
import { Users, Trophy, Calendar } from 'lucide-react';

const previousEvents = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    title: 'Hackathon 2024',
    description: 'Over 500 students participated in our 24-hour coding challenge, building innovative solutions for real-world problems.',
    stats: '500+ Students',
    prize: '₹1,00,000 Prize Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center',
    title: 'Startup Pitch Fest 2024',
    description: 'Entrepreneurial minds showcased their startup ideas to a panel of industry experts and investors.',
    stats: '200+ Participants',
    prize: '₹50,000 Prize Pool',
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center',
    title: 'Tech Workshops 2024',
    description: 'Hands-on learning sessions covering cutting-edge technologies from AI to Web Development.',
    stats: '300+ Attendees',
    prize: 'Free Resources',
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop&crop=center',
    title: 'Networking Mixer 2024',
    description: 'Students connected with alumni, industry professionals, and fellow tech enthusiasts.',
    stats: '400+ Connections',
    prize: 'Networking Opportunities',
  },
];

const PreviousEventsSection = () => {
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
            Previous Events
          </h2>
          <p className="text-lg md:text-xl font-inter text-deep-indigo/70 max-w-2xl mx-auto mb-8">
            Relive the excitement of our past tech fest events
          </p>

          {/* Prize Pool Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-mint-green to-periwinkle text-deep-indigo font-retro text-3xl md:text-4xl px-8 py-4 rounded-[20px] retro-shadow"
          >
            <Trophy className="w-8 h-8" />
            ₹2,00,000 Prize Pool
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-card border-2 border-periwinkle rounded-[20px] overflow-hidden h-full transition-all duration-300 hover:float-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-retro text-deep-indigo mb-3 group-hover:text-periwinkle transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-base font-inter text-deep-indigo/70 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm font-inter text-deep-indigo/80">
                      <Users className="w-4 h-4 text-periwinkle" />
                      <span>{event.stats}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm font-inter text-deep-indigo/80">
                      <Trophy className="w-4 h-4 text-mint-green" />
                      <span>{event.prize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEventsSection;
