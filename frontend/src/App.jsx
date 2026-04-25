import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './site/components/SiteLayout';
import { ScrollToTop } from './site/components/ScrollToTop';
import { AboutPage } from './site/pages/AboutPage';
import { AcceptableUsePage } from './site/pages/AcceptableUsePage';
import { AccessibilityPage } from './site/pages/AccessibilityPage';
import { ContactConfirmationPage } from './site/pages/ContactConfirmationPage';
import { ContactPage } from './site/pages/ContactPage';
import { FamiliesPage } from './site/pages/FamiliesPage';
import { GatekeeperPage } from './site/pages/GatekeeperPage';
import { HomePage } from './site/pages/HomePage';
import { InvestorsPage } from './site/pages/InvestorsPage';
import { NotFoundPage } from './site/pages/NotFoundPage';
import { PrivacyPage } from './site/pages/PrivacyPage';
import { SecurityPage } from './site/pages/SecurityPage';
import { SheltersPage } from './site/pages/SheltersPage';
import { SponsorsPage } from './site/pages/SponsorsPage';
import { TermsPage } from './site/pages/TermsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GatekeeperPage />} />
        <Route element={<SiteLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/for-pet-families" element={<FamiliesPage />} />
          <Route path="/for-shelters-rescues" element={<SheltersPage />} />
          <Route path="/for-sponsors-partners" element={<SponsorsPage />} />
          <Route path="/for-investors" element={<InvestorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/confirmation" element={<ContactConfirmationPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/acceptable-use" element={<AcceptableUsePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
