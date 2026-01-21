import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { FeaturedCollections } from '@/components/featured-collections';
import { AboutUs } from '@/components/about-us';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { Social } from '@/components/social';
import { BlogSection } from '@/components/blog-section';
import { Stats } from '@/components/stats';
import { ShopByCategory } from '@/components/shop-by-category';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Stats />
        <FeaturedCollections />
        <ShopByCategory />
        <AboutUs />
        <Testimonials />
        <Social />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
