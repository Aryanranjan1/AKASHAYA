import { ArrowRight, Clock, Facebook, Instagram, MapPin, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          
          <div className="lg:pb-12 order-2 lg:order-1 lg:border-b-0 border-b border-accent/20 pb-12">
            <header className="flex flex-col items-center lg:items-start gap-2 mb-10 text-center lg:text-left">
                <span className="font-body text-xs text-accent uppercase tracking-[3px] font-medium">Our Heritage</span>
                <div className="flex items-end justify-center lg:justify-start gap-5 w-full">
                    <h2 className="font-headline text-5xl lg:text-6xl text-primary leading-none whitespace-nowrap">The <i>Atelier</i></h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-accent to-accent/20 mb-3 relative hidden lg:block">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-xl bg-white pl-2.5">❖</span>
                    </div>
                </div>
            </header>

            <div className="text-foreground/70 text-base leading-relaxed space-y-5 font-light text-center lg:text-left">
              <p>
                Founded in the quiet embrace of Sungai Petani, <strong className="font-medium text-primary">Akshaya Exclusive</strong> was born from a desire to bridge the gap between ancient Indian weaving traditions and the modern Malaysian woman.
              </p>
              <p>
                We do not merely sell sarees; we curate legacies. Every Kanchi cotton and Banarasi silk in our collection is hand-selected for its authenticity, ensuring that the 6 yards of grace you drape carries the warmth of the artisan’s hands.
              </p>
              <p>
                Whether you are a bride seeking her heirloom or a professional redefining workwear, Akshaya is your sanctuary for authentic, uncompromising elegance.
              </p>
            </div>

            <div className="mt-10 text-center lg:text-left">
                <div className="font-sign text-5xl text-primary mb-1">Akshaya Team</div>
                <span className="text-xs uppercase tracking-[2px] text-accent">Curators of Tradition</span>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-8 md:p-12 relative shadow-[20px_20px_0px_hsl(var(--accent)/0.15)] border border-accent order-1 lg:order-2">
            <h3 className="font-headline text-3xl text-accent mb-8">Visit The Boutique</h3>
            
            <div className="space-y-4 mb-8 font-light text-sm leading-relaxed opacity-90">
                <p className="flex items-start gap-3"><MapPin className="text-accent mt-1 flex-shrink-0" /> <span>57 Lorong Emilia 3, <br/>08000 Sungai Petani, Kedah</span></p>
                <p className="flex items-center gap-3"><Clock className="text-accent" /> Tues - Sun: 10am - 8pm (Mon Closed)</p>
                <p className="flex items-center gap-3"><Phone className="text-accent" /> +60 12-345 6789</p>
            </div>

            <div className="w-full h-64 mb-8 border border-white/10 grayscale-[80%] sepia-[20%] contrast-125 transition-all duration-500 hover:grayscale-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.766324275031!2d100.485!3d5.645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnNDIuMCJOIDEwMMKwMjknMDYuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy" allowFullScreen loading="lazy" className="w-full h-full border-0"></iframe>
            </div>

            <div className="flex gap-4 items-center border-t border-white/10 pt-8">
                <Link href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-accent hover:border-accent hover:text-primary" title="Instagram"><Instagram size={20} /></Link>
                <Link href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-accent hover:border-accent hover:text-primary" title="Facebook"><Facebook size={20} /></Link>
                <Link href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-accent hover:border-accent hover:text-primary" title="WhatsApp"><MessageSquare size={20} /></Link>
                <Link href="#" className="ml-auto text-xs uppercase tracking-[2px] text-accent border-b border-accent pb-1">Get Directions <ArrowRight className="inline-block" /></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
