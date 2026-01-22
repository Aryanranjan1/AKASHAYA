import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section id="hero-section" className="relative flex w-full items-center overflow-hidden bg-black h-screen">
      
      {/* Frame */}
      <div className="absolute inset-[3%] border border-white/30 z-10 pointer-events-none">
        <div className="absolute -top-px -left-px h-[15%] w-[10%] border-l-2 border-t-2 border-accent" />
        <div className="absolute -bottom-px -right-px h-[15%] w-[10%] border-r-2 border-b-2 border-accent" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-top opacity-90"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-[5] w-full pl-8 sm:pl-12 md:pl-24">
        <div className="max-w-[60%]">
          <div className="mb-4 flex items-center gap-4 font-body text-sm font-medium uppercase tracking-widest text-accent">
            <div className="h-px w-10 bg-accent" />
            <span>Est. 2025 • Sungai Petani</span>
          </div>

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
            <Link href="#" className="flex items-center justify-center whitespace-nowrap border border-white/50 bg-transparent px-6 py-3 md:px-8 md:py-4 font-body text-xs md:text-sm uppercase tracking-widest text-white transition-colors hover:bg-white/10">
                <PlayCircle className="mr-2 h-5 w-5" /> 
                View Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
