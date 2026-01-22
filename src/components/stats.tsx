import { Heart, Layers, Shirt } from 'lucide-react';
import React from 'react';

const statsData = [
  {
    icon: Heart,
    number: "98",
    suffix: "%",
    label: "Happy Clients"
  },
  {
    icon: Layers,
    number: "1.2k",
    suffix: "+",
    label: "Unique Designs"
  },
  {
    icon: Shirt,
    number: "50",
    suffix: "+",
    label: "New Weekly"
  }
];

const StatItem = ({ icon: Icon, number, suffix, label }: typeof statsData[0]) => (
    <div className="stat-item flex-1 text-center px-1 sm:px-2.5">
        <Icon className="text-accent text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2.5 mx-auto opacity-90" aria-hidden="true"/>
        <span className="stat-number font-headline text-3xl sm:text-4xl md:text-5xl text-primary leading-none block mb-1 whitespace-nowrap">
            {number}
            <span className="text-accent">{suffix}</span>
        </span>
        <span className="stat-label font-body text-[0.55rem] sm:text-[0.7rem] md:text-xs uppercase tracking-wider md:tracking-[2px] text-foreground/80 font-light block leading-tight">
            {label}
        </span>
    </div>
);

const Divider = () => (
    <div className="h-[30px] md:h-[50px] w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-40" />
);

export function Stats() {
  return (
    <section id="stat-strip" className="bg-muted py-10 md:py-12">
      <div className="container mx-auto px-2 sm:px-5">
        <div className="flex justify-around items-center">
            {statsData.map((stat, index) => (
                <React.Fragment key={stat.label}>
                    <StatItem {...stat} />
                    {index < statsData.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
}
