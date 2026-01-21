import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function NewsletterSubscription() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/80">
            Receive updates on new collections, exclusive offers, and ethnic fashion trends directly to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4">
            <Input 
              type="text" 
              placeholder="Name" 
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/30 focus:bg-primary-foreground/20"
              aria-label="Name"
            />
            <Input 
              type="email" 
              placeholder="Email Address" 
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/30 focus:bg-primary-foreground/20"
              aria-label="Email Address"
            />
            <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
