import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { FeaturedCollections } from '@/components/featured-collections';
import { AboutUs } from '@/components/about-us';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { Social } from '@/components/social';
import { Faq } from '@/components/faq';
import { Stats } from '@/components/stats';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Stats />
        <FeaturedCollections />
        <AboutUs />
        <Testimonials />
        <Social />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
