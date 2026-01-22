import Link from 'next/link';
import { Facebook, Instagram, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './logo';

const usefulLinks = ["About Us", "Contact Us", "Shipping Policy", "Return Policy", "Size Guide", "FAQs"];
const collections = ["Sarees", "Cotton Suits", "Lehengas", "Kurti Sets", "Plus Size", "New Arrivals"];
const customerCare = ["My Account", "Track Order", "Wishlist", "Privacy Policy"];

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.08 1.07 1.06 1.8 2.16 1.74 1.09-.07 1.92-.98 1.92-2.04 0-2.58 0-5.17 0-7.75l.04-1.38z" />
    </svg>
);

export function Footer() {
  return (
    <footer id="akshaya-footer" className="bg-primary text-white font-body border-t-[5px] border-accent">
      <div className="container max-w-[1300px] mx-auto px-5 pt-20 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-12 gap-y-14 mb-16">
            
            <div className="md:col-span-2 lg:col-span-1 max-w-sm mx-auto lg:mx-0">
                <div className="flex justify-center lg:justify-start">
                    <Logo variant="golden" />
                </div>
                <p className="text-[0.9rem] text-white/70 leading-relaxed mb-7 font-light mt-6 text-center lg:text-left">
                    Curating legacies, one six-yard story at a time. Akshaya is your sanctuary for authentic, uncompromising elegance.
                </p>
                <div className="space-y-4 text-sm text-white/90 font-light">
                    <p className="flex items-start gap-4 justify-center lg:justify-start"><MapPin className="text-accent mt-1 flex-shrink-0 size-4" /> <span>57 Lorong Emilia 3, 08000 <br/>Sungai Petani, Kedah</span></p>
                    <p className="flex items-start gap-4 justify-center lg:justify-start"><Phone className="text-accent mt-1 flex-shrink-0 size-4" /> <span>+60 12-345 6789</span></p>
                    <p className="flex items-start gap-4 justify-center lg:justify-start"><Mail className="text-accent mt-1 flex-shrink-0 size-4" /> <span>info@akshayaexclusive.com</span></p>
                </div>
            </div>

            <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl mb-8 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-[30px] after:h-px after:bg-accent">Our Collections</h3>
                <ul className="space-y-3">
                    {collections.map(link => (
                        <li key={link}><Link href="#" className="text-[0.9rem] text-white/70 font-light transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">{link}</Link></li>
                    ))}
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl mb-8 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-[30px] after:h-px after:bg-accent">Useful Links</h3>
                <ul className="space-y-3">
                    {usefulLinks.map(link => (
                        <li key={link}><Link href="#" className="text-[0.9rem] text-white/70 font-light transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">{link}</Link></li>
                    ))}
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl mb-8 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-[30px] after:h-px after:bg-accent">Customer Care</h3>
                <ul className="space-y-3">
                    {customerCare.map(link => (
                        <li key={link}><Link href="#" className="text-[0.9rem] text-white/70 font-light transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">{link}</Link></li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/50 text-center sm:text-left">
                © 2024 Akshaya Exclusive. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
                <Link href="#" aria-label="Instagram" className="text-white hover:text-accent transition-transform duration-300 hover:-translate-y-0.5"><Instagram className="size-5" /></Link>
                <Link href="#" aria-label="Facebook" className="text-white hover:text-accent transition-transform duration-300 hover:-translate-y-0.5"><Facebook className="size-5" /></Link>
                <Link href="#" aria-label="WhatsApp" className="text-white hover:text-accent transition-transform duration-300 hover:-translate-y-0.5"><MessageSquare className="size-5" /></Link>
                <Link href="#" aria-label="TikTok" className="text-white hover:text-accent transition-transform duration-300 hover:-translate-y-0.5"><TikTokIcon className="size-5" /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
