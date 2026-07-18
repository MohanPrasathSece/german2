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
            <span className="font-semibold text-sm">Zurück zur Startseite</span>
          </Link>
          <span className="font-bold tracking-tight">Aetheria</span>
        </div>
      </header>
      
      <main className="mx-auto max-w-3xl px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-card">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Datenschutzbestimmungen</h1>
          <div className="prose prose-invert prose-brand max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Zuletzt aktualisiert:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Datenerfassung</h2>
            <p>Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie Ihr Konto erstellen oder ändern, On-Demand-Dienste anfordern, den Kundensupport kontaktieren oder anderweitig mit uns kommunizieren. Dazu gehören Ihr Name, Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihr Land und Nachrichten.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Datennutzung</h2>
            <p>Die erfassten Daten werden verwendet, um Ihr Erlebnis zu personalisieren, Kundensupport zu bieten und mit Ihnen über unsere Dienstleistungen, Produkte und Updates zu kommunizieren. Wir verkaufen Ihre personenbezogenen Daten nicht.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. CRM-Verarbeitung</h2>
            <p>Wenn Sie ein Kontaktformular oder eine Registrierungsanfrage senden, werden Ihre Daten sicher an unser Customer Relationship Management (CRM) System zur Bearbeitung Ihrer Anfrage oder Kontoregistrierung übermittelt.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Cookies & Tracking</h2>
            <p>Wir verwenden Cookies und ähnliche Tracking-Technologien, um Aktivitäten auf unserem Service zu verfolgen und bestimmte Informationen zu speichern. Sie können Ihren Browser so einstellen, dass er alle Cookies ablehnt oder anzeigt, wenn ein Cookie gesendet wird.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Sicherheit</h2>
            <p>Die Sicherheit Ihrer Daten ist uns wichtig. Beachten Sie jedoch, dass keine Methode der Übertragung über das Internet oder Methode der elektronischen Speicherung zu 100% sicher ist. Wir verwenden handelsübliche, akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten, einschließlich Verschlüsselung und strenger Zugangskontrollen.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Datenaufbewahrung</h2>
            <p>Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Datenschutzerklärung dargelegten Zwecke erforderlich ist. Wir werden Ihre personenbezogenen Daten in dem Umfang aufbewahren und verwenden, wie es zur Erfüllung unserer gesetzlichen Verpflichtungen erforderlich ist.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Benutzerrechte</h2>
            <p>Sie haben das Recht, auf die Informationen zuzugreifen, die wir über Sie gespeichert haben, diese zu aktualisieren oder zu löschen. Sie können diese Rechte ausüben, indem Sie uns direkt über unsere Support-Kanäle kontaktieren.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Marketing & Dritte</h2>
            <p>Wir können Drittunternehmen und Einzelpersonen beauftragen, um unseren Service zu erleichtern, den Service in unserem Namen bereitzustellen, servicebezogene Dienstleistungen zu erbringen oder uns bei der Analyse der Nutzung unseres Services zu unterstützen. Diese Dritten haben nur Zugang zu Ihren personenbezogenen Daten, um diese Aufgaben in unserem Namen zu erfüllen.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Internationale Übertragungen</h2>
            <p>Ihre Informationen, einschließlich personenbezogener Daten, können auf Computer übertragen und dort gepflegt werden, die sich außerhalb Ihres Staates, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Gerichtsbarkeit befinden, wo die Datenschutzgesetze von denen Ihrer Gerichtsbarkeit abweichen können.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Kontaktieren Sie uns</h2>
            <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über die Kontaktformulare unserer Website.</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
