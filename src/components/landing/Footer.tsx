import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Creative Studio</h3>
            <p className="text-background/70">
              We create amazing experiences through innovative design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background">About</a></li>
              <li><a href="#" className="hover:text-background">Services</a></li>
              <li><a href="#" className="hover:text-background">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background">Twitter</a></li>
              <li><a href="#" className="hover:text-background">Instagram</a></li>
              <li><a href="#" className="hover:text-background">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 flex justify-between items-center">
          <p className="text-background/50 text-sm">© 2024 Creative Studio</p>
          <Link to="/admin" className="text-background/30 hover:text-background/60 text-sm">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
