import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2, Lock, ShieldCheck, LineChart, Cpu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CountryDropdown, getCountryByCode } from "../ui/CountryDropdown";
import { formatPhoneForCRM } from "../../lib/phone-utils";
import { BlockchainMesh, FloatingCoin, CandlestickChart } from "./crypto-visuals";
import { Footer } from "./Footer";

function DashboardContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");
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
    if (!values.name.trim()) errs.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Enter a valid email.";
    
    const countryObj = getCountryByCode(values.country);
    if (!countryObj.regex.test(values.phone)) {
      errs.phone = `Enter a valid phone number (e.g. ${countryObj.example}).`;
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
        setServerMessage(data.message || "An unexpected failure occurred.");
      } else {
        setState("success");
        setServerMessage(data.message || "Message sent successfully.");
      }
    } catch (err) {
      setState("idle");
      setServerMessage("An unexpected failure occurred.");
    }
  }

  return (
    <div className="mt-12 rounded-3xl border border-border bg-white shadow-card p-8 md:p-10 relative overflow-hidden text-left">
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
          <h3 className="mt-6 text-2xl font-semibold">{serverMessage || "Message sent."}</h3>
          <p className="mt-2 text-muted-foreground">
            Our team will reach out to you shortly.
          </p>
          <Button
            onClick={() => {
              setValues({ name: "", email: "", phone: "", country: "ch", message: "" });
              setState("idle");
            }}
            variant="outline"
            className="mt-6 rounded-full"
          >
            Send another
          </Button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-5">
          <div>
            <Label htmlFor="d_name">Full name</Label>
            <Input id="d_name" value={values.name} onChange={(e) => set("name", e.target.value)} placeholder="Alexandra Chen" className="mt-2 h-12 rounded-xl bg-white" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="d_email">Email address</Label>
            <Input id="d_email" type="email" value={values.email} onChange={(e) => set("email", e.target.value)} placeholder="alexandra@company.com" className="mt-2 h-12 rounded-xl bg-white" />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="d_country">Country</Label>
            <CountryDropdown value={values.country} onChange={(c) => set("country", c)} className="mt-2 h-12 rounded-xl w-full" />
          </div>
          <div>
            <Label htmlFor="d_phone">Phone number</Label>
            <Input id="d_phone" value={values.phone} onChange={(e) => set("phone", e.target.value)} placeholder={getCountryByCode(values.country).example} className="mt-2 h-12 rounded-xl bg-white" />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="d_message">Message <span className="text-muted-foreground">(optional)</span></Label>
            <Textarea id="d_message" value={values.message} onChange={(e) => set("message", e.target.value)} placeholder="How can we assist your investment journey?" className="mt-2 min-h-28 rounded-xl bg-white" />
          </div>
          <Button type="submit" disabled={state === "submitting"} className="w-full h-12 rounded-full bg-brand-gradient shadow-brand text-base">
            {state === "submitting" ? (
              <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Submitting…</>
            ) : (
              <>Send Message <ArrowRight className="ml-1 w-4 h-4" /></>
            )}
          </Button>
          {serverMessage && state === 'idle' && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
              {serverMessage}
            </div>
          )}
          <p className="text-xs text-muted-foreground text-center">
            <Lock className="inline w-3 h-3 mr-1" />
            Your information is encrypted and never shared.
          </p>
        </form>
      )}
    </div>
  );
}

export function EducationalDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-12">
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold text-sm">Back to Home</span>
          </Link>
          <Button
            onClick={() => {
              localStorage.removeItem("sessionToken");
              navigate("/portal");
            }}
            variant="ghost"
            className="text-sm"
          >
            Sign out
          </Button>
        </div>
      </header>

      <main className="pb-32 pt-20">
        <section className="relative py-24 bg-hero-radial">
          <BlockchainMesh />
          <div className="absolute inset-0 pointer-events-none">
             <FloatingCoin symbol="₿" className="top-24 left-[10%]" delay={0} size={50} />
             <FloatingCoin symbol="AI" className="bottom-24 right-[15%]" delay={1.2} size={60} />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              How we <span className="text-brand-gradient">improve</span> your investment amount
            </motion.h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding Cryptocurrency Basics, Digital Assets, and Trading Strategies through AI Market Analysis. We diversify your portfolio intelligently.
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { title: "Crypto Basics", icon: Cpu, desc: "Leverage AI to scan blockchains and identify optimal digital assets for long-term growth." },
                { title: "Trading Basics", icon: LineChart, desc: "Our system analyzes market trends 24/7 to execute trades with mathematical precision." },
                { title: "Portfolio Diversification", icon: ShieldCheck, desc: "Balance risk and reward by spreading investments across uncorrelated assets." }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl glass-card shadow-card p-8 text-left border border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold tracking-tight">How safe and secure it is</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We prioritize Risk Management, Security, and Market Trend adaptation to ensure your digital wealth is protected at all times.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Institutional grade cold storage security",
                  "Automated drawdown circuit breakers",
                  "Real-time fraud detection and monitoring",
                  "Compliance with global data privacy standards"
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-64 rounded-3xl bg-black/5 overflow-hidden border border-border">
              <CandlestickChart className="w-full h-full opacity-60 mix-blend-multiply" />
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-brand-soft/30">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-bold">Have Questions? (FAQ)</h2>
            <p className="mt-4 text-muted-foreground">
              Contact our portfolio strategists directly for personalized advice.
            </p>
            <DashboardContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
