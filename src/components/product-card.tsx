import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type ProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  title: string;
  price: string;
  buttonText: string;
};

export function ProductCard({
  imageUrl,
  imageAlt,
  imageHint,
  title,
  price,
}: ProductCardProps) {
  return (
    <div className="group w-full text-center">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-semibold text-base text-foreground leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground truncate mt-1">{imageAlt}</p>
      </div>
      <div className="mt-2">
        <Button variant="ghost" className="text-accent-foreground/70 hover:bg-accent/10 hover:text-accent font-bold">
          <Plus className="h-4 w-4 mr-1" />
          {price}
        </Button>
      </div>
    </div>
  );
}
