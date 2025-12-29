import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Clock, BookMarked, Lightbulb, Globe, Cpu, History, Sparkles, TrendingUp, Award } from "lucide-react";
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

  const features = [
    {
      icon: Sparkles,
      title: "Kurasi Berkualitas",
      description: "Setiap buku dipilih dengan cermat untuk memberikan pengalaman membaca terbaik"
    },
    {
      icon: TrendingUp,
      title: "Update Rutin",
      description: "Koleksi baru ditambahkan setiap minggu dari penerbit terpercaya"
    },
    {
      icon: Award,
      title: "Rekomendasi Personal",
      description: "Dapatkan saran buku yang sesuai dengan minat dan preferensi Anda"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-in space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>Platform Perpustakaan Digital Terbaik</span>
                </div>
                
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Jelajahi Dunia{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                      Pengetahuan
                    </span>
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10 -rotate-1" />
                  </span>
                  {" "}Tanpa Batas
                </h1>
                
                <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                  Akses ribuan buku digital berkualitas tinggi kapan saja, di mana saja. 
                  Mulai perjalanan literasi Anda bersama komunitas pembaca aktif.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    <Link to="/library">
                      Mulai Menjelajah
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 hover:bg-primary/5 transition-all duration-300">
                    <Link to="/register">
                      Daftar Gratis
                    </Link>
                  </Button>
                </div>

                {/* Mini Stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={stat.label} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="grid grid-cols-2 gap-4">
                  {featuredBooks.slice(0, 4).map((book, index) => (
                    <div
                      key={book.id}
                      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-semibold text-sm line-clamp-2">{book.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Enhanced Decorative elements */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl animate-pulse" />
                <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Enhanced Design */}
        <section className="relative border-y border-border/50 bg-gradient-to-r from-card via-card/50 to-card backdrop-blur-sm py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group flex flex-col items-center gap-4 text-center p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - New */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Keunggulan Kami</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Mengapa Memilih <span className="text-gradient">E-Library</span>?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Platform yang dirancang khusus untuk memberikan pengalaman membaca digital terbaik
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6">
                      <feature.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-end justify-between animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-4">
                  <TrendingUp className="h-4 w-4" />
                  <span>Trending</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Buku Populer</h2>
                <p className="mt-2 text-muted-foreground text-lg">Koleksi buku paling banyak dibaca bulan ini</p>
              </div>
              <Button variant="ghost" asChild className="hidden md:inline-flex group hover:bg-primary/10">
                <Link to="/library">
                  Lihat Semua
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredBooks.map((book, index) => (
                <div 
                  key={book.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Button variant="outline" asChild className="group border-2 hover:bg-primary/5">
                <Link to="/library">
                  Lihat Semua Buku
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-4">
                <Globe className="h-4 w-4" />
                <span>Kategori</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Jelajahi Berdasarkan Minat</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Temukan buku dari berbagai kategori yang sesuai dengan passion Anda
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <div key={category.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CategoryBadge {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 lg:p-20 shadow-2xl animate-fade-in">
              {/* Decorative Elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span>Gratis untuk Semua</span>
                </div>
                
                <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">
                  Siap Memulai Petualangan Membaca?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
                  Bergabunglah dengan komunitas pembaca aktif. Daftar sekarang dan dapatkan akses penuh ke koleksi perpustakaan digital terlengkap.
                </p>
                
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    asChild 
                    className="group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/register">
                      Daftar Gratis Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link to="/library">Jelajahi Katalog</Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="text-sm font-medium">100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">50K+ Pengguna</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-sm font-medium">10K+ Buku</span>
                  </div>
                </div>
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