import { Routes, Route } from "react-router-dom";
import Landing from "./components/site/landing";
import { EducationalDashboard } from "./components/site/EducationalDashboard";
import { PrivacyPolicy } from "./components/site/PrivacyPolicy";
import { TermsConditions } from "./components/site/TermsConditions";
import { Portal } from "./components/site/portal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<EducationalDashboard />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default App;
