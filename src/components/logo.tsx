import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'golden' }) {
  const isGolden = variant === 'golden';
  return (
    <Link href="/" className={cn(isGolden ? '' : "group", className)}>
      <div className="flex flex-col items-center">
        <h1 className={cn(
          "font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.1em]",
          isGolden 
            ? "text-accent" 
            : "text-primary group-hover:text-accent transition-colors"
        )}>
          AKSHAYA
        </h1>
        <p className={cn(
          "font-body text-[0.6rem] md:text-xs tracking-[0.2em] -mt-1 uppercase",
          isGolden ? "text-primary-foreground/80" : "text-secondary"
        )}>
          Exclusive Collection
        </p>
      </div>
    </Link>
  );
}
