import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-gradient flex items-center justify-center shadow-brand">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-foreground">Avenza Finance</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/privacy-policy" className="hover:text-foreground transition">Datenschutzbestimmungen</Link>
          <Link to="/terms-conditions" className="hover:text-foreground transition">Nutzungsbedingungen</Link>
          <Link to="/portal" className="hover:text-foreground transition">Mitgliederportal</Link>
        </div>
      </div>
    </footer>
  );
}
