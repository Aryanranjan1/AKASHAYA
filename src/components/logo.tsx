import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="inline-block">
      <h1 className={cn("text-2xl md:text-4xl font-bold tracking-widest text-primary hover:text-accent transition-colors", className)}>
        AKSHAYA EXCLUSIVE COLLECTION
      </h1>
    </Link>
  );
}
