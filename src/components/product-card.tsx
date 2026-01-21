import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  title: string;
  price?: string;
  buttonText?: string;
  tagline?: string;
  className?: string;
};

export function ProductCard({
  imageUrl,
  imageAlt,
  imageHint,
  title,
  price,
  buttonText,
  tagline,
  className,
}: ProductCardProps) {
  // If price or buttonText is provided, use the original card design
  if (price || buttonText) {
    return (
        <div className={cn("group w-full text-center", className)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                data-ai-hint={imageHint}
                />
                {price && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center text-sm font-bold">
                        {price}
                    </div>
                )}
            </div>
            <div className="mt-4 px-1">
                <h3 className="font-semibold text-base text-foreground leading-tight">{title}</h3>
            </div>
            {buttonText && (
                <div className="mt-3">
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    <Eye className="h-4 w-4 mr-2" />
                    {buttonText}
                    </Button>
                </div>
            )}
        </div>
    );
  }

  // New Mosaic/Bento-style card for categories
  return (
    <Link href="#" className={cn("group relative block w-full h-full overflow-hidden", className)}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            {tagline && (
              <span className="font-body text-xs text-accent uppercase tracking-[2px] mb-1.5 block opacity-90">
                {tagline}
              </span>
            )}
            <h3 className="font-headline text-2xl md:text-4xl font-normal text-white leading-none [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
                {title}
            </h3>
        </div>
        <div className="absolute top-5 right-5 w-11 h-11 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-400 ease-in-out sm:opacity-0 sm:transform sm:-translate-y-2 sm:-rotate-45 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0">
            <ArrowRight className="w-5 h-5" />
        </div>
    </Link>
  );
}
