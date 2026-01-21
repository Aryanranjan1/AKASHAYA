import { cn } from "@/lib/utils";

export function DecorativeArchFrame({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <mask id="arch-mask">
            <rect width="100%" height="100%" fill="white" />
            <path
              d="M 480 0 C 480 200, 240 300, 240 600 L 0 600 L 0 0 Z"
              fill="black"
            />
            <path
              d="M 960 0 C 960 200, 1200 300, 1200 600 L 1440 600 L 1440 0 Z"
              fill="black"
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="hsl(var(--background))" mask="url(#arch-mask)" />
      </svg>
    </div>
  );
}
