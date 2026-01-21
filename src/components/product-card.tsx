import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <Card className="overflow-hidden group w-full border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-background">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            data-ai-hint={imageHint}
          />
        </div>
      </CardContent>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-primary truncate">{title}</h3>
        <p className="text-foreground/80 mt-1">{price}</p>
      </div>
      <CardFooter className="p-4 pt-0">
        <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
