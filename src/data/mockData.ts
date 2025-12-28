import type { Book } from "@/components/books/BookCard";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    rating: 4.8,
    category: "Fiksi",
    year: 1980,
  },
  {
    id: "2",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    rating: 4.7,
    category: "Fiksi",
    year: 2005,
  },
  {
    id: "3",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    rating: 4.9,
    category: "Sejarah",
    year: 2014,
  },
  {
    id: "4",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    rating: 4.8,
    category: "Self-Help",
    year: 2018,
  },
  {
    id: "5",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=400&h=600&fit=crop",
    rating: 4.6,
    category: "Bisnis",
    year: 2020,
  },
  {
    id: "6",
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    rating: 4.7,
    category: "Teknologi",
    year: 2008,
  },
  {
    id: "7",
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    rating: 4.5,
    category: "Bisnis",
    year: 2011,
  },
  {
    id: "8",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    rating: 4.8,
    category: "Sains",
    year: 1988,
  },
];

export const categories = [
  { id: "fiction", name: "Fiksi", count: 245 },
  { id: "science", name: "Sains", count: 128 },
  { id: "technology", name: "Teknologi", count: 186 },
  { id: "history", name: "Sejarah", count: 97 },
  { id: "business", name: "Bisnis", count: 152 },
  { id: "self-help", name: "Self-Help", count: 89 },
];

export const mockBookContent = `
# Bab 1: Pendahuluan

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Bagian 1.1

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

## Bagian 1.2

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

# Bab 2: Konsep Dasar

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
`;
