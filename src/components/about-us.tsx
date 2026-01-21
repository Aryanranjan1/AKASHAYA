import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';

export function AboutUs() {
  const aboutUsImage = PlaceHolderImages.find((img) => img.id === 'about-us-saree');

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">ABOUT US</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Akshaya Exclusive Collection is a purveyor of premium handloom sarees, cotton suits, and ethnic fashion. We emphasize authentic fabrics and quality design, offering intricate heavy Lucknowi chikankari with fine craftsmanship—perfect for elegant everyday or festive wear. Our collection features effortless charm with smooth, breathable textures to match your unique style.
            </p>
            <Button asChild>
                <Link href="/about">READ MORE</Link>
            </Button>
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
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
        </div>
      </div>
    </section>
  );
}
