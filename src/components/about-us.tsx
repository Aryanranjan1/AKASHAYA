import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutUs() {
  const aboutUsImage = PlaceHolderImages.find((img) => img.id === 'about-us-saree');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            {aboutUsImage && (
              <Image
                src={aboutUsImage.imageUrl}
                alt={aboutUsImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutUsImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">ABOUT US</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Akshaya Exclusive Collection is a purveyor of premium handloom sarees, cotton suits, and ethnic fashion. We emphasize authentic fabrics and quality design, offering intricate heavy Lucknowi chikankari with fine craftsmanship—perfect for elegant everyday or festive wear. Our collection features effortless charm with smooth, breathable textures to match your unique style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
