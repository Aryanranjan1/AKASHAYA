import { Star, Layers, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const infoItems = [
  {
    icon: Star,
    header: "NEW ARRIVALS",
    text: "Stay updated with our latest ethnic wear additions. Explore new designs weekly."
  },
  {
    icon: Layers,
    header: "QUALITY FABRICS",
    text: "Discover our commitment to authentic materials, from premium cottons to rich silks."
  },
  {
    icon: Heart,
    header: "CUSTOMER LOVE",
    text: "Join our community of style-conscious women. Check out our positive reviews on social media."
  }
];

export function InfoBlock() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">OUR COLLECTIONS &amp; UPDATES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <Card key={index} className="text-center bg-background border-none shadow-lg p-6">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{item.header}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
