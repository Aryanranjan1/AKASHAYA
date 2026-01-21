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
  {
    id: 'latest-anarkali',
    title: 'Elegant Anarkali Suit',
    price: 'RM190',
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">FEATURED COLLECTIONS</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Discover our most popular and highly-rated ethnic wear, curated just for you.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
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
