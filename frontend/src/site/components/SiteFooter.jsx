import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="dark bg-bg py-16 text-text-secondary border-t border-separator">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 border-b border-separator pb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex">
              <img
                src="/images/icons/shield-logo-white.svg"
                alt="RescueNet360 Shield Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-extrabold font-display leading-tight text-white">
                <span className="text-primary">Rescue</span><span className="text-secondary">Net</span>360
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              The operational backbone connecting shelters, rescues, and pet owners into one unified network.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display text-sm tracking-wider uppercase">Audience Paths</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shelters-rescues" className="hover:text-white transition-colors">Shelters &amp; Rescues</Link></li>
              <li><Link to="/pet-owners" className="hover:text-white transition-colors">Pet Owners</Link></li>
              <li><Link to="/sponsorship" className="hover:text-white transition-colors">Sponsors &amp; Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display text-sm tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About &amp; Mission</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/pilot-program" className="hover:text-white transition-colors">Apply for Pilot</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display text-sm tracking-wider uppercase">Legal &amp; Policy</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} RescueNet360, PBC. All rights reserved.</p>
          <p>Built to connect. Protected by purpose.</p>
        </div>
      </div>
    </footer>
  );
};
