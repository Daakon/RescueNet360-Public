import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <section className="page-section">
      <div className="wrap">
        <div className="surface-card border border-white/15 bg-white/5 p-8 text-center">
          <p className="kicker">Not Found</p>
          <h1 className="font-display text-4xl font-extrabold text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[#c5d5ea]">
            The page you requested is unavailable. Use the navigation to return to a supported path.
          </p>
          <Link to="/" className="btn-primary mt-6">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
};
