import { Heart, Palette, Shirt } from 'lucide-react';

const stats = [
  {
    icon: Heart,
    value: "98%",
    label: "Customer Satisfaction"
  },
  {
    icon: Palette,
    value: "1,200+",
    label: "Unique Designs"
  },
  {
    icon: Shirt,
    value: "50+",
    label: "New Styles Weekly"
  }
];

export function Stats() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-10 h-10 text-primary mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-base text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
