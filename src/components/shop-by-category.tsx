import { ProductCard } from './product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mosaicProducts = [
  {
    id: 'featured-kanchi-cotton',
    tagline: 'Signature Series',
    title: 'Kanchi Cotton',
    className: 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'featured-banarasi-silk',
    tagline: 'Heritage',
    title: 'Royal Banarasi',
    className: 'md:row-span-2 lg:row-span-2',
  },
  {
    id: 'latest-coord-set',
    tagline: 'Daily Wear',
    title: 'Artisan Suits',
    className: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'featured-chikankari',
    tagline: 'Limited',
    title: 'Festive',
    className: '',
  },
];

export function ShopByCategory() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-16 lg:py-24">
        <header className="flex items-end gap-8 mb-12 w-full">
          <div className="flex-shrink-0 text-center md:text-left">
            <span className="font-body text-xs text-accent uppercase tracking-[3px] mb-1 block font-medium">Explore</span>
            <h2 className="font-headline text-5xl md:text-6xl text-primary leading-none m-0 font-normal">The <i>Collections</i></h2>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-accent to-accent/20 mb-3 relative hidden md:block">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-xl bg-white pl-2.5">❖</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[300px] md:auto-rows-[250px] lg:auto-rows-[280px]">
          {mosaicProducts.map((product) => {
            const imageData = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                tagline={product.tagline}
                imageUrl={imageData?.imageUrl || ''}
                imageAlt={imageData?.description || product.title}
                imageHint={imageData?.imageHint || 'ethnic wear'}
                className={product.className}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
