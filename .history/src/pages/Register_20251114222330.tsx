import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to RetroTech!",
      description: "Your account has been created successfully.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-periwinkle flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm border-2 border-deep-indigo/20 rounded-[20px] p-8 retro-shadow">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-retro text-deep-indigo mb-2">
              Join RetroTech
            </h1>
            <p className="text-sm font-inter text-deep-indigo/60">
              Create your account to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-deep-indigo font-inter">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-input border-2 border-deep-indigo/20 rounded-[20px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-deep-indigo font-inter">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input border-2 border-deep-indigo/20 rounded-[20px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-deep-indigo font-inter">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-input border-2 border-deep-indigo/20 rounded-[20px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold py-6 rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-inter text-deep-indigo/60">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-periwinkle hover:underline font-semibold"
              >
                Log In
              </button>
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-6 text-deep-indigo/80 hover:text-deep-indigo font-inter text-sm underline block mx-auto"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Register;
