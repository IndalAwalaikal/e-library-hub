import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CategoryBadgeProps {
  name: string;
  icon: LucideIcon;
  href: string;
  count?: number;
  className?: string;
}

const CategoryBadge = ({ name, icon: Icon, href, count, className }: CategoryBadgeProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-xl bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
        <Icon className="h-7 w-7" />
      </div>
      <div className="text-center">
        <h3 className="font-display font-semibold text-card-foreground">{name}</h3>
        {count !== undefined && (
          <p className="text-sm text-muted-foreground">{count} buku</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryBadge;
