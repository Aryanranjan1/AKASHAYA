import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

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
  buttonText,
}: ProductCardProps) {
  return (
    <div className="group w-full text-center">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          data-ai-hint={imageHint}
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center text-sm font-bold">
          {price}
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-semibold text-base text-foreground leading-tight">{title}</h3>
      </div>
      <div className="mt-3">
        <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          <Eye className="h-4 w-4 mr-2" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
