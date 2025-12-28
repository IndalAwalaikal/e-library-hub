import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Clock, BookMarked, Lightbulb, Globe, Cpu, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookCard from "@/components/books/BookCard";
import CategoryBadge from "@/components/books/CategoryBadge";
import { mockBooks } from "@/data/mockData";

const Landing = () => {
  const featuredBooks = mockBooks.slice(0, 4);
  
  const categories = [
    { name: "Fiksi", icon: BookMarked, href: "/library?category=fiction", count: 245 },
    { name: "Sains", icon: Lightbulb, href: "/library?category=science", count: 128 },
    { name: "Teknologi", icon: Cpu, href: "/library?category=technology", count: 186 },
    { name: "Sejarah", icon: History, href: "/library?category=history", count: 97 },
  ];

  const stats = [
    { icon: BookOpen, value: "10,000+", label: "Koleksi Buku" },
    { icon: Users, value: "50,000+", label: "Pembaca Aktif" },
    { icon: Clock, value: "24/7", label: "Akses Kapan Saja" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-in">
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Akses Ribuan{" "}
                  <span className="text-gradient">Buku Digital</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                  Baca kapan saja, di mana saja dengan pengalaman modern. 
                  Platform perpustakaan digital terlengkap untuk memenuhi kebutuhan literasi Anda.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group">
                    <Link to="/library">
                      Jelajahi Library
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/register">Daftar Gratis</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="grid grid-cols-2 gap-4">
                  {featuredBooks.slice(0, 4).map((book, index) => (
                    <div
                      key={book.id}
                      className="overflow-hidden rounded-lg card-shadow"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="aspect-[2/3] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center gap-4 text-center md:justify-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">Buku Populer</h2>
                <p className="mt-2 text-muted-foreground">Koleksi buku paling banyak dibaca</p>
              </div>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <Link to="/library">
                  Lihat Semua
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredBooks.map((book, index) => (
                <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link to="/library">
                  Lihat Semua Buku
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground">Kategori Populer</h2>
              <p className="mt-2 text-muted-foreground">Temukan buku sesuai minat Anda</p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <div key={category.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CategoryBadge {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl gradient-primary p-8 text-center lg:p-16">
              <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Mulai Membaca Sekarang
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                Bergabung dengan ribuan pembaca lainnya. Daftar gratis dan dapatkan akses ke koleksi buku digital terlengkap.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/register">
                    Daftar Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/library">Jelajahi Katalog</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
