import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades/slides children in when they scroll into view. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/**
 * Vertical video slot. Autoplays muted while on screen; click to unmute.
 * Pass `src` (e.g. an .asset.json `.url`) — without it a placeholder shows.
 */
export function VideoSlot({ label, src }: { label: string; src?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e?.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.4 });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <figure className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-surface media-placeholder shadow-[0_20px_40px_-20px_var(--foreground)] transition-all duration-500 hover:-translate-y-2 hover:rotate-[-1deg]">
      {src ? (
        <>
          <video
            ref={ref}
            src={`${src}#t=0.5`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            muted={muted}
            loop
            playsInline
            preload="metadata"
          />
          <button
            type="button"
            onClick={() => {
              setMuted((m) => !m);
              ref.current?.play().catch(() => {});
            }}
            aria-label={muted ? `Unmute ${label}` : `Mute ${label}`}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-transform hover:scale-110"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}><path d="M11 5 6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}><path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>
            )}
          </button>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-primary">▶</div>
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/90 to-transparent p-3 pt-12 text-xs font-medium on-dark">
        {label}
      </figcaption>
    </figure>
  );
}

export function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_var(--foreground)] transition-transform duration-500 hover:-translate-y-2">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
        <span className="ml-3 truncate rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">calligraphyindia.com</span>
      </div>
      <div className="p-8 sm:p-12">
        <div className="mb-10 flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Courses</span><span>Workshops</span><span>Gallery</span><span className="hidden sm:inline">Founder</span>
        </div>
        <p className="font-[family-name:var(--font-script)] text-4xl italic text-primary sm:text-6xl">Calligraphy India</p>
        <p className="mt-3 max-w-xs text-sm text-muted-foreground">The art of the letter — courses & studio, New Delhi.</p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => <div key={i} className="aspect-[4/3] rounded-lg bg-muted" />)}
        </div>
      </div>
    </div>
  );
}
