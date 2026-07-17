import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CountryDropdown, getCountryByCode } from "../ui/CountryDropdown";
import { formatPhoneForCRM } from "../../lib/phone-utils";

type View = "login" | "signup";
type FormState = "idle" | "submitting";

export function Portal() {
  const [view, setView] = useState<View>("login");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "ch",
  });

  function set<K extends keyof typeof values>(k: K, v: string) {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Enter a valid email.";

    if (view === "signup") {
      if (!values.name.trim()) errs.name = "Please enter your full name.";
      const countryObj = getCountryByCode(values.country);
      if (!countryObj.regex.test(values.phone)) {
        errs.phone = `Enter a valid phone number (e.g. ${countryObj.example}).`;
      }
    }

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setState("submitting");
    setServerMessage("");

    try {
      let res;
      if (view === "signup") {
        const countryObj = getCountryByCode(values.country);
        res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            phone: formatPhoneForCRM(values.phone, countryObj.dialCode),
          }),
        });
      } else {
        res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        });
      }

      const data = await res.json();
      
      if (!res.ok || !data.success) {
        setState("idle");
        setServerMessage(data.message || "An unexpected error occurred.");
      } else {
        // Success
        localStorage.setItem("sessionToken", data.sessionToken);
        navigate("/dashboard");
      }
    } catch (err) {
      setState("idle");
      setServerMessage("An unexpected failure occurred. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-brand-soft/20" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-card rounded-3xl p-8 shadow-card border border-border relative z-10 bg-white/10 backdrop-blur-3xl">
          <button
            onClick={() => navigate("/")}
            className="absolute top-8 left-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold tracking-tight">
              {view === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              {view === "login"
                ? "Sign in to access your portfolio"
                : "Submit your details to start investing"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {view === "signup" && (
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Alexandra Chen"
                  className="mt-1.5 h-11 rounded-xl bg-black/5 border-white/10"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
            )}

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="alexandra@company.com"
                className="mt-1.5 h-11 rounded-xl bg-black/5 border-white/10"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            {view === "signup" && (
              <>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <CountryDropdown
                    value={values.country}
                    onChange={(c) => set("country", c)}
                    className="mt-1.5 h-11 rounded-xl w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder={getCountryByCode(values.country).example}
                    className="mt-1.5 h-11 rounded-xl bg-black/5 border-white/10"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </>
            )}

            {serverMessage && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                {serverMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={state === "submitting"}
              className="w-full h-11 rounded-xl bg-brand-gradient shadow-brand mt-4"
            >
              {state === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <>{view === "login" ? "Sign in" : "Sign up"} <ArrowRight className="ml-1 w-4 h-4" /></>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {view === "login" ? "Don't have an account?" : "Already have an account?"}
            </span>{" "}
            <button
              onClick={() => {
                setView(view === "login" ? "signup" : "login");
                setErrors({});
                setServerMessage("");
              }}
              className="font-medium text-brand hover:underline"
            >
              {view === "login" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
