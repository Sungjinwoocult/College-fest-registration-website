import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password);
      toast({
        title: "Welcome to Sanchalana 2k26!",
        description: "Your account has been created successfully.",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-periwinkle flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm border-2 border-deep-indigo/20 rounded-[20px] p-8 retro-shadow">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-retro text-deep-indigo mb-2">
              Join Sanchalana 2k26
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
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
                className="bg-input border-2 border-deep-indigo/20 rounded-[20px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-deep-indigo font-inter">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
                className="bg-input border-2 border-deep-indigo/20 rounded-[20px] px-4 py-6 font-inter text-deep-indigo placeholder:text-deep-indigo/40 focus-visible:ring-mint-green"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold py-6 rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-inter text-deep-indigo/60">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-periwinkle hover:underline font-semibold"
                disabled={isLoading}
              >
                Log In
              </button>
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-6 text-deep-indigo/80 hover:text-deep-indigo font-inter text-sm underline block mx-auto"
          disabled={isLoading}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Register;
