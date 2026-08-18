import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  Menu,
  Camera,
  Shirt,
  Binoculars,
  Armchair,
  Gem,
  Radio,
  Compass,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

import heroShop from "@/assets/hero-shop.jpg";
import owner from "@/assets/owner.jpg";
import shopFront from "@/assets/shop-front.jpg";
import catCameras from "@/assets/cat-cameras.jpg";
import catClothing from "@/assets/cat-clothing.jpg";
import catOptics from "@/assets/cat-optics.jpg";
import catFurniture from "@/assets/cat-furniture.jpg";
import catAntiques from "@/assets/cat-antiques.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catUnusual from "@/assets/cat-unusual.jpg";
import { CategoryCarousel } from "@/components/CategoryCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Miller's Antiques & Curiosities | Independent Vintage Shop in the UK",
      },
      {
        name: "description",
        content:
          "Discover timeless treasures at Miller's Antiques — vintage cameras, curiosities, clothing, furniture and unusual finds in a warm, atmospheric UK shop.",
      },
      {
        property: "og:title",
        content: "Miller's Antiques & Curiosities | Independent Vintage Shop in the UK",
      },
      {
        property: "og:description",
        content:
          "Discover timeless treasures at Miller's Antiques — vintage cameras, curiosities, clothing, furniture and unusual finds in a warm, atmospheric UK shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeSell />
        <FindUsOnline />
        <MeetTheOwner />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Sell", href: "#what-we-sell" },
  { label: "Online", href: "#online" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-wood text-wood-foreground shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/60 bg-brass/10 text-brass transition-colors group-hover:bg-brass group-hover:text-primary-foreground">
            <Gem className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">
              Miller's Antiques
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-brass sm:block">
              Est. 1987
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-sm font-medium tracking-wide text-wood-foreground/80 transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <SocialIcon type="facebook" />
          <SocialIcon type="ebay" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-wood-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-border bg-wood text-wood-foreground"
          >
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/60 bg-brass/10 text-brass">
                  <Gem className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-semibold">
                    Miller's Antiques
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brass">
                    Est. 1987
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                        setOpen(false);
                      }}
                      className="text-lg font-medium tracking-wide text-wood-foreground/80 transition-colors hover:text-brass"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <SocialIcon type="facebook" />
                <SocialIcon type="ebay" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SocialIcon({ type }: { type: "facebook" | "ebay" }) {
  const baseClass =
    "text-wood-foreground/70 transition-colors hover:text-brass";

  if (type === "facebook") {
    return (
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={baseClass}
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href="https://ebay.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="eBay"
      className={baseClass}
    >
        <EbayLogo className="h-5 w-5" />

    </a>
  );
function EbayLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 36 24"
      aria-hidden="true"
    >
      <text
        x="18"
        y="17.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="700"
      >
        ebay
      </text>
    </svg>
  );
}

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroShop}
          alt="Interior of Miller's Antiques shop filled with vintage cameras, brass items and curiosities"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood/80 via-wood/60 to-wood/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <span className="mb-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
          Est. 1987 • Independent Vintage Shop
        </span>
        <h1 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
          Miller's Antiques <br className="hidden sm:block" />
          & Curiosities
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/90 md:text-xl">
          Step inside a hidden world of timeless treasures. We hand-pick vintage
          cameras, curiosities, clothing and unusual finds from across the UK —
          each one with a story to tell.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => scrollTo("#what-we-sell")}
            className="group h-12 rounded-full bg-brass px-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-gold"
          >
            Explore the Shop
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => scrollTo("#contact")}
            variant="outline"
            className="h-12 rounded-full border-cream/30 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-cream hover:bg-cream/10 hover:text-cream"
          >
            Visit Us
          </Button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
          Our Story
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          A Family Passion for the Past
        </h2>
        <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
          <p>
            For over three decades, Miller's Antiques has been a quiet corner of
            discovery for collectors, storytellers and the simply curious. We
            are a small independent shop in the heart of the UK, sourcing
            pre-loved pieces that deserve a second life.
          </p>
          <p>
            We do not sell online from this website — every item is here to be
            touched, inspected and wondered at in person. You will also find
            selected pieces on our eBay and Facebook pages.
          </p>
        </div>
      </div>
    </section>
  );
}

const categories = [
  {
    icon: Camera,
    title: "Cameras & Photography",
    image: catCameras,
    description:
      "Vintage film cameras, lenses, darkroom equipment and photographic curiosities.",
  },
  {
    icon: Shirt,
    title: "Vintage Clothing",
    image: catClothing,
    description:
      "Carefully selected garments, accessories and textiles from decades past.",
  },
  {
    icon: Binoculars,
    title: "Binoculars & Optics",
    image: catOptics,
    description:
      "Brass binoculars, opera glasses, telescopes and other optical instruments.",
  },
  {
    icon: Armchair,
    title: "Furniture",
    image: catFurniture,
    description:
      "Characterful chairs, tables, cabinets and small pieces for the home.",
  },
  {
    icon: Gem,
    title: "Antiques & Collectibles",
    image: catAntiques,
    description:
      "Coins, medals, silver, jewellery, prints and small decorative treasures.",
  },
  {
    icon: Radio,
    title: "Vintage Electronics",
    image: catElectronics,
    description:
      "Radios, record players, typewriters and other classic technology.",
  },
  {
    icon: Compass,
    title: "Unusual Finds",
    image: catUnusual,
    description:
      "The unexpected, the curious and the one-of-a-kind items that defy category.",
  },
];

function WhatWeSell() {
  return (
    <section id="what-we-sell" className="bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
            What We Sell
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Treasures Waiting to Be Found
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Our stock changes constantly. Here is the kind of thing you can
            expect to discover on our shelves — scroll each row sideways to
            browse.
          </p>
        </div>
        <div className="space-y-10 md:space-y-14">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card/60 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-brass">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-card-foreground md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <CategoryCarousel
                title={category.title}
                items={[1, 2, 3, 4, 5].map((n) => ({
                  src: category.image,
                  label: `Sample photo ${n}`,
                }))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FindUsOnline() {
  return (
    <section id="online" className="bg-wood py-20 text-wood-foreground md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
            Find Us Online
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cream md:text-4xl lg:text-5xl">
            Follow Us & Shop on eBay
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-cream/80">
            We do not sell directly through this website, but you can keep up with
            new arrivals, shop events and behind-the-scenes stories on Facebook, or
            browse selected pieces on our eBay shop.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-brass/30 bg-wood-foreground/5 p-8 transition-all hover:border-brass/70 hover:bg-wood-foreground/10 hover:shadow-2xl hover:shadow-black/30 md:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brass/10 text-brass transition-colors group-hover:bg-brass group-hover:text-primary-foreground">
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-cream md:text-2xl">
                  Facebook
                </h3>
                <p className="mt-1 font-body text-sm text-wood-foreground/70">
                  New arrivals, events and shop life.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center font-body text-sm font-semibold text-brass transition-colors group-hover:text-gold">
              Visit our page
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          <a
            href="https://ebay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-brass/30 bg-wood-foreground/5 p-8 transition-all hover:border-brass/70 hover:bg-wood-foreground/10 hover:shadow-2xl hover:shadow-black/30 md:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brass/10 text-brass transition-colors group-hover:bg-brass group-hover:text-primary-foreground">
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.411 9.303c-1.05 0-1.884.602-2.202 1.645l-.031.104-.25-1.749h-4.04c-1.343 0-2.4.11-3.281.524-.99.465-1.65 1.263-1.65 2.415 0 .96.443 1.721 1.214 2.2.524.32 1.214.498 2.126.55l.02.001h1.58v-.056c-.002-.698-.355-1.05-1.1-1.05-.594 0-1.026.254-1.198.682l-2.002-.077c.1-.577.424-1.08.938-1.44.593-.418 1.412-.638 2.437-.638 1.2 0 2.05.244 2.552.732.388.375.582.902.582 1.581v3.47l.05.012c.61.16 1.15.24 1.65.24.2 0 .39-.012.57-.036v-1.92c.42.82 1.25 1.32 2.33 1.32 1.52 0 2.55-.91 2.89-2.52l-2.02-.37c-.16.65-.56 1.01-1.13 1.01-.58 0-.92-.37-.92-1.03v-.07h3.87c.05-.25.08-.51.08-.78 0-1.58-.94-2.55-2.47-2.55zm-.52 2.04c.47 0 .78.33.78.87 0 .01 0 .02-.01.03h-1.69v-.03c0-.52.32-.87.78-.87h.14zM8.5 14.1H6.95c-.7 0-1.2-.13-1.49-.39-.24-.21-.37-.51-.37-.88 0-.47.2-.82.62-1.05.44-.24 1.04-.36 1.86-.36h1.88v2.68zM17.65 6.1c-2.05 0-3.45 1.16-3.9 3.11l2.06.35c.2-.93.74-1.4 1.6-1.4.74 0 1.16.37 1.16 1.04 0 .08-.01.16-.03.24l-.01.04-2.34.34c-1.8.27-2.84 1.18-2.84 2.53 0 1.5 1.1 2.46 2.77 2.46 1.13 0 1.95-.47 2.47-1.42l.03.06v1.17h1.93V9.45c0-1.96-1.06-3.35-2.79-3.35zm.67 4.55v.41c0 .87-.53 1.45-1.32 1.45-.58 0-.93-.34-.93-.91 0-.52.34-.86.94-.98l1.31-.24v.27z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-cream md:text-2xl">
                  eBay Shop
                </h3>
                <p className="mt-1 font-body text-sm text-wood-foreground/70">
                  Selected pieces available to buy online.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center font-body text-sm font-semibold text-brass transition-colors group-hover:text-gold">
              Browse on eBay
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function MeetTheOwner() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-brass/30" />
            <img
              src={owner}
              alt="Portrait of Sarah Miller, owner of Miller's Antiques"
              className="relative rounded-xl object-cover shadow-2xl"
              width={800}
              height={1008}
              loading="lazy"
            />
          </div>
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
              Meet the Owner
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
              Hello, I'm Sarah Miller
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              I opened Miller's Antiques in 1987 after years of collecting
              cameras, curiosities and oddities from attic sales and country
              auctions across Britain. What started as a personal obsession became
              a shop where everyone is welcome to browse, ask questions and lose
              track of time.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              I believe every object has a story. My favourite part of the day is
              helping a visitor find the one piece that speaks to them — whether
              it is a 1950s camera, a brass compass or a chair with a hundred
              years of history.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="font-display text-lg italic text-brass">
                "Come in and make a discovery."
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section id="contact" className="bg-wood py-20 text-wood-foreground md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brass">
              Visit Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-cream md:text-4xl lg:text-5xl">
              Find Us in the Heart of Town
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-wood-foreground/80">
              We would love to see you. The shop is a short walk from the main
              car park and easily reached by bus. Feel free to call ahead if you
              are travelling especially to see us.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream">
                      Address
                    </h3>
                    <p className="font-body text-wood-foreground/80">
                      12 High Street
                      <br />
                      Market Town
                      <br />
                      Shropshire, SY1 1AB
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream">
                      Phone
                    </h3>
                    <p className="font-body text-wood-foreground/80">
                      01743 123 456
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream">
                      Email
                    </h3>
                    <p className="font-body text-wood-foreground/80">
                      hello@millersantiques.co.uk
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream">
                      Opening Hours
                    </h3>
                    <ul className="font-body text-wood-foreground/80">
                      <li>Mon – Fri: 10:00 – 17:00</li>
                      <li>Saturday: 09:30 – 17:30</li>
                      <li>Sunday: 11:00 – 16:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button
                asChild
                className="h-12 rounded-full bg-brass px-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-gold"
              >
                <a
                  href="https://maps.google.com/?q=12+High+Street+Market+Town+Shropshire+SY1+1AB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={shopFront}
              alt="Exterior of Miller's Antiques shop front"
              className="rounded-xl object-cover shadow-2xl"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-wood text-wood-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/60 bg-brass/10 text-brass">
                <Gem className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold">
                  Miller's Antiques
                </span>
                <p className="font-body text-xs text-brass">Est. 1987</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-wood-foreground/70">
              Independent vintage, antique and second-hand shop in the UK. Every
              visit is a new discovery.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>
                <a
                  href="#home"
                  className="text-wood-foreground/70 transition-colors hover:text-brass"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#what-we-sell"
                  className="text-wood-foreground/70 transition-colors hover:text-brass"
                >
                  What We Sell
                </a>
              </li>
              <li>
                <a
                  href="#online"
                  className="text-wood-foreground/70 transition-colors hover:text-brass"
                >
                  Find Us Online
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-wood-foreground/70 transition-colors hover:text-brass"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-wood-foreground/70 transition-colors hover:text-brass"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-cream">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-wood-foreground/70">
              <li>12 High Street, Market Town</li>
              <li>Shropshire, SY1 1AB</li>
              <li>01743 123 456</li>
              <li>hello@millersantiques.co.uk</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-cream">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-wood-foreground/70">
              <li>Mon – Fri: 10:00 – 17:00</li>
              <li>Saturday: 09:30 – 17:30</li>
              <li>Sunday: 11:00 – 16:00</li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon type="facebook" />
              <SocialIcon type="ebay" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
          <p className="font-body text-xs text-wood-foreground/50">
            © {year} Miller's Antiques & Curiosities. All rights reserved.
          </p>
          <p className="font-body text-xs text-wood-foreground/50">
            Not an online store — visit in person or find us on Facebook & eBay.
          </p>
        </div>
      </div>
    </footer>
  );
}
