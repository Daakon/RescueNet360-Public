import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="bg-primary-deep py-16 text-text-inverse">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-white/15 pb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex">
              <img
                src="/images/icons/shield-logo-onecolor.svg"
                alt="RescueNet360 Shield Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-extrabold font-display leading-tight">
                Rescue<span className="text-secondary">Net</span>360
              </span>
            </Link>
            <p className="text-sm text-text-inverse/80 leading-relaxed mb-5">
              Connecting the people, data, and decisions that protect animals.
            </p>
            <div className="flex gap-2.5 mb-4">
              <a href="#" aria-label="RescueNet360 on Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h-3a4 4 0 00-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="RescueNet360 on Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"></circle></svg>
              </a>
              <a href="#" aria-label="RescueNet360 on LinkedIn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="4" height="16"></rect><path d="M12 20v-8a4 4 0 018 0v8M12 20V9"></path></svg>
              </a>
            </div>
            <h4 className="text-secondary font-bold mb-3 font-display text-sm tracking-wider uppercase">Contact</h4>
            <a href="mailto:pilot@rescuenet360.com" className="text-sm hover:text-white transition-colors">pilot@rescuenet360.com</a>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4 font-display text-sm tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shelters-rescues" className="hover:text-white transition-colors">Shelters &amp; Rescues</Link></li>
              <li><Link to="/pet-owners" className="hover:text-white transition-colors">Pet Owners</Link></li>
              <li><Link to="/sponsorship" className="hover:text-white transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4 font-display text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/shelters-rescues#apply" className="hover:text-white transition-colors">Apply to Be a Pilot Partner</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-inverse/70">
          <p>&copy; {new Date().getFullYear()} RescueNet360. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
