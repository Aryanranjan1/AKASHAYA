import { ProductCard } from './product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredProducts = [
  {
    id: 'featured-kanchi-cotton',
    title: '100 Count Kanchi Cotton Saree',
    price: 'RM122',
  },
  {
    id: 'featured-banarasi-silk',
    title: 'Banarasi Silk Outfit',
    price: 'RM150',
  },
  {
    id: 'featured-aline-cotton',
    title: 'Aline Cotton Suit',
    price: 'RM162',
  },
  {
    id: 'featured-chikankari',
    title: 'Lucknowi Chikankari Set',
    price: 'RM180',
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">FEATURED COLLECTIONS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => {
            const imageData = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                imageUrl={imageData?.imageUrl || ''}
                imageAlt={imageData?.description || product.title}
                imageHint={imageData?.imageHint || 'ethnic wear'}
                buttonText="VIEW DETAILS"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
