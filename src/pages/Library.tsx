import { useState, useMemo } from "react";
import { Search, Filter, X, ChevronDown, BookOpen, Sparkles, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookCard from "@/components/books/BookCard";
import { mockBooks, categories } from "@/data/mockData";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredBooks = useMemo(() => {
    let result = [...mockBooks];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("rating");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || sortBy !== "rating";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <main className="flex-1">
        {/* Header with Gradient */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-card via-card/80 to-muted/50 py-12 lg:py-16">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-4">
                <BookOpen className="h-4 w-4" />
                <span>Perpustakaan Digital</span>
              </div>
              
              <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
                Jelajahi{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Koleksi Buku
                  </span>
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10 -rotate-1" />
                </span>
              </h1>
              
              <p className="mt-4 text-lg text-muted-foreground">
                Temukan buku favorit Anda dari ribuan koleksi berkualitas tinggi yang tersedia
              </p>

              {/* Quick Stats */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-background/50 px-4 py-2 backdrop-blur-sm border border-border/50">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{mockBooks.length} Total Buku</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background/50 px-4 py-2 backdrop-blur-sm border border-border/50">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{categories.length} Kategori</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar - Enhanced */}
        <section className="sticky top-16 z-40 border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-sm py-4 lg:py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search Input - Enhanced */}
              <div className="relative flex-1 max-w-lg group">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <Input
                  type="search"
                  placeholder="Cari judul buku atau nama penulis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-11 border-2 focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                className="lg:hidden border-2 h-11 hover:bg-primary/5 transition-all duration-300"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filter & Urutkan
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </Button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex lg:items-center lg:gap-3">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 rounded-lg border-2 border-border p-1 bg-background/50">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[160px] border-2 h-11 hover:border-primary transition-colors">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Semua Kategori
                      </span>
                    </SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name.toLowerCase()}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[170px] border-2 h-11 hover:border-primary transition-colors">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">⭐ Rating Tertinggi</SelectItem>
                    <SelectItem value="year">📅 Terbaru</SelectItem>
                    <SelectItem value="title">🔤 Judul A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                  >
                    <X className="mr-1 h-4 w-4" />
                    Reset
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="mt-4 flex flex-col gap-3 animate-fade-in lg:hidden p-4 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name.toLowerCase()}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">⭐ Rating Tertinggi</SelectItem>
                    <SelectItem value="year">📅 Terbaru</SelectItem>
                    <SelectItem value="title">🔤 Judul A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="border-2">
                    <X className="mr-1 h-4 w-4" />
                    Reset Semua Filter
                  </Button>
                )}
              </div>
            )}

            {/* Active Filters Display - Enhanced */}
            {hasActiveFilters && (
              <div className="mt-4 flex flex-wrap gap-2 animate-fade-in">
                <span className="text-sm text-muted-foreground font-medium">Filter Aktif:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-2 px-3 py-1.5 hover:bg-secondary/80 transition-colors cursor-pointer group">
                    <Search className="h-3 w-3" />
                    "{searchQuery}"
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="gap-2 px-3 py-1.5 hover:bg-secondary/80 transition-colors cursor-pointer group">
                    <Filter className="h-3 w-3" />
                    {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory("all")}
                      className="hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {sortBy !== "rating" && (
                  <Badge variant="secondary" className="gap-2 px-3 py-1.5 hover:bg-secondary/80 transition-colors">
                    <SlidersHorizontal className="h-3 w-3" />
                    {sortBy === "year" ? "Terbaru" : "A-Z"}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            {/* Results Count with Animation */}
            <div className="mb-8 flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Hasil Pencarian
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {filteredBooks.length} Buku Ditemukan
                  </p>
                </div>
              </div>

              {/* View mode mobile */}
              <div className="lg:hidden flex items-center gap-1 rounded-lg border-2 border-border p-1 bg-background/50">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {filteredBooks.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}>
                {filteredBooks.map((book, index) => (
                  <div
                    key={book.id}
                    className="animate-fade-in hover:scale-[1.02] transition-transform duration-300"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center animate-fade-in">
                <div className="mx-auto max-w-md">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Tidak Ada Buku Ditemukan
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Coba ubah kata kunci pencarian atau sesuaikan filter untuk menemukan buku yang Anda cari
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="border-2 hover:bg-primary/5 transition-all duration-300"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reset Semua Filter
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Library;