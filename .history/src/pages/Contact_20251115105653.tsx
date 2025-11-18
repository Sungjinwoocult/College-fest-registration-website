import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a subject.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast({
        title: "Validation Error",
        description: "Please enter a message with at least 10 characters.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-deep-indigo/70 max-w-3xl mx-auto"
          >
            Have a question or need assistance? We're here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-2 border-periwinkle rounded-[20px] overflow-hidden">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-retro text-deep-indigo mb-4">
                  Send us a Message
                </CardTitle>
                <p className="text-lg font-inter text-deep-indigo/70">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>

              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-retro text-deep-indigo mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-lg font-inter text-deep-indigo/70">
                      Thank you for contacting us. We'll respond to your message soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-deep-indigo font-inter font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-2 border-deep-indigo/20 rounded-[15px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-deep-indigo font-inter font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-2 border-deep-indigo/20 rounded-[15px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-deep-indigo font-inter font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-2 border-deep-indigo/20 rounded-[15px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-deep-indigo font-inter font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-input border-2 border-deep-indigo/20 rounded-[15px] px-4 py-4 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green resize-none"
                      />
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold px-12 py-6 text-lg rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-deep-indigo border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
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

export default Contact;
