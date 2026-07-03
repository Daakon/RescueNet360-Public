import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SiteLayout } from './site/components/SiteLayout';
import { ScrollToTop } from './site/components/ScrollToTop';
import { AboutPage } from './site/pages/AboutPage';
import { AccessibilityPage } from './site/pages/AccessibilityPage';
import { ContactPage } from './site/pages/ContactPage';
import { PetOwnersPage } from './site/pages/PetOwnersPage';
import { HomePage } from './site/pages/HomePage';
import { HowItWorksPage } from './site/pages/HowItWorksPage';
import { NotFoundPage } from './site/pages/NotFoundPage';
import { PilotProgramPage } from './site/pages/PilotProgramPage';
import { PrivacyPage } from './site/pages/PrivacyPage';
import { SheltersPage } from './site/pages/SheltersPage';
import { SponsorsPage } from './site/pages/SponsorsPage';
import { StartPage } from './site/pages/StartPage';
import { TermsPage } from './site/pages/TermsPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            {/* Canonical Content Map Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/shelters-rescues" element={<SheltersPage />} />
            <Route path="/pet-owners" element={<PetOwnersPage />} />
            <Route path="/pilot-program" element={<PilotProgramPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/sponsorship" element={<SponsorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legacy & Supplemental Routes */}
            <Route path="/sponsors" element={<Navigate to="/sponsorship" replace />} />
            <Route path="/for-shelters-rescues" element={<Navigate to="/shelters-rescues" replace />} />
            <Route path="/for-pet-owners" element={<Navigate to="/pet-owners" replace />} />
            
            {/* Legal / Utility Routes */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
