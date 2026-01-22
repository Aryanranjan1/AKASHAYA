import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group", className)}>
      <div className="flex flex-col items-center">
        <h1 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.1em] text-primary group-hover:text-accent transition-colors">
          AKSHAYA
        </h1>
        <p className="font-body text-[0.6rem] md:text-xs tracking-[0.2em] -mt-1 text-secondary uppercase">
          Exclusive Collection
        </p>
      </div>
    </Link>
  );
}
