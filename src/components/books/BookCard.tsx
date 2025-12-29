import { Link } from "react-router-dom";
import { Star, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  year: number;
}

interface BookCardProps {
  book: Book;
  className?: string;
}

const BookCard = ({ book, className }: BookCardProps) => {
  return (
    <Link
      to={`/book/${book.id}`}
      className={cn(
        // ⬇️ TAMBAH flex & h-full
        "group flex h-full flex-col overflow-hidden rounded-lg bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Cover Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            Baca Buku
          </span>
        </div>
      </div>

      {/* Content */}
      {/* ⬇️ flex-1 + flex-col */}
      <div className="flex flex-1 flex-col p-4">
        <Badge variant="secondary" className="mb-2 w-fit text-xs">
          {book.category}
        </Badge>

        <h3 className="mb-1 font-display font-semibold text-card-foreground line-clamp-2 group-hover:text-secondary transition-colors">
          {book.title}
        </h3>

        {/* ⬇️ clamp author */}
        <p className="mb-2 text-sm text-muted-foreground line-clamp-1">
          {book.author}
        </p>

        {/* ⬇️ SPACER PENTING */}
        <div className="flex-1" />

        {/* Footer / Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium text-card-foreground">
            {book.rating.toFixed(1)}
          </span>
          <span className="text-xs text-muted-foreground">• {book.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
