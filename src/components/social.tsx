import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const socialImageIds = [
    "social-1",
    "social-2",
    "social-3",
    "social-4",
    "social-5",
    "social-6",
]

export function Social() {
  const socialImages = PlaceHolderImages.filter(img => socialImageIds.includes(img.id));

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">JOIN OUR COMMUNITY</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Follow us on Instagram for the latest collections, behind-the-scenes, and styling tips.
          </p>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#" target="_blank">
                    <Instagram className="mr-2 h-5 w-5"/>
                    @akshayaec_
                </Link>
            </Button>
        </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {socialImages.map(image => (
                <Link href="#" key={image.id} className="block relative aspect-square group overflow-hidden rounded-lg">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
