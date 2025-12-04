import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useContent } from '@/contexts/ContentContext';
import { LogOut, Settings } from 'lucide-react';

export function Navbar() {
  const { isAdmin, setIsAdmin } = useContent();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-foreground">
            Creative Studio
          </Link>

          {/* Navigation
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Work</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div> */}

          {/* Auth */}
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <>
                <Link to="/admin/dashboard">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => setIsAdmin(false)}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Link to="/admin">
                <Button variant="outline" size="sm">Admin</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
