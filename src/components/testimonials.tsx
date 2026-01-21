import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya K.",
    avatar: "PK",
    image: "https://picsum.photos/seed/avatar1/100/100",
    review: "The Kanchi cotton saree I bought is a masterpiece. The fabric is so soft and the color is vibrant. I received so many compliments!",
    rating: 5,
  },
  {
    name: "Aisha R.",
    avatar: "AR",
    image: "https://picsum.photos/seed/avatar2/100/100",
    review: "My Lucknowi Chikankari set is perfect for festive occasions. It's elegant, comfortable, and the craftsmanship is exquisite. Highly recommend Akshaya!",
    rating: 5,
  },
  {
    name: "Meera S.",
    avatar: "MS",
    image: "https://picsum.photos/seed/avatar3/100/100",
    review: "I'm in love with the Banarasi silk outfit. The quality is top-notch and the delivery was prompt. Will definitely shop here again.",
    rating: 5,
  },
  {
    name: "Sara L.",
    avatar: "SL",
    image: "https://picsum.photos/seed/avatar4/100/100",
    review: "Akshaya has such a unique and beautiful collection of ethnic wear. I bought a simple cotton suit for daily wear and it's my new favorite.",
    rating: 4,
  },
];

const renderStars = (rating: number) => {
    return Array(rating).fill(null).map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />);
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">WHAT OUR CLIENTS SAY</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We take pride in our happy customers. Here's what they have to say about their Akshaya experience.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full bg-background border-none shadow-lg">
                    <CardContent className="flex flex-col items-center text-center justify-center p-8 space-y-4">
                        <Avatar className="w-24 h-24 border-4 border-primary">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 pt-2">
                            <h3 className="font-bold text-xl text-primary">{testimonial.name}</h3>
                            <div className="flex justify-center">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                      <p className="text-foreground/80 italic text-base pt-2">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex"/>
          <CarouselNext className="hidden lg:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
