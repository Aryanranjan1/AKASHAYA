import { ProductCard } from './product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredProducts = [
  {
    id: 'featured-kanchi-cotton',
    title: 'Kanchi Cotton',
    className: 'col-span-2 row-span-2',
  },
  {
    id: 'featured-banarasi-silk',
    title: 'Banarasi Silk',
    className: '',
  },
  {
    id: 'featured-aline-cotton',
    title: 'Cotton Suits',
    className: '',
  },
  {
    id: 'featured-chikankari',
    title: 'Chikankari Sets',
    className: '',
  },
  {
    id: 'latest-anarkali',
    title: 'Anarkali',
    className: '',
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">SHOP BY CATEGORY</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-[40rem] md:h-[42rem]">
          {featuredProducts.map((product) => {
            const imageData = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <ProductCard
                key={product.id}
                title={product.title}
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
