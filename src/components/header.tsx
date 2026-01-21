import Link from 'next/link';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'COLLECTION', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'CONTACT', href: '#' },
];

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] bg-background p-6 flex flex-col">
                        <Logo className="mb-8" />
                        <nav>
                            <ul className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-lg text-foreground hover:text-accent transition-colors tracking-wider">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
            <Logo className="hidden md:block" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
            <ul className="flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="text-foreground hover:text-accent transition-colors tracking-wider">
                    {link.name}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
        
        {/* Logo for mobile */}
        <div className="md:hidden">
            <Logo />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2">
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
    </header>
  );
}
