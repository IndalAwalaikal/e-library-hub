import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Settings, Sun, Moon, Minus, Plus, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { mockBooks, mockBookContent } from "@/data/mockData";
import { cn } from "@/lib/utils";

const BookReader = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find((b) => b.id === id);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [currentPage, setCurrentPage] = useState(10);
  const totalPages = 120;

  const progress = (currentPage / totalPages) * 100;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Buku tidak ditemukan</h1>
          <Button asChild className="mt-4">
            <Link to="/library">Kembali ke Katalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-[#1a1a1a]" : "bg-[#faf8f5]")}>
      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isDarkMode 
          ? "border-neutral-800 bg-[#1a1a1a]/95 backdrop-blur-sm" 
          : "border-neutral-200 bg-[#faf8f5]/95 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className={isDarkMode ? "text-neutral-300 hover:text-neutral-100" : ""}
            >
              <Link to={`/book/${book.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Link>
            </Button>

            <h1 className={cn(
              "hidden font-display text-sm font-medium truncate max-w-[200px] md:max-w-md md:block",
              isDarkMode ? "text-neutral-200" : "text-foreground"
            )}>
              {book.title}
            </h1>

            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={isDarkMode ? "text-neutral-300 hover:text-neutral-100" : ""}
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="space-y-4">
                  <h3 className="font-display font-semibold">Pengaturan Baca</h3>
                  
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mode</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={!isDarkMode ? "default" : "outline"}
                        onClick={() => setIsDarkMode(false)}
                      >
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={isDarkMode ? "default" : "outline"}
                        onClick={() => setIsDarkMode(true)}
                      >
                        <Moon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ukuran Font</span>
                      <span className="text-sm text-muted-foreground">{fontSize}px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Slider
                        value={[fontSize]}
                        onValueChange={([value]) => setFontSize(value)}
                        min={14}
                        max={28}
                        step={2}
                        className="flex-1"
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={cn(
        "sticky top-14 z-40",
        isDarkMode ? "bg-[#1a1a1a]" : "bg-[#faf8f5]"
      )}>
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <article 
          className={cn(
            "prose mx-auto max-w-2xl transition-colors duration-300",
            isDarkMode ? "prose-invert" : "prose-slate"
          )}
          style={{ fontSize: `${fontSize}px` }}
        >
          <div 
            className="whitespace-pre-wrap leading-relaxed"
            style={{ lineHeight: 1.8 }}
          >
            {mockBookContent}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className={cn(
        "sticky bottom-0 border-t py-3 transition-colors duration-300",
        isDarkMode 
          ? "border-neutral-800 bg-[#1a1a1a]/95 backdrop-blur-sm" 
          : "border-neutral-200 bg-[#faf8f5]/95 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
              className={isDarkMode ? "text-neutral-300" : ""}
            >
              Sebelumnya
            </Button>

            <div className={cn(
              "flex items-center gap-2 text-sm",
              isDarkMode ? "text-neutral-400" : "text-muted-foreground"
            )}>
              <BookOpen className="h-4 w-4" />
              <span>Halaman {currentPage} / {totalPages}</span>
            </div>

            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage >= totalPages}
              className={isDarkMode ? "text-neutral-300" : ""}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookReader;
