import { Link } from 'react-router-dom';

export const PageHero = ({ eyebrow, title, description, valueLock, ctas = [], size = 'default', backgroundImage = '' }) => {
  const isCompact = size === 'compact';

  return (
    <section className={`relative overflow-hidden border-b border-white/10 ${isCompact ? 'py-16' : 'py-20 md:py-24'}`}>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(22,168,153,0.35),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(96,165,250,0.28),transparent_35%),linear-gradient(140deg,#061120_0%,#0b192b_60%,#09111e_100%)]"
      />
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,11,20,0.65)_100%)]" />

      <div className="wrap relative z-10">
        {eyebrow && <p className="kicker">{eyebrow}</p>}
        <h1 className="font-display text-[2rem] font-extrabold leading-tight text-white md:text-[3rem]">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>
        {valueLock && <p className="mt-3 max-w-3xl text-sm font-semibold text-white/90 md:text-base">{valueLock}</p>}

        {ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {ctas.map((cta) => {
              if (cta.external) {
                return (
                  <a
                    key={cta.label}
                    href={cta.to}
                    target="_blank"
                    rel="noreferrer"
                    className={cta.variant === 'soft' ? 'btn-secondary' : 'btn-primary'}
                  >
                    {cta.label}
                  </a>
                );
              }

              return (
                <Link key={cta.label} to={cta.to} className={cta.variant === 'soft' ? 'btn-secondary' : 'btn-primary'}>
                  {cta.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
