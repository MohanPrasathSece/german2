import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
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
import { CountryDropdown, getCountryByCode } from "../ui/CountryDropdown";
import { formatPhoneForCRM } from "../../lib/phone-utils";
import { Footer } from "./Footer";

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
            <a href="#process" className="hover:text-foreground transition">So funktioniert's</a>
            <a href="#intelligence" className="hover:text-foreground transition">Intelligenz</a>
            <a href="#apply" className="hover:text-foreground transition">Bewerben</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/portal"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition hidden sm:inline"
            >
              Mitgliederportal
            </Link>
            <Button asChild size="sm" className="rounded-full bg-brand-gradient shadow-brand">
              <a href="#apply">Loslegen</a>
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
      Nur noch <span className="text-foreground font-semibold">18 Onboarding-Plätze</span> diesen Monat verfügbar
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
          Investieren Sie in Krypto mit der
          <br />
          Präzision von{" "}
          <span className="text-brand-gradient">künstlicher Intelligenz</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Eine private Allokationsplattform für eine neue Klasse von Investoren. Kontinuierlich
          neu gewichtete Portfolios, entwickelt durch maschinelle Intelligenz, rund um die Uhr überwacht
          und geschützt durch Risikokontrollen auf institutionellem Niveau.
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
              Loslegen <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 border-border bg-white/60 backdrop-blur"
          >
            <a href="#process">Mehr erfahren</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Bewerbungsschluss in 6 Tagen
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Cold-Storage Verwahrung
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Investorenkapazität zu 94% ausgeschöpft
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
              <div className="text-muted-foreground text-xs">KI-Konfidenz</div>
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
    title: "KI-Marktanalyse",
    desc: "Neuronale Modelle analysieren On-Chain-Flüsse, Makrosignale und die Stimmung über 1.200+ Assets in Echtzeit.",
  },
  {
    icon: Layers,
    title: "Smarte Portfolio-Allokation",
    desc: "Personalisierte Allokationen balancieren Überzeugung, Korrelation und Liquidität aus — mit automatischer Neugewichtung.",
  },
  {
    icon: ShieldCheck,
    title: "Automatisiertes Risikomanagement",
    desc: "Dynamisches Hedging, Drawdown-Schutzschalter und volatilitätsbewusste Positionsgrößen schützen Ihr Kapital.",
  },
  {
    icon: Activity,
    title: "Kontinuierliche Überwachung",
    desc: "24/7 Ausführung und Reporting mit menschlicher Aufsicht durch unser quantitatives Research-Desk.",
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
            So funktioniert's
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Vier Schritte zwischen Ihnen und einem intelligenten Portfolio.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Jede Allokation wird von einem speziell entwickelten KI-System konstruiert, überprüft und neu gewichtet — niemals nach einer Vorlage.
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
  { label: "Unter KI verwaltetes Vermögen", value: 1.2, prefix: "$", suffix: " Mrd.", decimals: 1 },
  { label: "Aktive Investoren", value: 3400, suffix: "+" },
  { label: "Durchschn. annualisiertes Alpha", value: 28.4, suffix: "%", decimals: 1 },
  { label: "Verfügbarkeit & Überwachung", value: 99.99, suffix: "%", decimals: 2 },
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
              Intelligenz
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Gebaut für Investoren, die Diskretion und einen <span className="text-brand-gradient">Informationsvorsprung schätzen.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Aetheria kombiniert quantitatives Research, On-Chain-Intelligenz und
              maschinelles Lernen, um ein Portfolio-Erlebnis zu bieten, das bisher
              Institutionen vorbehalten war.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diversifikation über L1s, L2s, DeFi und stabile Renditen",
                "Institutionelle Verwahrung mit SOC 2 & MPC-Infrastruktur",
                "Transparente Echtzeit-Analysen und Audit-Trails",
                "Persönliches Onboarding mit einem Portfolio-Strategen",
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
                  <div className="text-xs text-muted-foreground">Portfolio-Wert</div>
                  <div className="text-3xl font-bold">
                    $<CountUp to={248320} />
                  </div>
                </div>
                <div className="rounded-full bg-brand/10 text-brand text-xs px-3 py-1 font-medium">
                  +12,4% in diesem Quartal
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
              Limitierter Vorabzugang
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold">
              Die Investorenkapazität ist für dieses Onboarding-Fenster fast ausgeschöpft.
            </h3>
            <p className="mt-3 opacity-90">
              Die Bewerbungen schließen, sobald die aktuelle Allokation abgeschlossen ist. Reservieren Sie
              Ihren Platz, bevor das nächste Fenster öffnet.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-brand hover:bg-white/90 h-12 px-8 shadow-soft"
              >
                <a href="#apply">
                  Platz reservieren <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
              <div className="text-sm opacity-90">
                18 von 400 Plätzen verbleiben · Nächstes Fenster öffnet in Q2
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
  const [serverMessage, setServerMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", phone: "", country: "ch", message: "" });

  function set<K extends keyof typeof values>(k: K, v: string) {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Bitte geben Sie Ihren vollständigen Namen ein.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Geben Sie eine gültige E-Mail-Adresse ein.";
    
    const countryObj = getCountryByCode(values.country);
    if (!countryObj.regex.test(values.phone)) {
      errs.phone = `Geben Sie eine gültige Telefonnummer ein (z.B. ${countryObj.example}).`;
    }
    
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    
    setState("submitting");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          phone: formatPhoneForCRM(values.phone, countryObj.dialCode)
        })
      });
      const data = await res.json();
      
      if (!res.ok || !data.success) {
        setState("idle");
        setServerMessage(data.message || "Ein unerwarteter Fehler ist aufgetreten.");
      } else {
        setState("success");
        setServerMessage(data.message || "Bewerbung erhalten.");
      }
    } catch (err) {
      setState("idle");
      setServerMessage("Ein unerwarteter Fehler ist aufgetreten.");
    }
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
            Platz reservieren
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Bewerben Sie sich für privaten Zugang.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Unser Team prüft jede Bewerbung persönlich. Sie erhalten innerhalb von 48 Stunden eine Rückmeldung.
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
              <h3 className="mt-6 text-2xl font-semibold">{serverMessage || "Bewerbung erhalten."}</h3>
              <p className="mt-2 text-muted-foreground">
                Ein Portfolio-Stratege wird sich innerhalb von 48 Stunden bei Ihnen melden, um Ihr Onboarding abzuschließen.
              </p>
              <Button
                onClick={() => {
                  setValues({ name: "", email: "", phone: "", country: "ch", message: "" });
                  setState("idle");
                }}
                variant="outline"
                className="mt-6 rounded-full"
              >
                Weitere einreichen
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <Label htmlFor="name">Vollständiger Name</Label>
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
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="alexandra@firma.com"
                  className="mt-2 h-12 rounded-xl bg-white"
                  maxLength={255}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="country">Land</Label>
                <CountryDropdown
                  value={values.country}
                  onChange={(c) => set("country", c)}
                  className="mt-2 h-12 rounded-xl w-full"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input
                  id="phone"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder={getCountryByCode(values.country).example}
                  className="mt-2 h-12 rounded-xl bg-white"
                  maxLength={40}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="message">Nachricht <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea
                  id="message"
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Erzählen Sie uns ein wenig über Ihre Anlageziele."
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
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Wird gesendet…
                  </>
                ) : (
                  <>Platz reservieren <ArrowRight className="ml-1 w-4 h-4" /></>
                )}
              </Button>
              {serverMessage && state === 'idle' && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                  {serverMessage}
                </div>
              )}
              <p className="text-xs text-muted-foreground text-center">
                <Lock className="inline w-3 h-3 mr-1" />
                Ihre Daten werden verschlüsselt und niemals weitergegeben.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Footer extracted to Footer.tsx

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