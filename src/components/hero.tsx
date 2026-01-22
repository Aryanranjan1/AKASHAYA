import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section id="hero-section" className="relative flex w-full items-start pt-28 overflow-hidden bg-background h-screen">
      
      {/* Frame */}
      <div className="absolute inset-[3%] border border-white/30 z-10 pointer-events-none">
        <div className="absolute -top-px -left-px h-[15%] w-[10%] border-l-2 border-t-2 border-accent" />
        <div className="absolute -bottom-px -right-px h-[15%] w-[10%] border-r-2 border-b-2 border-accent" />
      </div>

      {/* Background Image Container */}
      <div className="absolute top-0 left-0 h-full w-full z-[1]">
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-90"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-[5] w-full pl-8 sm:pl-12 md:pl-24">
        <div className="max-w-[85%] sm:max-w-[70%] md:max-w-[55%]">
          <h1 className="mb-6 font-headline text-5xl md:text-6xl lg:text-7xl font-light leading-none text-white">
            Weaving Heritage <br /> into <span className="italic text-accent">Elegance</span>
          </h1>
          
          <p className="mb-8 max-w-[85%] border-l border-white/30 pl-6 font-body text-base md:text-lg font-light leading-relaxed text-white/90">
            Discover the authentic artistry of Kanchi Cotton and Banarasi Silk. Curated for the modern woman who carries tradition with grace.
          </p>
          
          <div className="flex gap-4">
            <Link href="#" className="flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3 md:px-8 md:py-4 font-body text-xs md:text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
