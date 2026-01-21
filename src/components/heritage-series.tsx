'use client';

import { heritageCollections } from '@/lib/heritage-collections';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function HeritageSeries() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsFullyLoaded(true);
      // Button will hide, so no need to turn off loading state
    }, 800);
  };

  return (
    <section className="bg-background pb-24">
      <div className="container mx-auto px-5 py-24">
        <header className="flex items-center gap-8 mb-20 w-full">
          <div className="header-line hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-accent text-base bg-background pr-2.5">❖</span>
          </div>
          <div className="text-center flex-shrink-0 mx-auto md:mx-0">
            <span className="font-body text-xs text-accent uppercase tracking-[3px] mb-1 block font-medium">The Atelier</span>
            <h2 className="font-headline text-5xl md:text-6xl text-primary leading-none m-0 font-normal">Heritage <i>Series</i></h2>
          </div>
          <div className="header-line hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-base bg-background pl-2.5">❖</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-16">
          {heritageCollections.map((collection, index) => (
            <Link 
              href="#" 
              key={collection.id}
              className={cn(
                'group flex-col items-center',
                index < 6 ? 'flex' : (isFullyLoaded ? 'flex' : 'hidden'),
                isFullyLoaded && index >= 6 ? 'animate-in fade-in-0 slide-in-from-top-5 duration-500' : ''
              )}
            >
              <div className="w-full h-[450px] max-w-[350px] md:max-w-full mx-auto relative rounded-t-[200px] overflow-hidden border border-accent/30 bg-gray-100 transition-all duration-400 ease-in-out group-hover:border-accent group-hover:shadow-2xl group-hover:shadow-primary/10">
                <Image
                  src={collection.imageUrl}
                  alt={collection.imageAlt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-2.5 rounded-t-[190px] border border-white/50 pointer-events-none transition-all duration-400 group-hover:inset-0 group-hover:border-accent/50" />
              </div>
              <div className="text-center mt-6 transition-all duration-300">
                <span className="font-body text-xs text-accent uppercase tracking-[2px] mb-2 block">{collection.category}</span>
                <h3 className="font-headline text-2xl text-primary leading-none relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-400 after:ease-in-out group-hover:after:w-full">{collection.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {!isFullyLoaded && (
          <div className="text-center mt-10">
            <button 
              onClick={handleLoadMore} 
              disabled={isLoading}
              className="bg-transparent border border-primary text-primary py-4 px-10 font-body text-xs uppercase tracking-[2px] cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-primary-foreground disabled:cursor-wait disabled:opacity-70 flex items-center justify-center gap-2.5 mx-auto"
            >
              {isLoading ? 'Loading...' : 'View All Collections'}
              {isLoading && <Loader2 className="animate-spin h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
