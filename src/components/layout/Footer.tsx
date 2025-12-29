import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <BookOpen className="h-7 w-7 text-secondary" />
              <span>E-Library</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Platform perpustakaan digital terlengkap dengan koleksi ribuan buku berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/library" className="hover:text-secondary transition-colors">
                  Katalog Buku
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-secondary transition-colors">
                  Masuk
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-secondary transition-colors">
                  Daftar
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Kategori</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/library?category=fiction" className="hover:text-secondary transition-colors">
                  Fiksi
                </Link>
              </li>
              <li>
                <Link to="/library?category=science" className="hover:text-secondary transition-colors">
                  Sains
                </Link>
              </li>
              <li>
                <Link to="/library?category=technology" className="hover:text-secondary transition-colors">
                  Teknologi
                </Link>
              </li>
              <li>
                <Link to="/library?category=history" className="hover:text-secondary transition-colors">
                  Sejarah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Kontak</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@e-library.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +62 21 1234 5678
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} E-Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
