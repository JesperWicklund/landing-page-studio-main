import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useContent } from '@/contexts/ContentContext';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

// FIREBASE COMMENT: Replace with Firebase Auth
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/lib/firebase';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAdmin } = useContent();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // FIREBASE COMMENT: Replace with Firebase Auth
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   setIsAdmin(true);
    //   navigate('/admin/dashboard');
    // } catch (error) {
    //   toast({ title: 'Login failed', variant: 'destructive' });
    // }

    // Demo login
    // Use admin@demo.com / admin123
    setTimeout(() => {
      if (email === 'admin@demo.com' && password === 'admin123') {
        setIsAdmin(true);
        toast({ title: 'Welcome back!' });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: 'Login failed',
          description: 'Use admin@demo.com / admin123',
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to site
        </Link>

        <div className="bg-card rounded-lg border border-border p-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Admin Login</h1>
          <p className="text-muted-foreground mb-6">Sign in to manage your content</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@demo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground text-center">
            <strong>Demo:</strong> admin@demo.com / admin123
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
