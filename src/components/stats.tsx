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
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-2 md:gap-4">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary md:p-3">
                <stat.icon className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-foreground md:text-2xl">{stat.value}</p>
                <p className="text-[10px] leading-tight text-secondary md:text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
