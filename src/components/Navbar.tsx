import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Believe", to: "/about" },
  { label: "Recorded Sermons", to: "/sermons" },
  { label: "Calendar of Events", to: "/events" },
  { label: "News", to: "/news" },
  { label: "Find Us Here", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground shadow-md">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="font-heading text-xl tracking-tight">
          Gospel Baptist Church
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary-foreground/20 text-secondary-foreground"
                  : "text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-secondary-foreground hover:bg-secondary-foreground/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-secondary border-t border-secondary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary-foreground/20 text-secondary-foreground"
                  : "text-secondary-foreground/80 hover:text-secondary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
