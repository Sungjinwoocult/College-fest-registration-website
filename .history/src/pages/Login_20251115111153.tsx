import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Welcome back!",
        description: "Login successful.",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
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
              Welcome Back
            </h1>
            <p className="text-sm font-inter text-deep-indigo/60">
              Log in to your Sanchalana 2k26 account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-mint-green hover:bg-mint-green/90 text-deep-indigo font-inter font-semibold py-6 rounded-[20px] retro-shadow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-inter text-deep-indigo/60">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-periwinkle hover:underline font-semibold"
                disabled={isLoading}
              >
                Sign Up
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

export default Login;
