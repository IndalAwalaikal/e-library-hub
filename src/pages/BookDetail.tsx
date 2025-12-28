import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, BookOpen, Heart, Bookmark, Share2, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookCard from "@/components/books/BookCard";
import { mockBooks } from "@/data/mockData";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find((b) => b.id === id);
  const relatedBooks = mockBooks.filter((b) => b.id !== id).slice(0, 4);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Buku tidak ditemukan</h1>
            <Button asChild className="mt-4">
              <Link to="/library">Kembali ke Katalog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Katalog
            </Link>
          </Button>
        </div>

        {/* Book Info Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cover Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 overflow-hidden rounded-xl card-shadow">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-2">
                <div className="animate-fade-in">
                  <Badge variant="secondary" className="mb-4">
                    {book.category}
                  </Badge>
                  
                  <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                    {book.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{book.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-foreground">{book.rating.toFixed(1)}</span>
                      <span>(1,234 ulasan)</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" asChild className="group">
                      <Link to={`/read/${book.id}`}>
                        <BookOpen className="mr-2 h-5 w-5" />
                        Baca Sekarang
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline">
                      <Heart className="mr-2 h-5 w-5" />
                      Favorit
                    </Button>
                    <Button size="lg" variant="outline">
                      <Bookmark className="mr-2 h-5 w-5" />
                      Simpan
                    </Button>
                    <Button size="icon" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  {/* Description */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                      Deskripsi
                    </h2>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p className="mt-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Book Info */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                      Informasi Buku
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-3 rounded-lg bg-muted p-4">
                        <Tag className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">ISBN</p>
                          <p className="font-medium text-foreground">978-3-16-148410-0</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg bg-muted p-4">
                        <BookOpen className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Halaman</p>
                          <p className="font-medium text-foreground">320 halaman</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Books */}
        <section className="bg-muted py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Buku Terkait
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {relatedBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
