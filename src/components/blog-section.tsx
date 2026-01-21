import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BlogPostCard } from './blog-post-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';

const blogPosts = [
  {
    id: 'blog-1',
    category: 'Styling Tips',
    title: '5 Ways to Drape a Kanchi Cotton Saree for a Modern Look',
    excerpt: 'Reimagine traditional wear with these contemporary draping styles that blend elegance with modern chic. Perfect for any occasion, from brunch to a wedding.',
  },
  {
    id: 'blog-2',
    category: 'Fabric Care',
    title: 'The Ultimate Guide to Caring for Your Chikankari Outfits',
    excerpt: 'Learn the secrets to preserving the delicate embroidery and soft fabric of your beloved Chikankari pieces, ensuring they last for generations to come.',
  },
  {
    id: 'blog-3',
    category: 'Behind the Scenes',
    title: 'The Journey of a Banarasi Silk Saree: From Loom to Wardrobe',
    excerpt: 'Explore the rich history and meticulous craftsmanship behind one of the most luxurious fabrics in the world. A tribute to the artisans who weave magic.',
  },
  {
    id: 'blog-4',
    category: 'Trends',
    title: 'Ethnic Co-ord Sets: The Hottest Trend of the Season',
    excerpt: 'Comfort meets style with the rise of co-ord sets. Discover how to style these versatile outfits for a look that’s both effortless and put-together.',
  },
  {
    id: 'blog-5',
    category: 'Accessorizing',
    title: 'How to Choose the Perfect Jewelry for Your Ethnic Wear',
    excerpt: 'From statement necklaces to subtle earrings, we break down how to perfectly accessorize your ethnic outfits to complete your look with a touch of sparkle.',
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

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Blog Posts Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">FROM THE BLOG</h2>
            </div>
            {blogPosts.map((post) => {
              const imageData = PlaceHolderImages.find((img) => img.id === post.id);
              return (
                <BlogPostCard
                  key={post.id}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={imageData?.imageUrl || ''}
                  imageAlt={imageData?.description || post.title}
                  imageHint={imageData?.imageHint || 'ethnic fashion'}
                  authorName="Leena S."
                  authorImageUrl={authorImage?.imageUrl || ''}
                  authorAvatarFallback="LS"
                  href="#"
                />
              );
            })}
          </div>

          {/* FAQ and Newsletter Column */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">FAQs</h3>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="bg-background border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-lg text-left hover:no-underline text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
                <Card className="bg-background border-border shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-primary text-2xl">JOIN OUR NEWSLETTER</CardTitle>
                        <CardDescription>Get the latest trends and offers straight to your inbox.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <Input 
                                type="email" 
                                placeholder="Email Address" 
                                className="bg-card border-input flex-grow"
                                aria-label="Email Address"
                            />
                            <Button type="submit">
                                SUBSCRIBE
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
