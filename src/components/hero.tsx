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
      <div className="relative z-[5] w-full pl-[8%]">
        <div className="max-w-[60%]">
          <div className="mb-[2%] flex items-center gap-[2%] font-body text-[1.2vw] font-medium uppercase tracking-[0.3em] text-accent">
            <div className="h-px w-[4%] bg-accent" />
            <span>Est. 2025 • Sungai Petani</span>
          </div>

          <h1 className="mb-[3%] font-headline text-[6vw] font-light leading-[0.95] text-white">
            Weaving Heritage <br /> into <span className="italic text-accent">Elegance</span>
          </h1>
          
          <p className="mb-[5%] max-w-[80%] border-l border-white/30 pl-[3%] font-body text-[1.3vw] font-light leading-relaxed text-white/90">
            Discover the authentic artistry of Kanchi Cotton and Banarasi Silk. Curated for the modern woman who carries tradition with grace.
          </p>
          
          <div className="flex gap-[2%]">
            <Link href="#" className="flex items-center justify-center whitespace-nowrap border border-primary bg-primary p-[1.5%_4%] font-body text-[1vw] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90">
                Shop New Arrivals
            </Link>
            <Link href="#" className="flex items-center justify-center whitespace-nowrap border border-white/50 bg-transparent p-[1.5%_4%] font-body text-[1vw] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10">
                <PlayCircle className="mr-2 h-[1.2em] w-[1.2em]" /> 
                View Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
