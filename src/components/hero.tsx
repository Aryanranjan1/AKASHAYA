import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DecorativeArchFrame } from './decorative-arch-frame';
import { cn } from '@/lib/utils';

const heroImages = [
  { id: 'hero-left', alt: 'Model wearing a 100 Count Kanchi Cotton Plain Saree' },
  { id: 'hero-center', alt: 'Model wearing an Intricate Heavy Lucknowi Chikankari Kurta Set' },
  { id: 'hero-right', alt: 'Model wearing a Banarasi Silk Outfit' },
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-cols-3 gap-2 md:gap-4 relative">
                {heroImages.map((imageInfo, index) => {
                  const imageData = PlaceHolderImages.find((img) => img.id === imageInfo.id);
                  if (!imageData) return null;
                  return (
                    <div
                      key={imageInfo.id}
                      className={cn(
                        "relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg",
                        index === 1 && "md:scale-110 md:z-10" // Center image is slightly larger on desktop
                      )}
                    >
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="object-cover"
                        priority={index < 3}
                        data-ai-hint={imageData.imageHint}
                      />
                    </div>
                  );
                })}
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-primary-foreground bg-primary/70 backdrop-blur-sm p-6 md:p-10 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            AKSHAYA EXCLUSIVE COLLECTION
          </h1>
          <p className="mt-4 text-md md:text-xl font-body text-primary-foreground/90">
            Premium Handloom Sarees &amp; Ethnic Fashion
          </p>
        </div>
      </div>
      
      <DecorativeArchFrame />
    </section>
  );
}
