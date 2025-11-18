import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: 'KP SUMANTH',
    role: 'Fest Coordinator',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Passionate about technology and event management with 3+ years of experience.',
    social: {
      instagram: 'https://instagram.com/rahul_sharma',
      linkedin: 'https://linkedin.com/in/rahul-sharma',
      github: 'https://github.com/rahulsharma',
      email: 'rahul.sharma@svit.edu'
    }
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Technical Head',
    department: 'Information Technology',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    bio: 'Full-stack developer and coding enthusiast leading the technical team.',
    social: {
      instagram: 'https://instagram.com/priya_patel',
      linkedin: 'https://linkedin.com/in/priya-patel',
      github: 'https://github.com/priyapatel',
      email: 'priya.patel@svit.edu'
    }
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Cultural Coordinator',
    department: 'Arts & Humanities',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Creative mind behind all cultural events and performances.',
    social: {
      instagram: 'https://instagram.com/amit_kumar',
      linkedin: 'https://linkedin.com/in/amit-kumar',
      github: 'https://github.com/amitkumar',
      email: 'amit.kumar@svit.edu'
    }
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Sports Coordinator',
    department: 'Physical Education',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Athletic coordinator ensuring fair play and exciting competitions.',
    social: {
      instagram: 'https://instagram.com/sneha_reddy',
      linkedin: 'https://linkedin.com/in/sneha-reddy',
      github: 'https://github.com/snehareddy',
      email: 'sneha.reddy@svit.edu'
    }
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Media & PR Head',
    department: 'Mass Communication',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    bio: 'Storyteller and media expert handling publicity and communications.',
    social: {
      instagram: 'https://instagram.com/vikram_singh',
      linkedin: 'https://linkedin.com/in/vikram-singh',
      github: 'https://github.com/vikramsingh',
      email: 'vikram.singh@svit.edu'
    }
  },
  {
    id: 6,
    name: 'Kavya Nair',
    role: 'Finance Coordinator',
    department: 'Commerce',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    bio: 'Financial wizard managing budgets and sponsorships for the fest.',
    social: {
      instagram: 'https://instagram.com/kavya_nair',
      linkedin: 'https://linkedin.com/in/kavya-nair',
      github: 'https://github.com/kavyanair',
      email: 'kavya.nair@svit.edu'
    }
  }
];

const Team = () => {
  const navigate = useNavigate();

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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Meet the passionate coordinators behind Sanchalana 2k26!
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="bg-card border-2 border-periwinkle rounded-[20px] overflow-hidden h-full transition-all duration-300 hover:float-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-retro text-deep-indigo mb-1 group-hover:text-periwinkle transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-lg font-inter font-semibold text-mint-green mb-1">
                        {member.role}
                      </p>
                      <p className="text-sm font-inter text-deep-indigo/60">
                        {member.department}
                      </p>
                    </div>

                    <p className="text-sm font-inter text-deep-indigo/70 leading-relaxed mb-6 text-center">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-deep-indigo/60 hover:text-pink-500 transition-colors duration-300"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-deep-indigo/60 hover:text-blue-600 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-deep-indigo/60 hover:text-gray-800 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-deep-indigo/60 hover:text-mint-green transition-colors duration-300"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

export default Team;
