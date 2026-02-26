import { useState } from "react";
import {
  RefreshCw,
  ShoppingBag,
  Wrench,
  Gift,
  BookOpen,
  Search,
  ShieldCheck,
  Database,
  MapPin,
  Globe,
  Calendar,
  MessageCircle,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import heroImage from "@/assets/hero-illustration.jpg";

const ComingSoonModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { t } = useI18n();
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.comingSoon.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {t.comingSoon.desc}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button
            type="button"
            variant="hero"
            onClick={() => onOpenChange(false)}
          >
            {t.comingSoon.cta}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Hero = ({ onShowComingSoon }: { onShowComingSoon: () => void }) => {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <RefreshCw className="h-4 w-4" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
              Share<span className="text-primary">cycle</span>
            </h1>
            <p className="text-xl lg:text-2xl font-display italic text-muted-foreground">
              {t.hero.tagline}
            </p>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={onShowComingSoon}>
                {t.hero.cta1}
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                onClick={onShowComingSoon}
              >
                {t.hero.cta2}
              </Button>
              <a
                href="https://github.com/treibhausdonaufeld/bubble/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="lg" className="gap-2">
                  {t.hero.cta3} <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Community members sharing tools, books, and resources"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FiveWays = () => {
  const { t } = useI18n();
  const ways = [
    { icon: ShoppingBag, ...t.ways.sell, color: "text-secondary" },
    { icon: Wrench, ...t.ways.rent, color: "text-primary" },
    { icon: Gift, ...t.ways.give, color: "text-amber" },
    { icon: BookOpen, ...t.ways.borrow, color: "text-forest" },
    { icon: Search, ...t.ways.search, color: "text-muted-foreground" },
  ];
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-4xl mb-4">🔄</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.ways.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.ways.desc}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ways.map((w) => (
            <div
              key={w.title}
              className="group rounded-xl bg-background p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <w.icon className={`h-8 w-8 mb-4 ${w.color}`} />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {w.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const { t } = useI18n();
  const features = [
    { icon: ShieldCheck, ...t.trust.verified },
    { icon: Database, ...t.trust.data },
    { icon: MapPin, ...t.trust.regional },
  ];
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-4xl mb-4">🛡️</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.trust.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fediverse = () => {
  const { t } = useI18n();
  const features = [
    { icon: Globe, ...t.fediverse.activitypub },
    { icon: Calendar, ...t.fediverse.caldav },
    { icon: MessageCircle, ...t.fediverse.chat },
  ];
  return (
    <section className="bg-forest text-forest-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-4xl mb-4">🌐</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t.fediverse.title}
          </h2>
          <p className="text-lg opacity-80">{t.fediverse.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-forest-foreground/10 backdrop-blur-sm border border-forest-foreground/20 p-6 space-y-4"
            >
              <f.icon className="h-8 w-8 text-amber" />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Support = ({ onShowComingSoon }: { onShowComingSoon: () => void }) => {
  const { t } = useI18n();
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-4xl mb-4">🌱</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.support.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.support.desc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-xl bg-background border border-border p-8 space-y-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {t.support.communities.label}
            </span>
            <h3 className="text-xl font-bold text-foreground">
              {t.support.communities.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.support.communities.desc}
            </p>
            <Button variant="hero" className="mt-4" onClick={onShowComingSoon}>
              {t.support.communities.cta}
            </Button>
          </div>
          <div className="rounded-xl bg-background border border-border p-8 space-y-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              {t.support.individuals.label}
            </span>
            <h3 className="text-xl font-bold text-foreground">
              {t.support.individuals.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.support.individuals.desc}
            </p>
            <Button
              variant="hero-outline"
              className="mt-4"
              onClick={onShowComingSoon}
            >
              {t.support.individuals.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Quote = () => {
  const { t } = useI18n();
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl font-display italic text-foreground leading-relaxed">
            {t.quote}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

const CTA = ({ onShowComingSoon }: { onShowComingSoon: () => void }) => {
  const { t } = useI18n();
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-8">
          {t.cta.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="font-semibold"
            onClick={onShowComingSoon}
          >
            {t.cta.demo}
          </Button>
          <Button
            size="lg"
            className="bg-forest text-forest-foreground hover:bg-forest/90 font-semibold"
            onClick={onShowComingSoon}
          >
            {t.cta.fediverse}
          </Button>
          <Button
            size="lg"
            className="bg-amber text-amber-foreground hover:bg-amber/90 font-semibold"
            onClick={onShowComingSoon}
          >
            <Heart className="h-4 w-4" /> {t.cta.license}
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            <span className="font-display text-lg font-bold">Sharecycle</span>
          </div>
          <p className="text-sm opacity-60">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showComingSoon = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Hero onShowComingSoon={showComingSoon} />
      <FiveWays />
      <Trust />
      <Fediverse />
      <Support onShowComingSoon={showComingSoon} />
      <Quote />
      <CTA onShowComingSoon={showComingSoon} />
      <Footer />
      <ComingSoonModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
