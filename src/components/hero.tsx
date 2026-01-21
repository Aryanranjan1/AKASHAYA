import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section className="w-full h-[60vh] md:h-[80vh] relative">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground">
            Elegance in Every Thread
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-primary-foreground/90">
            Discover our exclusive collection of handloom sarees.
          </p>
        </div>
      </div>
    </section>
  );
}
