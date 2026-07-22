import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NAV_LINKS = [
    { to: '/shelters-rescues', label: 'Shelters & Rescues' },
    { to: '/pet-owners', label: 'Pet Owners' },
    { to: '/sponsorship', label: 'Sponsors' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center justify-center gap-3">
          <img
            src="/images/icons/shield-logo.svg"
            alt="RescueNet360 Shield Logo"
            className="h-10 w-auto"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-xl font-extrabold font-display leading-tight">
            <span className="text-primary">Rescue</span><span className="text-secondary">Net</span><span className="text-slate-800">360</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-bold transition-colors hover:text-primary py-2 ${isActive(item.to) ? 'text-primary border-b-2 border-primary' : 'text-slate-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/shelters-rescues#apply"
            className="hidden sm:inline-flex btn btn-primary text-xs md:text-sm py-2.5 px-5 whitespace-nowrap"
          >
            Apply to Be a Pilot Partner
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#18181B]/20 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <nav className="absolute top-0 left-0 w-full border-t border-separator bg-white px-5 pb-6 pt-4 shadow-xl flex flex-col gap-2" onClick={(e) => e.stopPropagation()} aria-label="Mobile primary">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-bold transition-colors ${isActive(item.to) ? 'bg-primary/10 text-primary' : 'text-text-primary hover:bg-surface hover:text-primary'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
