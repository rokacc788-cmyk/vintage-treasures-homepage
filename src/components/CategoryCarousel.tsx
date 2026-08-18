import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselItem {
  src: string;
  label: string;
}

export function CategoryCarousel({
  items,
  title,
}: {
  items: CarouselItem[];
  title: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(Math.floor(items.length / 2));

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const node = child as HTMLElement;
      const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
      const dist = Math.abs(nodeCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Start with the middle item centred.
    const middle = el.children[Math.floor(items.length / 2)] as
      | HTMLElement
      | undefined;
    if (middle) {
      el.scrollLeft =
        middle.offsetLeft + middle.offsetWidth / 2 - el.clientWidth / 2;
    }
    update();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length, update]);

  return (
    <div
      ref={scrollerRef}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[15%] py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label={`${title} sample photographs`}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <figure
            key={item.label}
            className={`relative w-56 shrink-0 snap-center overflow-hidden rounded-lg border transition-all duration-500 ease-out sm:w-64 ${
              isActive
                ? "z-10 scale-110 border-brass/70 shadow-2xl shadow-black/30"
                : "scale-95 border-border opacity-70 saturate-[0.85]"
            }`}
          >
            <img
              src={item.src}
              alt={`${title} — ${item.label}`}
              loading="lazy"
              width={800}
              height={600}
              className="h-40 w-full object-cover sm:h-44"
            />
            <figcaption
              className={`px-3 py-2 font-body text-xs tracking-wide transition-colors ${
                isActive
                  ? "bg-brass/15 text-foreground"
                  : "bg-card text-muted-foreground"
              }`}
            >
              {item.label}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
