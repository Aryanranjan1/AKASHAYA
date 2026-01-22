import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 'testimonial-avatar-1',
    name: "Sarah Menon",
    review: "The shipping to Singapore was incredibly fast. The Kanchi cotton breathes so well in this humid weather.",
    purchasedItem: "100 Count Kanchi Cotton",
  },
  {
    id: 'testimonial-avatar-2',
    name: "Priya K.",
    review: "Heavier and richer than the photos. The packaging was also so luxurious.",
    purchasedItem: "Royal Banarasi Silk",
  },
  {
    id: 'testimonial-avatar-3',
    name: "Anjali R.",
    review: "Perfect fit for the cotton suit. The stitching quality is boutique-level.",
    purchasedItem: "Aline Cotton Suit Set",
  },
  {
    id: 'testimonial-avatar-4',
    name: "Meera S.",
    review: "The intricate embroidery on the Chikankari set is stunning.",
    purchasedItem: "Lucknowi Chikankari",
  },
];

const renderStars = (rating: number) => {
    return Array(rating).fill(null).map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />);
}

export function Testimonials() {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-0 items-start relative">
            
            <div className="lg:sticky top-24 text-center lg:text-left lg:pr-10">
                <header className="flex flex-col items-center lg:items-start gap-2 mb-8">
                    <span className="font-body text-xs text-accent uppercase tracking-[3px] font-medium">Client Love</span>
                    <div className="flex items-end justify-center lg:justify-start gap-5 w-full">
                        <h2 className="font-headline text-5xl text-primary leading-none whitespace-nowrap">Kind <i>Words</i></h2>
                        <div className="flex-grow h-px bg-gradient-to-r from-accent to-accent/20 mb-3 relative hidden lg:block">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-xl bg-muted pl-2.5">❖</span>
                        </div>
                    </div>
                </header>

                <div className="mb-10 border-l-4 border-accent pl-5">
                    <div className="flex text-accent mb-1 justify-center lg:justify-start">
                        {renderStars(5)}
                    </div>
                    <p className="text-sm text-foreground/70">
                        <strong className="font-semibold text-primary">4.9/5 Average</strong>
                        <br/>
                        based on 150+ Reviews
                    </p>
                </div>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-[2px] h-auto py-4 px-8">
                    <Link href="#">Write a Review</Link>
                </Button>
            </div>

            <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px bg-accent/30" />

            <div className="flex flex-col gap-8 lg:pl-10">
                {testimonials.map((testimonial) => {
                  const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                  return (
                    <article key={testimonial.name} className="bg-card/50 border border-border/50 p-8 lg:p-10 relative transition-colors duration-300 hover:bg-background hover:outline-2 hover:outline-accent/50 hover:outline">
                        <div className="absolute top-5 right-8 font-headline text-[8rem] leading-none text-accent/10 select-none pointer-events-none">“</div>
                        
                        <div className="flex items-center gap-4 mb-5">
                            {imageData && (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/50">
                                    <Image
                                        src={imageData.imageUrl}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div>
                                <h3 className="font-headline text-lg text-primary">{testimonial.name}</h3>
                                <span className="text-xs text-accent uppercase tracking-wider flex items-center gap-1.5">
                                    <CheckCircle className="w-3 h-3" /> Verified Buyer
                                </span>
                            </div>
                        </div>

                        <p className="font-headline text-xl text-foreground/80 italic leading-snug mb-4">
                            "{testimonial.review}"
                        </p>

                        <span className="text-xs text-foreground/50 uppercase tracking-wider border-t border-border pt-4 inline-block">
                            Purchased: {testimonial.purchasedItem}
                        </span>
                    </article>
                  )
                })}
            </div>

        </div>
      </div>
    </section>
  );
}
