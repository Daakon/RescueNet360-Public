import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, FOOTER_COMPANY_NAV, FOOTER_SITE_NAV } from '../config/navigation';

export const SiteFooter = () => {
  return (
    <footer className="border-t border-[rgba(154,168,186,0.35)] bg-[linear-gradient(155deg,#121a24_0%,#1c2633_100%)] py-12 text-white/80">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img
              src="https://cdn.prod.website-files.com/688d4c9cd641b90f2540ee43/690ab2a4ef92467957e84474_Untitled%20design%20(73).png"
              alt="RescueNet360 logo"
              className="h-10 w-auto"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Persistent identity infrastructure for animal welfare — one record, every shelter, no data loss.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Site</p>
            <div className="mt-3 flex flex-col gap-2">
              {FOOTER_SITE_NAV.map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-white/80 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Company</p>
            <div className="mt-3 flex flex-col gap-2">
              {FOOTER_COMPANY_NAV.map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-white/80 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Connect</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 transition-colors hover:text-teal">
                {CONTACT_EMAIL}
              </a>
              <p className="text-white/60">Public-benefit oriented platform initiative.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>{new Date().getFullYear()} RescueNet360. Innovation that saves lives.</p>
        </div>
      </div>
    </footer>
  );
};
