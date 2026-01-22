import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { ProductCarousel } from '@/components/product-carousel';
import { AboutUs } from '@/components/about-us';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { Social } from '@/components/social';
import { BlogSection } from '@/components/blog-section';
import { Stats } from '@/components/stats';
import { HeritageSeries } from '@/components/heritage-series';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Stats />
        <ProductCarousel />
        <HeritageSeries />
        <AboutUs />
        <Testimonials />
        <Social />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
