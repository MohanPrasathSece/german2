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
            <span className="font-semibold text-sm">Zurück zur Startseite</span>
          </Link>
          <span className="font-bold tracking-tight">Avenza</span>
        </div>
      </header>
      
      <main className="mx-auto max-w-3xl px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-card">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Nutzungsbedingungen</h1>
          <div className="prose prose-invert prose-brand max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Zuletzt aktualisiert:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Annahme der Bedingungen</h2>
            <p>Durch den Zugriff auf oder die Nutzung dieser Website erklären Sie sich mit diesen Nutzungsbedingungen und unserer Datenschutzerklärung einverstanden. Wenn Sie mit einem Teil der Bedingungen nicht einverstanden sind, dürfen Sie den Service nicht nutzen.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Teilnahmeberechtigung</h2>
            <p>Sie müssen mindestens 18 Jahre alt sein, um diese Website oder einen unserer Dienste nutzen zu können. Durch die Nutzung der Website sichern Sie zu und gewährleisten, dass Sie diese Anforderung erfüllen.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Zweck der Website</h2>
            <p>Die auf dieser Website bereitgestellten Inhalte dienen nur zu Informations- und Bildungszwecken. Wir sind kein registrierter Anlageberater, Broker oder Händler.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Benutzerverantwortung & zulässige Nutzung</h2>
            <p>Sie erklären sich damit einverstanden, die Website nicht für rechtswidrige Zwecke zu nutzen oder andere zur Durchführung oder Teilnahme an rechtswidrigen Handlungen aufzufordern. Sie stimmen zu, keine internationalen, bundesstaatlichen oder staatlichen Vorschriften, Regeln, Gesetze oder lokalen Verordnungen zu verletzen.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Geistiges Eigentum</h2>
            <p>Der Service und seine ursprünglichen Inhalte, Merkmale und Funktionen sind und bleiben das ausschließliche Eigentum des Unternehmens und seiner Lizenzgeber. Unsere Marken und Handelsaufmachungen dürfen nicht ohne vorherige schriftliche Zustimmung des Unternehmens im Zusammenhang mit einem Produkt oder einer Dienstleistung verwendet werden.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Krypto-Risikohinweis</h2>
            <p>Der Handel und die Investition in Kryptowährungen bergen ein erhebliches Verlustrisiko und sind nicht für jeden Anleger geeignet. Die Bewertung von Kryptowährungen und Futures kann schwanken, was dazu führen kann, dass Kunden mehr als ihre ursprüngliche Investition verlieren.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Keine Finanz- oder Anlageberatung</h2>
            <p>Die Informationen auf dieser Website stellen keine Finanzberatung, Anlageberatung, Handelsberatung oder sonstige Beratung dar. Sie sollten keine Inhalte der Website als solche betrachten.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Keine garantierten Renditen</h2>
            <p>Die Leistung in der Vergangenheit ist kein Indikator für zukünftige Ergebnisse. Wir geben keine Zusicherung, dass ein Konto Gewinne oder Verluste erzielen wird oder voraussichtlich erzielen wird, die den auf dieser Website diskutierten ähnlich sind.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Haftungsbeschränkung</h2>
            <p>In keinem Fall haften wir oder unsere Direktoren, Mitarbeiter, Partner, Vertreter, Lieferanten oder verbundene Unternehmen für indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich, aber nicht beschränkt auf entgangenen Gewinn, Datenverlust, Nutzungsverlust, Goodwill oder andere immaterielle Verluste, die aus Ihrem Zugriff auf den Service oder der Nutzung des Service oder der Unmöglichkeit des Zugriffs oder der Nutzung resultieren.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Anwendbares Recht & Streitigkeiten</h2>
            <p>Diese Bedingungen unterliegen den Gesetzen und werden entsprechend ausgelegt, ohne Berücksichtigung der Bestimmungen zum Kollisionsrecht. Jegliche Streitigkeiten, die sich aus diesen Bedingungen ergeben, werden vor den zuständigen Gerichten der Gerichtsbarkeit gelöst.</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
