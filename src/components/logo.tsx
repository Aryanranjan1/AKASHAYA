import Link from "next/link";
import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'golden' }) {
  const isGolden = variant === 'golden';
  
  if (isGolden) {
    return (
      <Link href="/" className={cn("flex items-center gap-3", className)}>
        <Crown className="text-accent h-8 w-8 md:h-10 md:w-10 flex-shrink-0" />
        <div className="text-left">
          <h1 className={cn(
            "font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-accent"
          )}>
            AKSHAYA
          </h1>
          <p className={cn(
            "font-body text-[0.6rem] md:text-xs tracking-[0.2em] -mt-1 uppercase text-primary-foreground/80"
          )}>
            Exclusive Collection
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("group", className)}>
      <div className="flex flex-col items-center">
        <h1 className={cn(
          "font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
          "text-primary group-hover:text-accent transition-colors"
        )}>
          AKSHAYA
        </h1>
        <p className={cn(
          "font-body text-[0.6rem] md:text-xs tracking-[0.2em] -mt-1 uppercase",
          "text-secondary"
        )}>
          Exclusive Collection
        </p>
      </div>
    </Link>
  );
}
