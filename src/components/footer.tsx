import Link from 'next/link';
import { Facebook, Instagram, MessageSquare, Crown } from 'lucide-react';
import { Logo } from './logo';

const usefulLinks = ["About Us", "Contact Us", "Shipping Policy", "Return Policy", "Size Guide", "FAQs"];
const collections = ["Sarees", "Cotton Suits", "Lehengas", "Kurti Sets", "Plus Size", "New Arrivals"];
const customerCare = ["My Account", "Track Order", "Wishlist", "Privacy Policy"];

// TikTok Icon Component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.08 1.07 1.06 1.8 2.16 1.74 1.09-.07 1.92-.98 1.92-2.04 0-2.58 0-5.17 0-7.75l.04-1.38z" />
    </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="container mx-auto px-4 py-16 relative">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg">
            <div className="w-full border-t border-accent/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-primary px-4 text-accent text-2xl">
                ❖
              </span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-4">
                <Crown className="w-8 h-8 text-accent"/>
                <Logo variant="golden" />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-sm mb-6 font-light">
              Curating legacies, one six-yard story at a time. Akshaya is your sanctuary for authentic, uncompromising elegance.
            </p>
             <div className="space-y-3 text-sm text-primary-foreground/70 font-light">
              <p>57 Lorong Emilia 3, 08000 Sungai Petani, Kedah</p>
              <p>Phone: +60 12-345 6789</p>
              <p>Email: info@akshayaexclusive.com</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg mb-4 text-accent tracking-wider">Collections</h3>
              <ul className="space-y-2.5">
                {collections.map(link => (
                  <li key={link}><Link href="#" className="hover:text-accent transition-colors text-sm text-primary-foreground/70 font-light">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-4 text-accent tracking-wider">Company</h3>
              <ul className="space-y-2.5">
                {usefulLinks.map(link => (
                  <li key={link}><Link href="#" className="hover:text-accent transition-colors text-sm text-primary-foreground/70 font-light">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-4 text-accent tracking-wider">Support</h3>
              <ul className="space-y-2.5">
                {customerCare.map(link => (
                  <li key={link}><Link href="#" className="hover:text-accent transition-colors text-sm text-primary-foreground/70 font-light">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
            © 2024 Akshaya Exclusive. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" aria-label="TikTok" className="text-primary-foreground/70 hover:text-accent transition-colors"><TikTokIcon className="w-5 h-5" /></Link>
            <Link href="#" aria-label="WhatsApp" className="text-primary-foreground/70 hover:text-accent transition-colors"><MessageSquare className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
