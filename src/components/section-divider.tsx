export function SectionDivider() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-accent/20" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-muted px-4 text-accent text-2xl">
            ❖
          </span>
        </div>
      </div>
    </div>
  );
}
