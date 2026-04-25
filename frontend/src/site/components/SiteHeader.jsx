import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { PRIMARY_NAV } from '../config/navigation';

const linkBaseClass =
  'rounded-full border border-transparent px-2.5 py-2 text-[13px] font-semibold transition-colors duration-200';

const getNavLinkClass = ({ isActive }) =>
  `${linkBaseClass} ${isActive ? 'border-[rgba(31,199,182,0.7)] bg-[linear-gradient(145deg,#2a3442_0%,#171d27_100%)] text-white' : 'text-white/90 hover:border-white/15 hover:bg-white/10 hover:text-white'}`;

export const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(
    'https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690ab2a4ef92467957e84474_Untitled%20design%20(73).png'
  );

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleModeSwitch = (mode, route) => {
    localStorage.setItem('route_preference', mode);
    navigate(route);
  };

  const isPetFamily = location.pathname === '/for-pet-families';
  const isOrganization = location.pathname === '/for-shelters-rescues';

  return (
    <>
      {/* Mode Switch Utility Bar */}
      {(isPetFamily || isOrganization) && (
        <div className="bg-[#0f172a] border-b border-white/10 text-xs py-1.5 px-4 flex justify-center items-center gap-4 text-white/70">
          <span className="hidden md:inline">Viewing as:</span>
          <div className="flex bg-black/40 rounded-full p-0.5 border border-white/5">
            <button 
              onClick={() => handleModeSwitch('organizations', '/for-shelters-rescues')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${isOrganization ? 'bg-[#1fc7b6]/20 text-[#1fc7b6] shadow-sm' : 'hover:text-white hover:bg-white/5'}`}
            >
              Organizations
            </button>
            <button 
              onClick={() => handleModeSwitch('individuals', '/for-pet-families')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${isPetFamily ? 'bg-[#0f766e]/20 text-[#76f0e2] shadow-sm' : 'hover:text-white hover:bg-white/5'}`}
            >
              Pet Families
            </button>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(145deg,rgba(23,29,39,0.96)_0%,rgba(42,52,66,0.94)_100%)] backdrop-blur-xl">
        <div className="wrap flex h-20 items-center justify-between">
        <Link to="/" className="flex min-w-[240px] flex-col items-start justify-center gap-1.5 md:min-w-[280px]">
          <img
            src={logoSrc}
            onError={() => setLogoSrc('/images/icons/logo.png')}
            alt="RescueNet360 logo"
            className="h-10 w-auto md:h-12"
          />
          <p className="text-[12px] font-semibold tracking-wide text-white/70 md:text-[13px]">
            Pet Reunification + Coordination
          </p>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={getNavLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 items-center rounded-lg border border-[rgba(154,168,186,0.55)] px-3 text-sm font-semibold text-white lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-white/10 bg-[linear-gradient(145deg,#171d27_0%,#2a3442_100%)] px-5 pb-4 pt-3 lg:hidden" aria-label="Mobile primary">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-2">
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg border border-transparent px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'border-[rgba(31,199,182,0.7)] bg-[linear-gradient(145deg,#2a3442_0%,#171d27_100%)] text-white' : 'text-white/90 hover:border-white/15 hover:bg-white/10'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
    </>
  );
};
