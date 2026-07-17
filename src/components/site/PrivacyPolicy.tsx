import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Footer } from "./Footer";

export function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-brand max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Information Collection</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes your name, email address, phone number, country, and messages.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Data Usage</h2>
            <p>The data collected is used to personalize your experience, provide customer support, and communicate with you about our services, products, and updates. We do not sell your personal data.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. CRM Processing</h2>
            <p>When you submit a contact form or signup request, your data is securely transmitted to our Customer Relationship Management (CRM) system for processing your inquiry or account registration.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Cookies & Tracking</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Security</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We use commercially acceptable means to protect your Personal Data, including encryption and strict access controls.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Data Retention</h2>
            <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. User Rights</h2>
            <p>You have the right to access, update or delete the information we have on you. You can exercise these rights by contacting us directly through our support channels.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Marketing & Third Parties</h2>
            <p>We may employ third party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. International Transfers</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us via our website's contact forms.</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
