import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/library", label: "Katalog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-gradient-to-r from-background via-card/95 to-background backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 font-display text-xl font-bold">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent transition-all duration-300 group-hover:from-secondary group-hover:to-primary">
              E-Library
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full animate-slide-in bg-gradient-to-r from-primary to-secondary" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild className="transition-all duration-300 hover:bg-primary/10">
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Masuk
              </Link>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className="bg-gradient-to-r from-primary to-secondary shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link to="/register">
                <User className="mr-2 h-4 w-4" />
                Daftar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="rounded-lg p-2 transition-all duration-300 hover:bg-primary/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="animate-fade-in border-t border-border/40 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                    isActive(link.href) 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" asChild className="flex-1 transition-all duration-300 hover:bg-primary/10">
                  <Link to="/login">Masuk</Link>
                </Button>
                <Button 
                  size="sm" 
                  asChild 
                  className="flex-1 bg-gradient-to-r from-primary to-secondary shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Link to="/register">Daftar</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;