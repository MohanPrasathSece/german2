import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Footer } from "./Footer";

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <header className="sticky top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-brand transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold text-sm">Back to Home</span>
          </Link>
          <span className="font-bold tracking-tight">Aetheria</span>
        </div>
      </header>
      
      <main className="mx-auto max-w-3xl px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-card">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert prose-brand max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access the service.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Eligibility</h2>
            <p>You must be at least 18 years old to use this website or any of our services. By using the website, you represent and warrant that you meet this requirement.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Website Purpose</h2>
            <p>The content provided on this website is for informational and educational purposes only. We are not a registered investment advisor, broker, or dealer.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. User Responsibilities & Acceptable Use</h2>
            <p>You agree not to use the website for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You agree not to violate any international, federal, or state regulations, rules, laws, or local ordinances.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Intellectual Property</h2>
            <p>The Service and its original content, features and functionality are and will remain the exclusive property of the company and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the company.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Cryptocurrency Risk Disclosure</h2>
            <p>Trading and investing in cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The valuation of cryptocurrencies and futures may fluctuate, and, as a result, clients may lose more than their original investment.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. No Financial or Investment Advice</h2>
            <p>The information on this website does not constitute financial advice, investment advice, trading advice, or any other sort of advice. You should not treat any of the website's content as such.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. No Guaranteed Returns</h2>
            <p>Past performance is not indicative of future results. We make no representation that any account will or is likely to achieve profits or losses similar to those discussed on this website.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Limitation of Liability</h2>
            <p>In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Governing Law & Disputes</h2>
            <p>These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions. Any dispute arising from these terms will be resolved in the applicable courts of the jurisdiction.</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
