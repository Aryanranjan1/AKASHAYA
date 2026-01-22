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
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs md:text-sm text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
