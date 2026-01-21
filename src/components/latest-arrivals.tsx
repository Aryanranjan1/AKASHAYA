import { ProductCard } from './product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const latestProducts = [
  {
    id: 'latest-coord-set',
    title: 'Stylish Cotton Co-ord Set',
    price: 'RM95',
  },
  {
    id: 'latest-anarkali',
    title: 'Elegant Anarkali Suit',
    price: 'RM190',
  },
  {
    id: 'latest-plus-size',
    title: 'Plus Size Festive Collection',
    price: 'From RM110',
  },
  {
    id: 'latest-festive-saree',
    title: 'Traditional Festive Saree',
    price: 'RM200',
  },
];

export function LatestArrivals() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">LATEST ARRIVALS &amp; TRENDS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestProducts.map((product) => {
            const imageData = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                imageUrl={imageData?.imageUrl || ''}
                imageAlt={imageData?.description || product.title}
                imageHint={imageData?.imageHint || 'ethnic wear'}
                buttonText="SHOP NOW"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
