import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GatekeeperPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If user has a preference, route them there automatically
    const preference = localStorage.getItem('route_preference');
    if (preference === 'individuals') {
      navigate('/for-pet-families', { replace: true });
    } else if (preference === 'organizations') {
      navigate('/for-shelters-rescues', { replace: true });
    }
  }, [navigate]);

  const handleChoice = (preference, path) => {
    localStorage.setItem('route_preference', preference);
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#060606] text-white font-display">
      {/* Organizations Option */}
      <div 
        className="flex-1 flex flex-col items-center justify-center p-12 lg:p-20 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group"
        onClick={() => handleChoice('organizations', '/for-shelters-rescues')}
      >
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#1fc7b6]/10 flex items-center justify-center border border-[#1fc7b6]/20 group-hover:bg-[#1fc7b6]/20 transition-colors">
            <svg className="w-10 h-10 text-[#1fc7b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Organizations & Shelters</h2>
          <p className="text-[#aab8ca] leading-relaxed mb-8">
            Operational clarity, unified identity, and coordination infrastructure for animal welfare teams and investors.
          </p>
          <button className="btn-primary" onClick={(e) => { e.stopPropagation(); handleChoice('organizations', '/for-shelters-rescues'); }}>
            Enter Organization Portal
          </button>
        </div>
      </div>

      {/* Pet Families Option */}
      <div 
        className="flex-1 flex flex-col items-center justify-center p-12 lg:p-20 hover:bg-white/5 transition-colors cursor-pointer group"
        onClick={() => handleChoice('individuals', '/for-pet-families')}
      >
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#0f766e]/10 flex items-center justify-center border border-[#0f766e]/20 group-hover:bg-[#0f766e]/20 transition-colors">
            <svg className="w-10 h-10 text-[#76f0e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Pet Families & Individuals</h2>
          <p className="text-[#aab8ca] leading-relaxed mb-8">
            Register your pets, notify responder networks, and coordinate safe reunification if your pet goes missing.
          </p>
          <button className="btn-secondary" onClick={(e) => { e.stopPropagation(); handleChoice('individuals', '/for-pet-families'); }}>
            Enter Family Portal
          </button>
        </div>
      </div>
    </div>
  );
};
