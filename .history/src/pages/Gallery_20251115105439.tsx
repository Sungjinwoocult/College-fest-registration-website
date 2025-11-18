import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Opening Ceremony',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center',
    description: 'The grand opening of Sanchalana 2k26 with enthusiastic participants.'
  },
  {
    id: 2,
    type: 'image',
    title: 'Tech Workshop',
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop&crop=center',
    description: 'Students engaged in hands-on technical workshops.'
  },
  {
    id: 3,
    type: 'video',
    title: 'Dance Performance',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&crop=center',
    description: 'Cultural dance performance showcasing traditional art forms.'
  },
  {
    id: 4,
    type: 'image',
    title: 'Hackathon Winners',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
    description: 'Proud winners of the 24-hour hackathon challenge.'
  },
  {
    id: 5,
    type: 'image',
    title: 'Sports Tournament',
    src: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop&crop=center',
    description: 'Intense basketball matches in the sports complex.'
  },
  {
    id: 6,
    type: 'video',
    title: 'Music Fest Highlights',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center',
    description: 'Best moments from the musical performances.'
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (item: typeof galleryItems[0], index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevItem = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setSelectedItem(galleryItems[prevIndex]);
    setCurrentIndex(prevIndex);
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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Relive the moments that made Sanchalana 2k26 unforgettable!
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
                onClick={() => openModal(item, index)}
              >
                <div className="bg-card border-2 border-periwinkle rounded-[20px] overflow-hidden h-full transition-all duration-300 hover:float-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-4">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-4 border-l-black border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-retro text-deep-indigo mb-2 group-hover:text-periwinkle transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm font-inter text-deep-indigo/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-periwinkle transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevItem}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-periwinkle transition-colors duration-300 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextItem}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-periwinkle transition-colors duration-300 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="bg-white rounded-[20px] overflow-hidden max-h-[80vh]">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  className="w-full h-auto max-h-[60vh]"
                  poster={selectedItem.thumbnail}
                />
              )}

              <div className="p-6">
                <h3 className="text-2xl font-retro text-deep-indigo mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-base font-inter text-deep-indigo/70">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Gallery;
