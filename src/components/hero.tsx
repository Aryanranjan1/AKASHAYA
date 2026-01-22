import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section 
      id="hero-section" 
      className="relative flex w-full items-end justify-start pb-20 overflow-hidden bg-background h-screen text-left md:items-center md:pb-0 md:justify-start"
    >
      
      {/* Frame */}
      <div className="absolute inset-[3%] border border-white/30 z-10 pointer-events-none">
        <div className="absolute -top-px -left-px h-[15%] w-[10%] border-l-2 border-t-2 border-accent" />
        <div className="absolute -bottom-px -right-px h-[15%] w-[10%] border-r-2 border-b-2 border-accent" />
      </div>

      {/* Background Image Container */}
      <div className="absolute top-0 left-0 h-full w-full z-[1]">
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-l md:from-black/70 md:via-black/30 md:to-transparent" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-90 object-center"
            priority
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-[5] w-full px-8 md:px-0 md:pl-24 md:max-w-[55%]">
          <h1 className="mb-6 font-headline text-5xl font-light leading-none text-white md:text-6xl lg:text-7xl">
            Weaving Heritage <br /> into <span className="italic text-accent">Elegance</span>
          </h1>
          
          <p className="mb-8 max-w-md font-body text-base font-light leading-relaxed text-white/90 md:max-w-[85%] md:border-l md:border-white/30 md:pl-6 md:text-lg">
            Discover the authentic artistry of Kanchi Cotton and Banarasi Silk. Curated for the modern woman who carries tradition with grace.
          </p>
          
          <div className="flex w-full md:w-auto md:justify-start">
            <Link href="#" className="w-full flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3 font-body text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto md:px-8 md:py-4 md:text-sm">
                Shop New Arrivals
            </Link>
          </div>
      </div>
    </section>
  );
}
