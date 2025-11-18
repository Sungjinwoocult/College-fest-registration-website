import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Tech Talk: AI Revolution',
    description: 'Explore the latest advancements in artificial intelligence and machine learning with industry experts.',
    date: '2025-01-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center',
    category: 'technical',
  },
  {
    id: 2,
    title: 'Hackathon Kickoff',
    description: 'Join us for an exciting 24-hour coding challenge where teams compete to build innovative solutions.',
    date: '2025-01-16',
    time: '9:00 AM - 9:00 AM (Next Day)',
    location: 'Computer Lab A',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    category: 'technical',
  },
  {
    id: 3,
    title: 'Startup Pitch Competition',
    description: 'Watch aspiring entrepreneurs pitch their startup ideas to a panel of venture capitalists.',
    date: '2025-01-17',
    time: '2:00 PM - 5:00 PM',
    location: 'Innovation Hub',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center',
    category: 'technical',
  },
  {
    id: 4,
    title: 'Workshop: Web Development',
    description: 'Hands-on workshop covering modern web development techniques with React and Node.js.',
    date: '2025-01-18',
    time: '1:00 PM - 4:00 PM',
    location: 'Tech Lab B',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center',
    category: 'technical',
  },
  {
    id: 5,
    title: 'Basketball Tournament',
    description: 'Compete in our inter-college basketball tournament and showcase your athletic skills.',
    date: '2025-01-19',
    time: '9:00 AM - 6:00 PM',
    location: 'Sports Complex',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=250&fit=crop&crop=center',
    category: 'sports',
  },
  {
    id: 6,
    title: 'Football Championship',
    description: 'Join the ultimate football showdown between colleges in our championship event.',
    date: '2025-01-20',
    time: '10:00 AM - 5:00 PM',
    location: 'Football Ground',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop&crop=center',
    category: 'sports',
  },
  {
    id: 7,
    title: 'Cultural Dance Competition',
    description: 'Showcase your dance moves in our vibrant cultural dance competition featuring various traditional and modern styles.',
    date: '2025-01-21',
    time: '6:00 PM - 10:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop&crop=center',
    category: 'cultural',
  },
  {
    id: 8,
    title: 'Music Fest',
    description: 'Experience an amazing lineup of musical performances from talented artists across colleges.',
    date: '2025-01-22',
    time: '7:00 PM - 11:00 PM',
    location: 'Open Air Theatre',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center',
    category: 'cultural',
  },
  {
    id: 9,
    title: 'Drama & Theater Showcase',
    description: 'Watch captivating theatrical performances and dramatic presentations from various college groups.',
    date: '2025-01-23',
    time: '5:00 PM - 9:00 PM',
    location: 'Theater Hall',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=250&fit=crop&crop=center',
    category: 'cultural',
  },
];

const Events = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'technical', name: 'Technical', count: events.filter(e => e.category === 'technical').length },
    { id: 'sports', name: 'Sports', count: events.filter(e => e.category === 'sports').length },
    { id: 'cultural', name: 'Cultural', count: events.filter(e => e.category === 'cultural').length },
  ];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

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
            Events Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Discover amazing events happening at our fest. Register, attend, and make unforgettable memories!
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-periwinkle/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3 text-deep-indigo/70">
              <Filter className="w-5 h-5" />
              <span className="font-inter font-medium">Filter by Category</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-[20px] font-inter font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-mint-green hover:bg-mint-green/90 text-deep-indigo retro-shadow'
                      : 'bg-card hover:bg-card/80 text-deep-indigo border-2 border-periwinkle/30 hover:border-periwinkle'
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="bg-card border-2 border-periwinkle rounded-[20px] overflow-hidden h-full transition-all duration-300 hover:float-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium capitalize ${
                        event.category === 'technical' ? 'bg-blue-100 text-blue-800' :
                        event.category === 'sports' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-retro text-deep-indigo group-hover:text-periwinkle transition-colors duration-300">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base font-inter text-deep-indigo/70 leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm font-inter text-deep-indigo/80">
                        <Calendar className="w-4 h-4 text-periwinkle" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm font-inter text-deep-indigo/80">
                        <Clock className="w-4 h-4 text-periwinkle" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm font-inter text-deep-indigo/80">
                        <MapPin className="w-4 h-4 text-periwinkle" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold py-3 rounded-[15px] retro-shadow transition-all duration-300 hover:scale-105"
                    >
                      Register for Event
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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

export default Events;
