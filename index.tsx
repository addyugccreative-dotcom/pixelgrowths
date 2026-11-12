import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { VideoSlot, BrowserMockup, Reveal } from "@/components/media-slots";
import dinoGarden from "@/assets/videos/toykenza_dino_garden.mp4.asset.json";
import scooterOutdoor from "@/assets/videos/toykenza_scooter_outdoor.mp4.asset.json";
import dinoIndoor from "@/assets/videos/toykenza_dino_indoor.mp4.asset.json";
import novaReveal from "@/assets/videos/toykenza_nova_reveal.mp4.asset.json";
import unboxing from "@/assets/videos/toykenza_unboxing.mp4.asset.json";
import unboxingDesk from "@/assets/videos/toykenza_unboxing_desk.mp4.asset.json";
import ugcA from "@/assets/videos/ugc_creator_17ab2596.mp4.asset.json";
import ugcB from "@/assets/videos/ugc_creator_fb159739.mp4.asset.json";
import jewelleryFilm from "@/assets/videos/jewellery_kundan_film.mp4.asset.json";

const toykenzaVideos = [
  ["Lifestyle · outdoor", dinoGarden.url],
  ["Lifestyle · outdoor", scooterOutdoor.url],
  ["Lifestyle · indoor", dinoIndoor.url],
  ["Product reveal", novaReveal.url],
  ["Unboxing", unboxing.url],
  ["Unboxing", unboxingDesk.url],
] as const;

const TITLE = "Pixel Growth — Marketing & AI-made creative";
const DESC =
  "Pixel Growth is a digital marketer shipping AI UGC ads, AI video, social, SEO, performance marketing and websites for brands that want to grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ic = (d: string) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const services = [
  ["Social media management", "Content calendars, daily posting, and community replies — accounts that stay active and on-brand.", "M4 5h16v11H8l-4 4zM8 9h8M8 12h5"],
  ["AI image generation", "Product and lifestyle visuals generated and retouched with AI — no studio booking required.", "M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4M15 9h.01"],
  ["AI UGC ads", "Creator-style ad videos — talking, unboxing, reacting — made without booking a single creator.", "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3"],
  ["AI video production", "Short-form and ad videos for Reels, TikTok, and YouTube, built around the brand's product.", "M3 6h13v12H3zM16 10l5-3v10l-5-3"],
  ["SEO", "On-page, technical, and content SEO that moves a site up the rankings that actually matter.", "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4M8 12l2-2 2 2 2-3"],
  ["Website design", "Layouts and UI planned around how the brand actually sells, before a line of code is written.", "M3 4h18v16H3zM3 9h18M9 9v11"],
  ["Website development", "The design built, made responsive, and launched — handed over ready to edit.", "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"],
  ["Performance marketing", "Meta Ads and Google Ads planned, run, and optimised around a target return, not just clicks.", "M3 20h18M6 16l4-5 3 3 5-7M15 7h3v3"],
] as const;

const steps = [
  ["01", "Brief & audit", "A look at the brand, the competition, and what's already working — or not."],
  ["02", "Content & creative", "AI-generated images, UGC ads, and video built around the actual product."],
  ["03", "Site & SEO", "A site that's fast, on-brand, and set up to rank — or fixes to the one already live."],
  ["04", "Ads & reporting", "Meta and Google campaigns launched, optimised, and reported on weekly."],
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Pixel Growth — back to top">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-[family-name:var(--font-display)] text-xs font-extrabold text-primary-foreground transition-transform group-hover:-rotate-6">
        PG
      </span>
      <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">Pixel Growth</span>
    </a>
  );
}

function Btn({ href, children, ghost, ext }: { href: string; children: ReactNode; ghost?: boolean; ext?: boolean }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const style = ghost
    ? "border border-border text-foreground hover:border-secondary hover:text-secondary"
    : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_var(--primary)]";
  return (
    <a href={href} className={`${base} ${style}`} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

function SectionHead({ k, title, children }: { k: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="mb-14">
    <div className=" grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{k}</p>
        <h2 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">{title}</h2>
      </div>
      {children && <p className="max-w-lg text-muted-foreground md:justify-self-end">{children}</p>}
    </div>
    </Reveal>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-secondary/30 px-3 py-1 text-xs text-secondary">{t}</li>
      ))}
    </ul>
  );
}

function CaseHeader({ n, title, kind, tags, children }: { n: string; title: string; kind: string; tags: string[]; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-4">
        <span className="font-[family-name:var(--font-display)] text-sm text-primary">{n}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{kind}</span>
      </div>
      <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
      <p className="max-w-md leading-relaxed text-muted-foreground">{children}</p>
      <Tags items={tags} />
    </div>
  );
}

function Index() {
  const d = (ms: number) => ({ animationDelay: `${ms}ms` });
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
          <Logo />
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {["Work", "Services", "Process", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-foreground">{l}</a></li>
            ))}
          </ul>
          <a href="#contact" className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Start a project
          </a>
        </nav>
        <ul className="flex justify-around border-t border-border py-2.5 text-sm text-muted-foreground md:hidden">
          {["Work", "Services", "Process", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="px-2 py-1 hover:text-foreground">{l}</a></li>
          ))}
        </ul>
      </header>

      <main>
        {/* Hero */}
        <section className="grain relative">
          <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28">
            <p className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground" style={d(0)}>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Available for new projects
            </p>
            <h1 className="max-w-5xl text-[2.6rem] font-extrabold leading-[0.95] sm:text-7xl lg:text-[6.5rem]">
              <span className="rise block" style={d(100)}>Marketing &amp;</span>
              <span className="rise block" style={d(220)}>
                <span className="relative inline-block text-primary">
                  AI-made creative
                  <span className="draw absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-primary/40" />
                </span>
              </span>
              <span className="rise block text-foreground/80" style={d(340)}>for brands that want to grow.</span>
            </h1>
            <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
              <p className="rise max-w-xl text-lg leading-relaxed text-muted-foreground" style={d(500)}>
                I'm Pixel Growth — a digital marketer who plans the strategy, shoots nothing, and still ships ads, UGC, and websites that convert. Social, SEO, performance, and the websites that hold it all together.
              </p>
              <div className="rise flex flex-wrap gap-3 md:justify-end" style={d(620)}>
                <Btn href="#work">See the work ↓</Btn>
                <Btn href="#contact" ghost>Get in touch</Btn>
              </div>
            </div>
            <p className="rise mt-16 border-t border-border pt-6 text-sm text-muted-foreground" style={d(760)}>
              <span className="text-foreground">Clients:</span> Toykenza, Calligraphy India, jewellery &amp; D2C brands · Based in India, working with brands worldwide
            </p>
          </div>
        </section>

        <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground" aria-hidden>
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-[family-name:var(--font-display)] text-2xl font-bold">
            {[...services, ...services].map(([t], i) => (
              <span key={i} className="flex items-center gap-10">{t}<span>✺</span></span>
            ))}
          </div>
        </div>

        {/* Work */}
        <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <SectionHead k="Selected work" title="Proof, not promises.">
            Recent projects — short-form AI creative built for vertical feeds, and a website built end to end.
          </SectionHead>

          <article className="grid gap-12 border-t border-border py-14">
            <Reveal><CaseHeader n="01" title="Toykenza" kind="Kids' ride-on toys" tags={["AI UGC ads", "AI video production", "Social media"]}>
              A run of AI-produced UGC and lifestyle ad videos for Toykenza's ride-on dinosaur and scooter range — kids playing, parents reacting, and the unboxing moment — built for Reels and TikTok without booking a single shoot.
            </CaseHeader></Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {toykenzaVideos.map(([label, src], i) => (
                <Reveal key={src} delay={i * 90} className={i % 2 ? "lg:mt-12" : ""}>
                  <VideoSlot label={label} src={src} />
                </Reveal>
              ))}
            </div>
          </article>

          <article className="grid gap-10 border-t border-border py-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal><CaseHeader n="02" title="Jewellery ad campaign" kind="Fine jewellery, product film" tags={["AI video production", "AI image generation"]}>
              A close-up product video for a kundan earring set, AI-generated to show the craftsmanship and stonework without a studio shoot — built for Instagram and WhatsApp catalogue use.
            </CaseHeader></Reveal>
            <Reveal delay={150} className="mx-auto w-full max-w-[300px] lg:mx-0">
              <VideoSlot label="Product film" src={jewelleryFilm.url} />
            </Reveal>
          </article>

          <article className="grid gap-10 border-t border-border py-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal><CaseHeader n="03" title="Festive UGC ads" kind="Social media · Diwali campaign" tags={["AI UGC ads", "Social media", "AI video production"]}>
              Creator-style talking-to-camera ads for the festive season — presenters introducing the product in warm, diya-lit home settings, made for Instagram Reels and Stories without booking a creator.
            </CaseHeader></Reveal>
            <div className="grid max-w-[620px] grid-cols-2 gap-4">
              <Reveal delay={100}><VideoSlot label="UGC · presenter" src={ugcA.url} /></Reveal>
              <Reveal delay={220} className="mt-12"><VideoSlot label="UGC · product in hand" src={ugcB.url} /></Reveal>
            </div>
          </article>

          <article className="grid gap-10 border-t border-border py-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal className="flex flex-col gap-8">
              <CaseHeader n="04" title="Calligraphy India" kind="Calligraphy school & studio" tags={["Website design", "Website development", "SEO"]}>
                A full website build for a Delhi-based calligraphy school and studio — course listings, workshop galleries, and a founder timeline, designed and built end to end.
              </CaseHeader>
              <div><Btn href="https://calligraphyindia.com/" ghost ext>Visit calligraphyindia.com ↗</Btn></div>
            </Reveal>
            <Reveal delay={150}><BrowserMockup /></Reveal>
          </article>
        </section>

        {/* Services */}
        <section id="services" className="band-dark">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
            <SectionHead k="Services" title="Everything a growing brand needs.">
              One person, one plan — from the creative that stops the scroll to the site and ads that turn it into sales.
            </SectionHead>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map(([t, desc, path], i) => (
                <li key={t} className="group relative bg-surface p-7 transition-colors duration-300 hover:bg-surface-2">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors group-hover:border-primary/50">{ic(path)}</span>
                    <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <SectionHead k="Process" title="How a project runs." />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, t, desc], i) => (
              <Reveal key={n} delay={i * 120}><li className="group border-t border-border pt-6 transition-colors hover:border-secondary">
                <span className="font-[family-name:var(--font-display)] text-6xl font-extrabold text-foreground/15 transition-colors group-hover:text-secondary">{n}</span>
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li></Reveal>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="grain border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Contact</p>
            <h2 className="max-w-4xl text-4xl font-extrabold leading-[1] sm:text-6xl md:text-7xl">
              Have a brand that's <span className="text-primary">ready to grow?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Send over what you're working on — a product, a launch, a site that needs rebuilding — and I'll reply with a plan.
            </p>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {[
                { k: "Email", v: "pixelgrowth13@gmail.com", href: "mailto:pixelgrowth13@gmail.com" },
                { k: "Instagram", v: "@_pixel_growth", href: "https://www.instagram.com/_pixel_growth/", ext: true },
              ].map((c) => (
                <a
                  key={c.k}
                  href={c.href}
                  {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-end justify-between gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.k}</p>
                    <p className="mt-3 break-all font-[family-name:var(--font-display)] text-lg font-semibold sm:text-3xl">{c.v}</p>
                  </div>
                  <span aria-hidden className="text-2xl text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 Pixel Growth</p>
          <p>Digital marketing · AI creative · Websites</p>
        </div>
      </footer>
    </div>
  );
}
