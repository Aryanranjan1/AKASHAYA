'use client';

import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'COLLECTION', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'CONTACT', href: '#' },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlHeader, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, []);

  return (
    <header
      className={cn(
        'bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b transition-transform duration-300 ease-in-out',
        !isVisible && '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-4 relative flex items-center justify-between h-16 md:border-l md:border-border">
        <div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <div className="flex flex-col justify-between w-6 h-6 transform transition-all duration-300 origin-center">
                  <div
                    className={cn(
                      'bg-foreground h-[2px] w-full rounded-full transform transition-all duration-300 origin-left',
                      isSheetOpen && 'rotate-[45deg] w-7'
                    )}
                  />
                  <div
                    className={cn(
                      'bg-foreground h-[2px] w-full rounded-full transition-all duration-300',
                      isSheetOpen && 'opacity-0'
                    )}
                  />
                  <div
                    className={cn(
                      'bg-foreground h-[2px] w-full rounded-full transform transition-all duration-300 origin-left',
                      isSheetOpen && '-rotate-[45deg] w-7'
                    )}
                  />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background p-6 flex flex-col">
              <SheetHeader className="mb-8">
                <Logo />
              </SheetHeader>

              <nav className="flex-grow">
                <ul className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-lg text-foreground hover:text-accent transition-colors tracking-wider"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t pt-6 mt-6 space-y-2">
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md text-base text-foreground hover:bg-muted hover:text-accent transition-colors"
                >
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md text-base text-foreground hover:bg-muted hover:text-accent transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>My Account</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between w-full p-2 rounded-md text-base text-foreground hover:bg-muted hover:text-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    0
                  </span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User profile">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
