import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  title: string;
  price?: string;
  buttonText?: string;
  className?: string;
};

export function ProductCard({
  imageUrl,
  imageAlt,
  imageHint,
  title,
  price,
  buttonText,
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

  // New Bento-style card for categories
  return (
    <Link href="#" className={cn("group relative block w-full h-full rounded-lg overflow-hidden shadow-lg", className)}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
            <h3 className="font-headline text-xl md:text-2xl font-bold">{title}</h3>
        </div>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300 border-2 border-white/50 rounded-full px-6 py-2 text-white text-base font-semibold tracking-wider">
                SHOP NOW
            </div>
        </div>
    </Link>
  );
}
