import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const socialImageIds = [
    "social-1",
    "social-2",
    "social-3",
    "social-4",
    "social-5",
    "social-6",
    "social-7",
]

const socialMeta = [
    "Shop The Look",
    "View Post",
    "New Collection",
    "Behind Scenes",
    "Our Story",
    "Festive Edit",
    "Customer Love"
];

export function Social() {
  const socialImages = socialImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section id="social-section" className="w-full overflow-hidden bg-white">
        <div className="relative w-full max-w-full py-20 lg:py-24">
            
            <div className="absolute top-40 left-0 z-0 whitespace-nowrap font-headline text-[5rem] md:text-[10rem] leading-none text-primary/5 select-none animate-ticker-scroll pointer-events-none">
                <span className="mr-4">@akshayaec_ •</span>
                <span className="mr-4">@akshayaec_ •</span>
                <span className="mr-4">@akshayaec_ •</span>
                <span className="mr-4">@akshayaec_ •</span>
            </div>

            <header className="relative z-10 mx-auto flex max-w-7xl items-end gap-8 px-5 mb-16 w-full md:flex-row flex-col">
                <div className="flex-shrink-0 md:text-left text-center">
                    <span className="font-body text-xs text-accent uppercase tracking-[3px] mb-1 block font-medium">Connect</span>
                    <h2 className="font-headline text-6xl text-primary leading-none m-0 font-normal">The Social <i className="italic font-light">Edit</i></h2>
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-accent to-accent/20 mb-3 relative hidden md:block">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-xl bg-white pl-2.5">❖</span>
                </div>
            </header>

            <div className="scrollbar-webkit scrollbar-thin w-full overflow-x-auto pb-10 pl-5">
                <div className="flex w-max gap-5 pr-5">
                    {socialImages.map((image, index) => image && (
                        <Link href="#" key={image.id} className="group relative block w-[220px] sm:w-[260px] md:w-[300px] aspect-[1/1.2] flex-shrink-0 overflow-hidden border border-accent/30 bg-background cursor-pointer transition-all">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                                sizes="(max-width: 640px) 60vw, (max-width: 768px) 40vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-primary/85 flex flex-col justify-center items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Instagram className="text-accent text-3xl" />
                                <span className="text-primary-foreground uppercase text-xs tracking-[2px] border-b border-accent pb-1.5">{socialMeta[index] || 'View Post'}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="text-center mt-10 relative z-10">
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-[2px] uppercase h-auto py-4 px-10">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2.5"/> Follow @akshayaec_
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
