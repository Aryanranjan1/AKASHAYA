import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './logo';

const usefulLinks = ["About Us", "Contact Us", "Shipping Policy", "Return Policy", "Size Guide", "FAQs"];
const collections = ["Sarees", "Cotton Suits", "Lehengas", "Kurti Sets", "Plus Size", "New Arrivals"];
const customerCare = ["My Account", "Track Order", "Wishlist", "Privacy Policy"];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                <li key={link}><Link href="#" className="hover:text-primary-foreground/80 transition-colors text-sm">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">OUR COLLECTIONS</h3>
            <ul className="space-y-2">
              {collections.map(link => (
                <li key={link}><Link href="#" className="hover:text-primary-foreground/80 transition-colors text-sm">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-3 text-sm">
              <p>57 Lorong Emilia 3, 08000 Sungai Petani, Kedah, Malaysia</p>
              <p>Phone: +60 12-345 6789</p>
              <p>Email: info@akshayaexclusive.com</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6 hover:text-primary-foreground/80 transition-colors" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6 hover:text-primary-foreground/80 transition-colors" /></Link>
                <span className="self-center">@akshayaec_</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              {customerCare.map(link => (
                <li key={link}><Link href="#" className="hover:text-primary-foreground/80 transition-colors text-sm">{link}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 text-center text-xs text-primary-foreground/70">
          <p>© 2024 Akshaya Exclusive Collection. All Rights Reserved. | Prices in MYR | Shipping to Malaysia &amp; Singapore.</p>
        </div>
      </div>
    </footer>
  );
}
