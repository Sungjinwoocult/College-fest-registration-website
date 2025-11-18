import { motion } from 'framer-motion';
import { Bell, Clock, AlertTriangle, Trophy, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const announcements = [
  {
    id: 1,
    type: 'urgent',
    title: 'Registration Deadline Extended!',
    message: 'Due to popular demand, registration deadline has been extended to January 25th, 2025. Don\'t miss out!',
    timestamp: '2025-01-20T10:30:00Z',
    icon: AlertTriangle,
    color: 'text-red-600'
  },
  {
    id: 2,
    type: 'winner',
    title: 'Hackathon Winners Announced!',
    message: 'Congratulations to Team "CodeMasters" for winning the 24-hour hackathon! Special mention to runners-up.',
    timestamp: '2025-01-19T16:45:00Z',
    icon: Trophy,
    color: 'text-yellow-600'
  },
  {
    id: 3,
    type: 'update',
    title: 'New Event Added: AI Workshop',
    message: 'We\'ve added an exciting AI workshop with industry experts. Limited seats available!',
    timestamp: '2025-01-19T14:20:00Z',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    id: 4,
    type: 'reminder',
    title: 'Sports Tournament Starts Tomorrow',
    message: 'Basketball and football tournaments begin at 9 AM. Make sure to arrive 30 minutes early for registration.',
    timestamp: '2025-01-18T18:15:00Z',
    icon: Calendar,
    color: 'text-green-600'
  },
  {
    id: 5,
    type: 'info',
    title: 'Venue Change Notice',
    message: 'Cultural Dance Competition has been moved to Main Auditorium due to expected large crowd.',
    timestamp: '2025-01-18T12:00:00Z',
    icon: Bell,
    color: 'text-purple-600'
  },
  {
    id: 6,
    type: 'winner',
    title: 'Dance Competition Results',
    message: 'Team "Rhythm & Beats" takes home the first prize in Cultural Dance Competition!',
    timestamp: '2025-01-17T20:30:00Z',
    icon: Trophy,
    color: 'text-yellow-600'
  },
  {
    id: 7,
    type: 'update',
    title: 'Prize Pool Increased!',
    message: 'Thanks to our sponsors, we\'ve increased the total prize pool to ₹3,00,000! More motivation to participate.',
    timestamp: '2025-01-17T11:45:00Z',
    icon: Trophy,
    color: 'text-yellow-600'
  },
  {
    id: 8,
    type: 'reminder',
    title: 'Technical Workshop Tomorrow',
    message: 'Web Development workshop starts at 1 PM in Tech Lab B. Bring your laptops!',
    timestamp: '2025-01-16T15:20:00Z',
    icon: Calendar,
    color: 'text-green-600'
  }
];

const Announcements = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = currentTime;
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-red-200 bg-red-50';
      case 'winner': return 'border-yellow-200 bg-yellow-50';
      case 'update': return 'border-blue-200 bg-blue-50';
      case 'reminder': return 'border-green-200 bg-green-50';
      case 'info': return 'border-purple-200 bg-purple-50';
      default: return 'border-periwinkle bg-periwinkle/10';
    }
  };

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
            Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Stay updated with the latest news and announcements from Sanchalana 2k26!
          </motion.p>
        </div>
      </section>

      {/* Live Clock */}
      <section className="py-4 px-4 bg-deep-indigo text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-inter font-medium">
              Live: {currentTime.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Announcements Feed */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {announcements.map((announcement, index) => {
              const IconComponent = announcement.icon;
              return (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className={`border-2 ${getTypeColor(announcement.type)} rounded-[20px] transition-all duration-300 hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-white border-2 ${announcement.type === 'urgent' ? 'border-red-200' : announcement.type === 'winner' ? 'border-yellow-200' : announcement.type === 'update' ? 'border-blue-200' : announcement.type === 'reminder' ? 'border-green-200' : 'border-purple-200'}`}>
                          <IconComponent className={`w-6 h-6 ${announcement.color}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-retro text-deep-indigo group-hover:text-periwinkle transition-colors duration-300">
                              {announcement.title}
                            </h3>
                            <span className="text-sm font-inter text-deep-indigo/60 flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {formatTime(announcement.timestamp)}
                            </span>
                          </div>

                          <p className="text-base font-inter text-deep-indigo/80 leading-relaxed">
                            {announcement.message}
                          </p>
                        </div>
                      </div>
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

export default Announcements;
