import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function NewsletterSubscription() {
  const newsletterImage = PlaceHolderImages.find((img) => img.id === 'newsletter-image');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-md w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">JOIN THE AKSHAYA FAMILY</h2>
              <p className="mt-4 text-base text-foreground/80">
                Be the first to know about new arrivals, exclusive offers, and the latest trends in ethnic fashion. Subscribe to our newsletter and get updates delivered straight to your inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-card border-input flex-grow"
                  aria-label="Email Address"
                />
                <Button type="submit">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                {newsletterImage && (
                    <Image
                        src={newsletterImage.imageUrl}
                        alt={newsletterImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={newsletterImage.imageHint}
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
