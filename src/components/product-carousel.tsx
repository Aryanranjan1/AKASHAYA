'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselProducts } from './product-carousel-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProductCarouselCardProps = {
  name: string;
  price: string;
  oldPrice?: string | null;
  badge?: string | null;
  frontImageUrl: string;
  frontImageAlt: string;
  backImageUrl: string;
  backImageAlt: string;
};

function ProductCarouselCard({
  name,
  price,
  oldPrice,
  badge,
  frontImageUrl,
  frontImageAlt,
  backImageUrl,
  backImageAlt,
}: ProductCarouselCardProps) {
  return (
    <Link href="#" className="group product-card relative flex-shrink-0 w-[300px] bg-white border border-primary/10 p-4 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-accent/40 cursor-pointer no-underline text-foreground md:w-[300px] md:flex-shrink-0 sm:w-[240px] sm:p-2.5">
      <div className="card-media relative h-[380px] w-full overflow-hidden bg-gray-100 sm:h-[280px]">
        {badge && (
          <span className="badge-sale absolute top-2.5 left-2.5 z-10 bg-accent text-accent-foreground font-body text-[0.6rem] font-bold uppercase py-1 px-2 tracking-wider">
            {badge}
          </span>
        )}

        <Image
          src={frontImageUrl}
          alt={frontImageAlt}
          fill
          className="img-front absolute inset-0 w-full h-full object-cover z-[2] opacity-100 transition-opacity duration-600 ease-in-out group-hover:opacity-0"
        />
        <Image
          src={backImageUrl}
          alt={backImageAlt}
          fill
          className="img-back absolute inset-0 w-full h-full object-cover z-[1] opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100 transform scale-110 group-hover:scale-100"
        />

        <div className="quick-actions absolute bottom-0 left-0 right-0 bg-white/95 p-4 flex justify-center z-[6] transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 border-t border-accent sm:p-2.5 sm:translate-y-0">
          <button className="btn-quick-add w-full bg-primary text-primary-foreground py-3 uppercase text-[0.75rem] tracking-[2px] font-body font-semibold border border-primary cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-primary hover:border-accent sm:text-[0.65rem] sm:py-2">
            Quick Add +
          </button>
        </div>

        <div className="absolute inset-2.5 border border-white/60 pointer-events-none z-[5] transition-all duration-400 ease-in-out group-hover:inset-1.5 group-hover:border-accent sm:hidden" />
      </div>

      <div className="card-info pt-5 text-left border-t border-accent/20 mt-4">
        <h3 className="product-name font-headline text-2xl text-primary font-normal m-0 mb-2.5 leading-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-black">
          {name}
        </h3>
        <div className="product-meta flex justify-between items-center font-body">
          <div className="price-group">
            <span className="product-price text-base text-gray-800 font-medium">{price}</span>
            {oldPrice && (
              <span className="old-price text-sm text-gray-400 line-through ml-2">{oldPrice}</span>
            )}
          </div>
          <span className="btn-buy-outlined text-xs uppercase text-accent border border-accent py-1.5 px-3 transition-colors duration-300 cursor-pointer tracking-wider group-hover:bg-accent group-hover:text-primary">
            Buy Now
          </span>
        </div>
      </div>
    </Link>
  );
}


export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const moveSlide = (amount: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="product-carousel" className="w-full bg-white py-20 relative">
       <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">FEATURED COLLECTIONS</h2>
       </div>
      <div className="carousel-wrapper max-w-full md:px-10 relative sm:px-0">
        <button
          onClick={() => moveSlide(-325)}
          className="carousel-nav nav-prev absolute top-[35%] -translate-y-1/2 w-11 h-11 border border-gray-300 bg-white text-gray-800 flex items-center justify-center cursor-pointer z-10 transition-colors duration-300 shadow-md hover:bg-primary hover:border-primary hover:text-white left-10 sm:hidden"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => moveSlide(325)}
          className="carousel-nav nav-next absolute top-[35%] -translate-y-1/2 w-11 h-11 border border-gray-300 bg-white text-gray-800 flex items-center justify-center cursor-pointer z-10 transition-colors duration-300 shadow-md hover:bg-primary hover:border-primary hover:text-white right-10 sm:hidden"
        >
          <ChevronRight />
        </button>

        <div ref={trackRef} className="card-track flex gap-6 overflow-x-auto px-5 pb-10 scroll-smooth scrollbar-hide">
          {carouselProducts.map((product) => {
            const frontImage = PlaceHolderImages.find(p => p.id === product.frontImageId);
            const backImage = PlaceHolderImages.find(p => p.id === product.backImageId);

            if (!frontImage || !backImage) return null;

            return (
              <ProductCarouselCard
                key={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                badge={product.badge}
                frontImageUrl={frontImage.imageUrl}
                frontImageAlt={frontImage.description}
                backImageUrl={backImage.imageUrl}
                backImageAlt={backImage.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
