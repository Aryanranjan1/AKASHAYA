import { Header } from '@/components/header';
import { FeaturedCollections } from '@/components/featured-collections';
import { LatestArrivals } from '@/components/latest-arrivals';
import { AboutUs } from '@/components/about-us';
import { InfoBlock } from '@/components/info-block';
import { NewsletterSubscription } from '@/components/newsletter-subscription';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FeaturedCollections />
        <LatestArrivals />
        <AboutUs />
        <InfoBlock />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
