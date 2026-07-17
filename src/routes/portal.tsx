import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Blocks,
  Brain,
  TrendingUp,
  PieChart,
  ShieldCheck,
  Lock,
  BarChart3,
  HelpCircle,
  Compass,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import {
  BlockchainMesh,
  CandlestickChart,
  FloatingCoin,
  GrowthLine,
  Particles,
} from "@/components/site/crypto-visuals";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Member Portal — Aetheria Capital" },
      { name: "description", content: "Educational resources for Aetheria members: crypto, blockchain, AI market analysis and more." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Portal,
});

type TabId =
  | "basics" | "blockchain" | "ai" | "strategies" | "diversification"
  | "risk" | "security" | "trends" | "faq" | "guides";

const tabs: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "basics", label: "Crypto Basics", icon: BookOpen },
  { id: "blockchain", label: "Blockchain", icon: Blocks },
  { id: "ai", label: "AI Analysis", icon: Brain },
  { id: "strategies", label: "Strategies", icon: TrendingUp },
  { id: "diversification", label: "Diversification", icon: PieChart },
  { id: "risk", label: "Risk Management", icon: ShieldCheck },
  { id: "security", label: "Security", icon: Lock },
  { id: "trends", label: "Market Trends", icon: BarChart3 },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "guides", label: "Guides", icon: Compass },
];

function BrowserChrome({ children, tab }: { children: React.ReactNode; tab: string }) {
  return (
    <div className="rounded-3xl border border-border bg-white shadow-card overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/40">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-xs text-muted-foreground bg-white rounded-full px-4 py-1 border border-border max-w-md w-full text-center truncate">
            aetheria.capital/learn/{tab}
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12">{children}</div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  lede,
  cards,
  chart,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  cards: { title: string; desc: string }[];
  chart?: "growth" | "candles" | "mesh";
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{lede}</p>

      {chart && (
        <div className="mt-10 rounded-2xl border border-border bg-brand-soft/40 h-48 relative overflow-hidden">
          {chart === "growth" && <GrowthLine className="w-full h-full" />}
          {chart === "candles" && <CandlestickChart className="w-full h-full" />}
          {chart === "mesh" && <BlockchainMesh />}
        </div>
      )}

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border p-6 bg-white shadow-card hover:shadow-brand transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{c.title}</h3>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const content: Record<TabId, React.ReactNode> = {
  basics: (
    <Section
      eyebrow="Crypto Basics"
      title="Everything you need to speak the language of digital assets."
      lede="Cryptocurrencies are programmable, verifiable, and globally accessible. Start with the fundamentals."
      chart="mesh"
      cards={[
        { title: "What is a cryptocurrency?", desc: "Digital assets secured by cryptography and settled on distributed networks." },
        { title: "Wallets & keys", desc: "Self-custody, custodial, and hardware wallets — and how to keep your keys safe." },
        { title: "Coins vs. tokens", desc: "The difference between native protocol assets and application-layer tokens." },
        { title: "Market cap & supply", desc: "How circulating supply, total supply, and issuance shape valuation." },
        { title: "Stablecoins", desc: "Fiat-backed, crypto-backed, and algorithmic stability designs." },
        { title: "On-chain activity", desc: "Reading transactions, addresses, and network health signals." },
      ]}
    />
  ),
  blockchain: (
    <Section
      eyebrow="Blockchain"
      title="The trust layer of the modern financial internet."
      lede="Blockchains coordinate value without intermediaries. Learn how consensus, blocks, and smart contracts work together."
      chart="mesh"
      cards={[
        { title: "Consensus mechanisms", desc: "Proof-of-Work, Proof-of-Stake, and modern hybrid designs explained." },
        { title: "Layer 1 vs. Layer 2", desc: "Base networks vs. scaling solutions that inherit their security." },
        { title: "Smart contracts", desc: "Self-executing agreements that power DeFi, NFTs, and stablecoins." },
        { title: "Rollups & data availability", desc: "How modular blockchains scale throughput without compromise." },
        { title: "Bridges", desc: "How assets move safely between networks — and the risks involved." },
        { title: "MEV & block space", desc: "Understanding the economics of transaction ordering." },
      ]}
    />
  ),
  ai: (
    <Section
      eyebrow="AI Market Analysis"
      title="Machine intelligence reads the market in dimensions humans cannot."
      lede="From transformer models parsing sentiment to reinforcement learning agents rebalancing portfolios, AI transforms crypto investing."
      chart="candles"
      cards={[
        { title: "Signal extraction", desc: "Turning terabytes of on-chain data into actionable investment signals." },
        { title: "Sentiment models", desc: "LLM-based analysis of news, research, and social discourse." },
        { title: "Regime detection", desc: "Identifying bull, bear, and sideways markets before consensus forms." },
        { title: "Portfolio optimization", desc: "Multi-objective optimization for return, drawdown, and correlation." },
        { title: "Execution intelligence", desc: "Minimizing slippage across fragmented crypto liquidity venues." },
        { title: "Backtesting", desc: "Robust out-of-sample validation across multiple market cycles." },
      ]}
    />
  ),
  strategies: (
    <Section
      eyebrow="Trading Strategies"
      title="Time-tested approaches, adapted for a 24/7 market."
      lede="Understand the strategies professional allocators use — and how AI systematizes them at scale."
      chart="growth"
      cards={[
        { title: "Dollar-cost averaging", desc: "Systematic accumulation to reduce timing risk." },
        { title: "Momentum & trend", desc: "Following persistent price moves with disciplined exits." },
        { title: "Mean reversion", desc: "Capitalizing on temporary dislocations from fair value." },
        { title: "Statistical arbitrage", desc: "Exploiting relative mispricings across correlated assets." },
        { title: "Yield strategies", desc: "Staking, liquidity provision, and structured yield products." },
        { title: "Volatility strategies", desc: "Positioning around expected changes in market volatility." },
      ]}
    />
  ),
  diversification: (
    <Section
      eyebrow="Portfolio Diversification"
      title="Owning the right mix matters more than owning the right coin."
      lede="Diversification across sectors, capitalization tiers, and correlation regimes is the single most reliable driver of long-term returns."
      chart="growth"
      cards={[
        { title: "Sector allocation", desc: "Balancing infrastructure, DeFi, gaming, and stable yield." },
        { title: "Cap-weighted vs. equal", desc: "Different weighting schemes for different market environments." },
        { title: "Correlation analysis", desc: "Understanding which assets truly diversify — and which don't." },
        { title: "Rebalancing discipline", desc: "How systematic rebalancing captures volatility as return." },
        { title: "Stable yield sleeves", desc: "Reducing drawdowns with productive stablecoin allocations." },
        { title: "Position sizing", desc: "Volatility-scaled sizing for consistent risk contribution." },
      ]}
    />
  ),
  risk: (
    <Section
      eyebrow="Risk Management"
      title="The best returns come from investors who lose the least."
      lede="Risk-aware investing means understanding what can go wrong and structuring the portfolio to survive it."
      chart="candles"
      cards={[
        { title: "Drawdown control", desc: "Circuit breakers and volatility targeting to limit downside." },
        { title: "Liquidity risk", desc: "Sizing positions to the depth of available markets." },
        { title: "Counterparty risk", desc: "Vetting custodians, exchanges, and DeFi protocols." },
        { title: "Smart contract risk", desc: "Audits, formal verification, and time-tested code." },
        { title: "Regulatory risk", desc: "Structuring portfolios that remain resilient to policy shifts." },
        { title: "Concentration limits", desc: "Position caps that prevent single-asset blowups." },
      ]}
    />
  ),
  security: (
    <Section
      eyebrow="Security Best Practices"
      title="Digital assets reward the paranoid and punish the careless."
      lede="A strong security posture is a prerequisite for serious crypto investing. Adopt these practices before scaling capital."
      cards={[
        { title: "Hardware wallets", desc: "Air-gapped signing devices for self-custody at scale." },
        { title: "Multi-signature", desc: "Requiring multiple approvals for high-value transactions." },
        { title: "MPC custody", desc: "Institutional-grade key management without single points of failure." },
        { title: "Phishing defense", desc: "Recognizing and defeating the industry's most common attack." },
        { title: "OpSec hygiene", desc: "Separating identities, devices, and communication channels." },
        { title: "Recovery planning", desc: "Estate planning and disaster recovery for digital assets." },
      ]}
    />
  ),
  trends: (
    <Section
      eyebrow="Market Trends"
      title="Reading the tape across cycles."
      lede="Cycles repeat but never quite the same. Track the themes shaping the next chapter of digital assets."
      chart="candles"
      cards={[
        { title: "Tokenized real-world assets", desc: "Bringing traditional yield on-chain via T-bills, credit, and equities." },
        { title: "AI × crypto", desc: "Autonomous agents, compute markets, and data provenance networks." },
        { title: "Institutional adoption", desc: "ETFs, custody standards, and capital allocation frameworks." },
        { title: "Modular scaling", desc: "The rise of app-specific rollups and shared sequencing." },
        { title: "DePIN", desc: "Decentralized physical infrastructure across storage, compute, and connectivity." },
        { title: "Stablecoin rails", desc: "The quiet revolution in cross-border payments." },
      ]}
    />
  ),
  faq: (
    <Section
      eyebrow="Frequently Asked Questions"
      title="Answers to the questions members ask most."
      lede="Practical guidance on onboarding, custody, reporting, and strategy."
      cards={[
        { title: "What is the minimum allocation?", desc: "Aetheria portfolios start at $100,000 to align risk and access." },
        { title: "Where are assets held?", desc: "Assets are held with SOC 2 Type II qualified custodians using MPC and cold storage." },
        { title: "How often is my portfolio rebalanced?", desc: "Continuously — the system evaluates rebalancing opportunities in real time." },
        { title: "Can I withdraw at any time?", desc: "Yes. There are no lockups; standard settlement applies." },
        { title: "How is performance reported?", desc: "Real-time dashboards plus monthly institutional-grade statements." },
        { title: "What fees apply?", desc: "A transparent management fee with a performance component above a hurdle." },
      ]}
    />
  ),
  guides: (
    <Section
      eyebrow="Investment Guides"
      title="Deep-dive playbooks for every stage of your journey."
      lede="Written by our research desk — clear, opinionated, and grounded in market experience."
      chart="growth"
      cards={[
        { title: "The first 90 days", desc: "How to onboard, allocate, and monitor your first crypto portfolio." },
        { title: "Building a stable core", desc: "Constructing a resilient base allocation to weather any regime." },
        { title: "Sizing the satellite", desc: "How much risk to take with high-conviction thematic positions." },
        { title: "Tax-aware investing", desc: "Structuring portfolios to be efficient across jurisdictions." },
        { title: "Reading research", desc: "Separating signal from noise in a market of infinite commentary." },
        { title: "When to sell", desc: "A framework for taking profits without losing conviction." },
      ]}
    />
  ),
};

function Portal() {
  const [active, setActive] = useState<TabId>("basics");
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-hero-radial opacity-70" />
      <Particles count={14} />
      <FloatingCoin symbol="₿" className="top-40 left-6" delay={0} size={44} />
      <FloatingCoin symbol="Ξ" className="top-64 right-8" delay={0.4} size={40} />

      <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-tight">Aetheria</span>
          <span className="ml-2 text-xs text-muted-foreground rounded-full border border-border px-2 py-0.5">
            Member portal
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to site
        </Link>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome back. <span className="text-brand-gradient">Keep learning.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A curated library of everything you need to invest in crypto with
            confidence. Move between topics — your progress is saved automatically.
          </p>
        </motion.div>

        <div className="mt-10 flex gap-1 overflow-x-auto pb-3 scrollbar-none">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-sm font-medium transition ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-0 -z-10 rounded-t-xl border-t border-x border-border bg-white shadow-soft"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="-mt-px">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <BrowserChrome tab={active}>{content[active]}</BrowserChrome>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}