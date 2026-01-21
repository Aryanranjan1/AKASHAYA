'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MailOpen, Minus, Plus } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    category: 'Styling Tips',
    title: '5 Ways to Drape a Kanchi Cotton Saree for a Modern Look',
    excerpt: 'Reimagine traditional wear with these contemporary draping styles that blend elegance with modern chic. Perfect for any occasion, from brunch to a wedding.',
    date: 'Oct 02, 2024',
  },
  {
    id: 'blog-2',
    category: 'Fabric Care',
    title: 'The Ultimate Guide to Caring for Your Chikankari Outfits',
    excerpt: 'Learn the secrets to preserving the delicate embroidery and soft fabric of your beloved Chikankari pieces, ensuring they last for generations to come.',
    date: 'Sep 28, 2024',
  },
  {
    id: 'blog-3',
    category: 'Behind the Scenes',
    title: 'The Journey of a Banarasi Silk Saree: From Loom to Wardrobe',
    excerpt: 'Explore the rich history and meticulous craftsmanship behind one of the most luxurious fabrics in the world. A tribute to the artisans who weave magic.',
    date: 'Sep 10, 2024',
  },
  {
    id: 'blog-4',
    category: 'Trends',
    title: 'Ethnic Co-ord Sets: The Hottest Trend of the Season',
    excerpt: 'Comfort meets style with the rise of co-ord sets. Discover how to style these versatile outfits for a look that’s both effortless and put-together.',
    date: 'Aug 22, 2024',
  },
  {
    id: 'blog-5',
    category: 'Accessorizing',
    title: 'How to Choose the Perfect Jewelry for Your Ethnic Wear',
    excerpt: 'From statement necklaces to subtle earrings, we break down how to perfectly accessorize your ethnic outfits to complete your look with a touch of sparkle.',
    date: 'Aug 05, 2024',
  },
];

const faqs = [
  {
    question: "What are your shipping options?",
    answer: "We ship across Malaysia and Singapore. We offer standard and express shipping options. Costs and delivery times are calculated at checkout.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 7 days for unused items with original tags. Please visit our Return Policy page for details.",
  },
  {
    question: "How do I care for my handloom sarees?",
    answer: "We recommend dry cleaning for all handloom and silk sarees to preserve their color and fabric integrity. For cotton items, a gentle hand wash is suitable.",
  }
];

export function BlogSection() {
  const authorImage = PlaceHolderImages.find((img) => img.id === 'avatar-author');
  const featuredPost = blogPosts[0];
  const compactPosts = blogPosts.slice(1);
  const featuredPostImage = PlaceHolderImages.find(p => p.id === featuredPost.id);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-24">
        
        <header className="flex items-end gap-8 mb-20 w-full md:flex-row flex-col">
            <div className="flex-shrink-0 md:text-left text-center">
                <span className="font-body text-xs text-accent uppercase tracking-[3px] mb-1 block font-medium">The Edit</span>
                <h2 className="font-headline text-6xl text-primary leading-none m-0 font-normal">Journal <i className="italic font-light">&</i> Support</h2>
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-accent to-accent/20 mb-3 relative hidden md:block">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-accent text-xl bg-white pl-2.5">❖</span>
            </div>
        </header>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-0 items-start relative">
            
            <div className="flex flex-col gap-12 lg:pr-16 lg:border-r lg:border-accent/20 pb-16 mb-16 lg:pb-0 lg:mb-0 lg:border-b-0 border-b border-gray-200">
                
                {featuredPostImage && (
                  <article className="group">
                      <div className="w-full h-[420px] overflow-hidden mb-8 shadow-2xl shadow-black/10">
                          <Image 
                            src={featuredPostImage.imageUrl} 
                            alt={featuredPostImage.description} 
                            width={800}
                            height={420}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-ai-hint={featuredPostImage.imageHint}
                          />
                      </div>
                      <span className="text-xs uppercase tracking-[2px] text-accent border border-accent py-1.5 px-3 inline-block mb-4">{featuredPost.category}</span>
                      <h3 className="font-headline text-4xl text-primary leading-tight mb-4">{featuredPost.title}</h3>
                      <p className="text-base text-foreground/70 leading-relaxed mb-6 font-light">
                        {featuredPost.excerpt}
                      </p>
                      <Link href="#" className="text-sm uppercase tracking-wider text-primary font-semibold border-b border-primary pb-1">Read Full Story</Link>
                  </article>
                )}

                <div className="space-y-4">
                    {compactPosts.map((post) => {
                      const imageData = PlaceHolderImages.find((img) => img.id === post.id);
                      return (
                        <article key={post.id} className="group flex gap-6 items-center py-6 border-t border-gray-100 transition-transform duration-300 hover:translate-x-2.5">
                            {imageData && (
                              <div className="w-[120px] h-[80px] flex-shrink-0">
                                  <Image 
                                    src={imageData.imageUrl} 
                                    alt={imageData.description} 
                                    width={120} 
                                    height={80} 
                                    className="w-full h-full object-cover"
                                    data-ai-hint={imageData.imageHint}
                                  />
                              </div>
                            )}
                            <div>
                                <h3 className="font-headline text-2xl text-foreground leading-tight mb-1">{post.title}</h3>
                                <span className="text-xs text-foreground/50 uppercase tracking-wider">{post.date}</span>
                            </div>
                        </article>
                      )
                    })}
                </div>

            </div>

            <aside className="lg:pl-16 h-full">
                <div className="sticky top-10 flex flex-col gap-12">
                    
                    <div>
                        <div className="font-headline text-xl text-primary border-b border-accent pb-4 mb-6 flex justify-between items-center">
                            <span>Assistance</span>
                        </div>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                          {faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index} className="border-none">
                              <AccordionTrigger className="group w-full text-left bg-gray-50 border-none p-4 font-body font-medium text-foreground/80 hover:no-underline hover:bg-gray-100 hover:text-primary transition-colors data-[state=open]:bg-primary data-[state=open]:text-white [&>svg.lucide-chevron-down]:hidden">
                                <span className="flex-1 text-left">{faq.question}</span>
                                <Plus className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-data-[state=open]:hidden" />
                                <Minus className="h-4 w-4 shrink-0 text-white transition-transform duration-200 hidden group-data-[state=open]:block" />
                              </AccordionTrigger>
                              <AccordionContent className="bg-white p-4 text-sm text-foreground/80 leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 text-center shadow-lg shadow-black/5 border-t-4 border-accent">
                        <MailOpen className="text-4xl text-accent mx-auto mb-4" />
                        <h4 className="font-headline text-3xl mb-2 text-primary">The Inner Circle</h4>
                        <p className="text-sm text-foreground/60 mb-5 leading-relaxed">Join 5,000+ subscribers for first access to new collections.</p>
                        <form className="flex flex-col gap-2.5">
                            <Input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 text-center font-body outline-none transition-colors focus:border-primary bg-white"/>
                            <Button type="submit" className="w-full p-3 bg-primary text-white uppercase text-xs tracking-wider font-semibold cursor-pointer transition-colors hover:bg-accent hover:text-primary">Subscribe</Button>
                        </form>
                    </div>

                </div>
            </aside>

        </div>
      </div>
    </section>
  );
}
