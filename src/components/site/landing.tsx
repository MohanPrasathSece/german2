import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  Cpu,
  LineChart,
  Lock,
  Check,
  Loader2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BlockchainMesh,
  CandlestickChart,
  FloatingCoin,
  GrowthLine,
  Particles,
} from "./crypto-visuals";
import { CountUp } from "./count-up";

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass-card rounded-full px-5 py-2.5 flex items-center justify-between shadow-soft">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-tight">Aetheria</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#process" className="hover:text-foreground transition">How it works</a>
            <a href="#intelligence" className="hover:text-foreground transition">Intelligence</a>
            <a href="#apply" className="hover:text-foreground transition">Apply</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/portal"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition hidden sm:inline"
            >
              Member portal
            </Link>
            <Button asChild size="sm" className="rounded-full bg-brand-gradient shadow-brand">
              <a href="#apply">Get started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function UrgencyBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
      </span>
      Only <span className="text-foreground font-semibold">18 onboarding spots</span> remaining this month
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -60]);
  const y2 = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section className="relative pt-36 pb-32 overflow-hidden bg-hero-radial">
      <BlockchainMesh />
      <Particles count={22} />

      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <FloatingCoin symbol="₿" className="top-32 left-[8%]" delay={0} size={64} />
        <FloatingCoin symbol="Ξ" className="top-48 right-[10%]" delay={0.3} size={56} />
        <FloatingCoin symbol="◎" className="bottom-40 left-[14%]" delay={0.6} size={48} />
        <FloatingCoin symbol="AI" className="bottom-56 right-[16%]" delay={0.9} size={52} />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute bottom-0 inset-x-0 h-64 opacity-40 pointer-events-none">
        <CandlestickChart className="w-full h-full" />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <UrgencyBadge />
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]"
        >
          Invest in crypto with the
          <br />
          precision of{" "}
          <span className="text-brand-gradient">artificial intelligence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          A private allocation platform for a new class of investor. Continuously
          rebalanced portfolios engineered by machine intelligence, monitored 24/7,
          protected by institutional-grade risk controls.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand-gradient shadow-brand px-8 h-12 text-base"
          >
            <a href="#apply">
              Get started <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 border-border bg-white/60 backdrop-blur"
          >
            <a href="#process">Learn more</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Applications close in 6 days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Cold-storage custody
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Investor capacity 94% full
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 mx-auto max-w-3xl rounded-3xl glass-card shadow-card p-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="text-muted-foreground text-xs">Aetheria Alpha Portfolio</div>
              <div className="font-semibold text-lg">
                +<CountUp to={42.8} decimals={1} suffix="%" /> YTD
              </div>
            </div>
            <div className="text-right">
              <div className="text-muted-foreground text-xs">AI confidence</div>
              <div className="font-semibold text-lg text-brand">
                <CountUp to={97} suffix="%" />
              </div>
            </div>
          </div>
          <div className="mt-4 h-40 relative">
            <GrowthLine className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Cpu,
    title: "AI Market Analysis",
    desc: "Neural models parse on-chain flows, macro signals, and sentiment across 1,200+ assets in real time.",
  },
  {
    icon: Layers,
    title: "Smart Portfolio Allocation",
    desc: "Personalized allocations balance conviction, correlation, and liquidity — rebalanced automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Risk Management",
    desc: "Dynamic hedging, drawdown circuit breakers, and volatility-aware position sizing protect your capital.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    desc: "24/7 execution and reporting with human oversight from our quantitative research desk.",
  },
];

function Process() {
  return (
    <section id="process" className="relative py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            How it works
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Four steps between you and an intelligent portfolio.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every allocation is engineered, reviewed, and rebalanced by a
            purpose-built AI system — never a template.
          </p>
        </motion.div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-14 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-border bg-white p-7 shadow-card hover:shadow-brand transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gradient shadow-brand flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 h-10 relative overflow-hidden opacity-70 group-hover:opacity-100 transition">
                  <CandlestickChart className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const metrics = [
  { label: "Assets under intelligence", value: 1.2, prefix: "$", suffix: "B", decimals: 1 },
  { label: "Active investors", value: 3400, suffix: "+" },
  { label: "Avg. annualized alpha", value: 28.4, suffix: "%", decimals: 1 },
  { label: "Uptime & monitoring", value: 99.99, suffix: "%", decimals: 2 },
];

function Intelligence() {
  return (
    <section id="intelligence" className="relative py-32 bg-brand-soft/40 overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              Intelligence
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Built for the investor who values <span className="text-brand-gradient">discretion and edge.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Aetheria combines quantitative research, on-chain intelligence, and
              machine learning to deliver a portfolio experience previously
              reserved for institutions.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diversification across L1s, L2s, DeFi, and stable yield",
                "Institutional custody with SOC 2 & MPC infrastructure",
                "Transparent, real-time analytics and audit trail",
                "Personal onboarding with a portfolio strategist",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl glass-card shadow-card p-8 overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Portfolio value</div>
                  <div className="text-3xl font-bold">
                    $<CountUp to={248320} />
                  </div>
                </div>
                <div className="rounded-full bg-brand/10 text-brand text-xs px-3 py-1 font-medium">
                  +12.4% this quarter
                </div>
              </div>
              <div className="mt-6 h-48 relative">
                <GrowthLine className="w-full h-full" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { s: "BTC", p: 42 },
                  { s: "ETH", p: 28 },
                  { s: "SOL", p: 15 },
                ].map((a) => (
                  <div key={a.s} className="rounded-2xl border border-border p-3">
                    <div className="text-xs text-muted-foreground">{a.s}</div>
                    <div className="font-semibold">{a.p}%</div>
                    <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-brand-gradient"
                        style={{ width: `${a.p * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/10 blur-2xl" />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-white p-6 shadow-card"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-brand-gradient">
                <CountUp
                  to={m.value}
                  prefix={m.prefix ?? ""}
                  suffix={m.suffix ?? ""}
                  decimals={m.decimals ?? 0}
                />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-brand-gradient text-white p-10 md:p-14 shadow-brand relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <BlockchainMesh />
          </div>
          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] opacity-80 font-semibold">
              Limited early access
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold">
              Investor capacity is nearly full for this onboarding window.
            </h3>
            <p className="mt-3 opacity-90">
              Applications close after the current allocation is complete. Reserve
              your place before the next window opens.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-brand hover:bg-white/90 h-12 px-8 shadow-soft"
              >
                <a href="#apply">
                  Reserve your spot <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
              <div className="text-sm opacity-90">
                18 of 400 spots remaining · Next window opens Q2
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type FormState = "idle" | "submitting" | "success";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });

  function set<K extends keyof typeof values>(k: K, v: string) {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Enter a valid email.";
    if (!/^[0-9+()\-\s]{7,}$/.test(values.phone)) errs.phone = "Enter a valid phone number.";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setState("submitting");
    setTimeout(() => setState("success"), 1400);
  }

  return (
    <section id="apply" className="relative py-32 bg-white">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            Reserve your spot
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Apply for private access.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team reviews every application personally. You'll hear back
            within 48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-border bg-white shadow-card p-8 md:p-10 relative overflow-hidden"
        >
          {state === "success" ? (
            <div className="py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="mx-auto w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center shadow-brand"
              >
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-6 text-2xl font-semibold">Application received.</h3>
              <p className="mt-2 text-muted-foreground">
                A portfolio strategist will reach out within 48 hours to complete
                your onboarding.
              </p>
              <Button
                onClick={() => {
                  setValues({ name: "", email: "", phone: "", message: "" });
                  setState("idle");
                }}
                variant="outline"
                className="mt-6 rounded-full"
              >
                Submit another
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Alexandra Chen"
                  className="mt-2 h-12 rounded-xl bg-white"
                  maxLength={100}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="alexandra@company.com"
                  className="mt-2 h-12 rounded-xl bg-white"
                  maxLength={255}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 (415) 555 0102"
                  className="mt-2 h-12 rounded-xl bg-white"
                  maxLength={40}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea
                  id="message"
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Tell us a bit about your investment goals."
                  className="mt-2 min-h-28 rounded-xl bg-white"
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                disabled={state === "submitting"}
                className="w-full h-12 rounded-full bg-brand-gradient shadow-brand text-base"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Submitting…
                  </>
                ) : (
                  <>Reserve my spot <ArrowRight className="ml-1 w-4 h-4" /></>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                <Lock className="inline w-3 h-3 mr-1" />
                Your information is encrypted and never shared.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-gradient flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-foreground">Aetheria Capital</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition">Disclosures</a>
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <Link to="/portal" className="hover:text-foreground transition">Member portal</Link>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Process />
        <Intelligence />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}