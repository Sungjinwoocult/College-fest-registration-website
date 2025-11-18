import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you soon.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-periwinkle/90 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-4xl font-retro text-deep-indigo mb-2">
              Have a Doubt?
            </h3>
            <p className="text-lg font-inter text-deep-indigo/70">
              Get in touch!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card border-2 border-deep-indigo/20 rounded-[20px] px-6 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
            />
            <Button 
              type="submit"
              className="bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold px-8 py-6 rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105"
            >
              Send
            </Button>
          </form>

          <div className="text-center pt-8 border-t border-deep-indigo/20 w-full">
            <p className="text-sm font-inter text-deep-indigo/60">
              © 2025 RetroTech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
