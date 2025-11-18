import { motion } from 'framer-motion';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const departments = [
  {
    id: 1,
    name: 'Computer Science',
    points: 2850,
    events: 12,
    rank: 1,
    change: '+150',
    color: 'from-yellow-400 to-yellow-600',
    icon: Trophy
  },
  {
    id: 2,
    name: 'Information Technology',
    points: 2720,
    events: 11,
    rank: 2,
    change: '+120',
    color: 'from-gray-300 to-gray-500',
    icon: Medal
  },
  {
    id: 3,
    name: 'Electronics & Communication',
    points: 2580,
    events: 10,
    rank: 3,
    change: '+95',
    color: 'from-amber-600 to-amber-800',
    icon: Award
  },
  {
    id: 4,
    name: 'Mechanical Engineering',
    points: 2340,
    events: 9,
    rank: 4,
    change: '+80',
    color: 'from-blue-400 to-blue-600',
    icon: TrendingUp
  },
  {
    id: 5,
    name: 'Civil Engineering',
    points: 2210,
    events: 8,
    rank: 5,
    change: '+65',
    color: 'from-green-400 to-green-600',
    icon: TrendingUp
  },
  {
    id: 6,
    name: 'Electrical Engineering',
    points: 2150,
    events: 8,
    rank: 6,
    change: '+55',
    color: 'from-purple-400 to-purple-600',
    icon: TrendingUp
  },
  {
    id: 7,
    name: 'Arts & Humanities',
    points: 1980,
    events: 7,
    rank: 7,
    change: '+40',
    color: 'from-pink-400 to-pink-600',
    icon: TrendingUp
  },
  {
    id: 8,
    name: 'Commerce',
    points: 1820,
    events: 6,
    rank: 8,
    change: '+30',
    color: 'from-indigo-400 to-indigo-600',
    icon: TrendingUp
  }
];

const Scoreboard = () => {
  const navigate = useNavigate();
  const [sortedDepartments, setSortedDepartments] = useState(departments);
  const [sortBy, setSortBy] = useState<'points' | 'events'>('points');

  useEffect(() => {
    const sorted = [...departments].sort((a, b) => {
      if (sortBy === 'points') {
        return b.points - a.points;
      }
      return b.events - a.events;
    }).map((dept, index) => ({ ...dept, rank: index + 1 }));

    setSortedDepartments(sorted);
  }, [sortBy]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-8 h-8 text-yellow-500" />;
      case 2: return <Medal className="w-8 h-8 text-gray-400" />;
      case 3: return <Award className="w-8 h-8 text-amber-600" />;
      default: return <span className="w-8 h-8 flex items-center justify-center text-2xl font-retro text-deep-indigo">#{rank}</span>;
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
            Scoreboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Department-wise leaderboard for Sanchalana 2k26!
          </motion.p>
        </div>
      </section>

      {/* Sort Controls */}
      <section className="py-8 px-4 bg-white border-b border-periwinkle/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setSortBy('points')}
              variant={sortBy === 'points' ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-[20px] font-inter font-medium transition-all duration-300 ${
                sortBy === 'points'
                  ? 'bg-mint-green hover:bg-mint-green/90 text-deep-indigo retro-shadow'
                  : 'bg-card hover:bg-card/80 text-deep-indigo border-2 border-periwinkle/30 hover:border-periwinkle'
              }`}
            >
              Sort by Points
            </Button>
            <Button
              onClick={() => setSortBy('events')}
              variant={sortBy === 'events' ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-[20px] font-inter font-medium transition-all duration-300 ${
                sortBy === 'events'
                  ? 'bg-mint-green hover:bg-mint-green/90 text-deep-indigo retro-shadow'
                  : 'bg-card hover:bg-card/80 text-deep-indigo border-2 border-periwinkle/30 hover:border-periwinkle'
              }`}
            >
              Sort by Events
            </Button>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {sortedDepartments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className={`border-2 border-periwinkle rounded-[20px] overflow-hidden transition-all duration-300 hover:float-shadow ${
                    dept.rank <= 3 ? 'ring-2 ring-offset-2 ring-yellow-400' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        {/* Rank */}
                        <div className="flex items-center justify-center w-16 h-16">
                          {getRankIcon(dept.rank)}
                        </div>

                        {/* Department Info */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-retro text-deep-indigo group-hover:text-periwinkle transition-colors duration-300">
                              {dept.name}
                            </h3>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="text-3xl font-retro text-mint-green">
                                  {dept.points.toLocaleString()}
                                </div>
                                <div className="text-sm font-inter text-deep-indigo/60">
                                  points
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-retro text-periwinkle">
                                  {dept.events}
                                </div>
                                <div className="text-sm font-inter text-deep-indigo/60">
                                  events
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-sm font-inter text-green-600 font-medium">
                                {dept.change} this week
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="flex-1 max-w-xs ml-6">
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${(dept.points / 3000) * 100}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                  className={`h-3 rounded-full bg-gradient-to-r ${dept.color}`}
                                />
                              </div>
                            </div>
                          </div>
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

export default Scoreboard;
