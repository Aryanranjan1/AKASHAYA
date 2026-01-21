import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';

const navLinks = [
  { name: 'NEW ARRIVALS', href: '#' },
  { name: 'SAREES', href: '#' },
  { name: 'COTTON SUITS', href: '#' },
  { name: 'LEHENGAS', href: '#' },
  { name: 'PLUS SIZE', href: '#' },
  { name: 'ABOUT US', href: '#' },
  { name: 'CONTACT', href: '#' },
];

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-14 border-b">
          <div className="text-sm text-foreground/70">
            Malaysia | Singapore
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User profile">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">0</span>
            </Button>
          </div>
        </div>

        {/* Logo */}
        <div className="py-6 text-center">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="border-t">
          <ul className="flex items-center justify-center space-x-4 md:space-x-8 h-12 text-sm font-medium overflow-x-auto">
            {navLinks.map((link) => (
              <li key={link.name} className="flex-shrink-0">
                <Link href={link.href} className="text-foreground hover:text-accent transition-colors tracking-wider">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
