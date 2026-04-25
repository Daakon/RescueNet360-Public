import { Link } from 'react-router-dom';

const problemStats = [
  { value: '920,000', label: 'pets euthanized annually — 30% were lost, not stray' },
  { value: '6–7M', label: 'animals enter shelters each year with no shared identity layer' },
  { value: '$3.5B', label: 'spent annually on animal welfare with zero shared infrastructure' },
];

const workflowSteps = [
  {
    title: 'Create Identity',
    description: 'Owner or shelter creates a pet identity record with a front-face photo. Persistent ID is generated.',
  },
  {
    title: 'Mark Active-Lost',
    description: 'Pet is marked \'Active-Lost.\' The platform triggers notifications to relevant connected shelters.',
  },
  {
    title: 'Cross-Reference',
    description: 'When a stray arrives at any connected shelter, the intake photo is cross-referenced automatically.',
  },
  {
    title: 'Surface Match',
    description: 'A match candidate surfaces in the shelter\'s Reunification Center with a confidence score.',
  },
];

const faqs = [
  {
    question: 'If shelters are free, how does RescueNet360 make money?',
    answer: 'Shelters access the core identity and coordination platform at no cost — forever. Revenue comes from enterprise partnerships, sponsor integrations, API licensing for third-party developers, and premium coordination modules for regional transport networks and foster management SaaS. The free tier creates the network effect. The enterprise layer monetizes it.'
  },
  {
    question: 'Is RescueNet360 available nationwide?',
    answer: 'RescueNet360 is currently in phased pilot mode, with regional rollout based on partner readiness and coordinated onboarding capacity.',
  },
  {
    question: 'Does this replace existing shelter software?',
    answer: 'No. RescueNet360 is a coordination layer that connects workflows across existing systems to improve visibility, handoffs, and response speed.',
  },
];

export const SheltersPage = () => {
  return (
    <div className="bg-[#060606] text-white">
      {/* Dark SaaS Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5 py-20 px-5 lg:px-8 xl:px-0">
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 75% 40%, rgba(31,199,182,0.06) 0%, transparent 70%), linear-gradient(180deg, #060606 0%, #0D0D0D 60%, #111111 100%)'
          }}
        />
        
        <div className="wrap relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-8">
          {/* Left Content */}
          <div className="max-w-[580px]">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#1fc7b6] mb-4">
              IDENTITY INFRASTRUCTURE FOR ANIMAL WELFARE
            </p>
            <h1 className="text-5xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-6">
              The coordination layer animal welfare has always needed.
            </h1>
            <p className="text-lg lg:text-xl text-[#aab8ca] leading-relaxed mb-8">
              RescueNet360 creates a persistent digital identity for every animal — one shared record that moves with the pet across shelters, rescues, fosters, vets, and owners. No data gaps. No duplicate intake. No avoidable euthanasia.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/contact?type=shelter_rescue" className="inline-flex items-center rounded-full bg-gradient-to-br from-[#2a3442] to-[#171d27] border border-[#9aa8ba]/50 text-white px-6 py-3.5 font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(15,118,110,0.42),0_12px_28px_rgba(7,12,18,0.42)] transition-all hover:translate-y-[-1px] hover:border-[#1fc7b6]/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(31,199,182,0.55),0_16px_34px_rgba(7,12,18,0.52)]">
                → Become a Pilot Partner
              </Link>
              <Link to="/contact?type=investor" className="inline-flex items-center rounded-full bg-gradient-to-br from-[#f8fbff] to-[#e3ebf4] border border-[#aab8ca] text-[#162235] px-6 py-3.5 font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_rgba(15,23,42,0.14)] transition-all hover:translate-y-[-1px] hover:bg-gradient-to-br hover:from-[#f4f8fd] hover:to-[#dbe4ef]">
                → Request Investor Brief
              </Link>
            </div>
            
            <div className="text-[13px] font-medium text-[#4F4F51] flex flex-wrap gap-x-4 gap-y-2">
              <span className="flex items-center gap-1.5"><strong className="text-white">✓</strong> Functional MVP</span>
              <span className="flex items-center gap-1.5"><strong className="text-white">✓</strong> Patent-pending (74 claims)</span>
              <span className="flex items-center gap-1.5"><strong className="text-white">✓</strong> Public Benefit Corporation</span>
              <span className="flex items-center gap-1.5"><strong className="text-white">✓</strong> Free for shelters, forever</span>
            </div>
          </div>
          
          {/* Right Visual (Hybrid Dog + UI) */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1589965716319-4a041b58faf8?q=80&w=1974&auto=format&fit=crop" 
              alt="Working dog profile" 
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[360px] lg:h-[480px] w-auto opacity-80 mix-blend-screen"
              style={{ filter: 'grayscale(8%) contrast(1.05)', maskImage: 'linear-gradient(to left, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}
            />
            {/* The UI CSS mockup layer */}
            <div className="absolute right-0 lg:-right-10 top-[20%] w-[90%] lg:w-[520px] rounded-2xl border border-white/10 bg-[#141414]/90 backdrop-blur-md shadow-[0_20px_80px_rgba(31,199,182,0.15),0_0_60px_rgba(31,199,182,0.08),0_10px_40px_rgba(0,0,0,0.6)] p-1 transition-transform duration-700 hidden lg:block" style={{ transform: 'perspective(1200px) rotateY(-12deg) rotateX(3deg)' }}>
               {/* UI Header */}
               <div className="flex border-b border-white/5 p-4 items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xl overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=154&auto=format&fit=crop" alt="Sunny" className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <div className="text-white font-bold text-sm">Sunny</div>
                     <div className="text-[#aab8ca] text-xs">Pet Identity Profile</div>
                   </div>
                 </div>
                 <div className="relative">
                   <span className="bg-[#1fc7b6]/20 border border-[#1fc7b6]/30 text-[#1fc7b6] text-xs px-2 py-0.5 rounded font-mono">ID: 35f84a37</span>
                   <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#1fc7b6] animate-ping" />
                 </div>
               </div>
               
               <div className="p-4 grid gap-3">
                 <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                   <div className="text-xs text-[#aab8ca] mb-1">Core Vitals</div>
                   <div className="flex gap-4">
                     <div><strong className="block text-white text-sm">Canine</strong><span className="text-[10px] text-slate-500">Species</span></div>
                     <div><strong className="block text-white text-sm">Golden Ret.</strong><span className="text-[10px] text-slate-500">Breed Info</span></div>
                     <div><strong className="block text-white text-sm">Yes</strong><span className="text-[10px] text-slate-500">Microchipped</span></div>
                   </div>
                 </div>
                 
                 <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                   <div className="flex items-center justify-between mb-2">
                     <div className="text-xs text-[#aab8ca]">Priority Actions</div>
                     <span className="bg-[#FF3B30]/20 text-[#FF3B30] text-[10px] px-1.5 py-0.5 rounded font-bold">1 URGENT</span>
                   </div>
                   <div className="flex items-center gap-2 text-xs text-white bg-black/40 p-2 rounded">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                     Review Identity Cluster Candidate (94% Match)
                   </div>
                 </div>
               </div>
            </div>
            {/* Mobile Fallback UI (No tilt) */}
            <div className="absolute top-[20%] w-[90%] rounded-2xl border border-white/10 bg-[#141414]/90 backdrop-blur-md shadow-[0_20px_80px_rgba(31,199,182,0.15),0_0_60px_rgba(31,199,182,0.08),0_10px_40px_rgba(0,0,0,0.6)] p-1 block lg:hidden">
               {/* Simplified mobile UI mockup */}
               <div className="flex border-b border-white/5 p-4 items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-slate-800 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=154&auto=format&fit=crop" alt="Sunny" className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <div className="text-white font-bold text-sm">Sunny</div>
                     <div className="text-[#aab8ca] text-[10px]">Persistent ID: 35f84a37</div>
                   </div>
                 </div>
                 <span className="bg-[#FF3B30]/20 text-[#FF3B30] text-[10px] px-2 py-1 rounded font-bold">URGENT</span>
               </div>
               <div className="p-4 text-xs text-[#aab8ca]">
                 <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full border border-white/30" /> 1 Match Candidate Pending</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-white/30" /> Custody State: In Transit</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-[#2C2B30] bg-[#111111]">
        <div className="wrap text-center">
          <div className="grid gap-6 md:grid-cols-3">
            {problemStats.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <strong className="block text-4xl font-extrabold text-[#1fc7b6] mb-2">{item.value}</strong>
                <span className="text-sm text-[#aab8ca] max-w-[200px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-[#060606]">
        <div className="wrap">
          <p className="kicker mb-3">THE PLATFORM — FUNCTIONAL AND PILOT-READY</p>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">This is not a mockup.</h2>
          <p className="text-[#aab8ca] max-w-2xl text-lg mb-12">
            RescueNet360 is functional today and ready for pilot partners. Below are real workflows from our platform — persistent identity, reunification pipelines, and multi-shelter coordination infrastructure.
          </p>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 lg:p-10 mb-20 shadow-2xl relative overflow-hidden">
            {/* The REAL WORKFLOW section */}
            <p className="kicker mb-3">REAL WORKFLOW — FROM LOST TO REUNITED</p>
            <h3 className="text-2xl font-bold text-white mb-8">How a lost dog finds its way home — through a system, not luck.</h3>
            
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="bg-[#2C2B30]/50 border border-white/5 rounded-xl p-5 hover:bg-[#2C2B30] transition-colors">
                  <div className="text-[#1fc7b6] font-mono text-sm mb-3 font-semibold">Step {idx + 1}</div>
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-[#D6D6D6] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-sm italic text-[#aab8ca] text-center border-t border-white/10 pt-8 relative z-10">
              "Every step above is functional in the platform today. No waiting. No spreadsheets. No data loss when an animal crosses shelter boundaries."
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#111111] border-t border-[#2C2B30]">
        <div className="wrap max-w-4xl">
          <p className="kicker mb-3 text-center">Frequently Asked Questions</p>
          <h2 className="text-4xl font-extrabold text-white mb-10 text-center">Common Questions</h2>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-[#060606] border border-white/10 rounded-xl p-6 group">
                <summary className="font-bold text-lg text-white cursor-pointer list-none flex justify-between items-center outline-none">
                  {faq.question}
                  <span className="text-[#1fc7b6] group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-4 text-[#aab8ca] leading-relaxed pr-8 border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#060606] to-[#0A1313] border-t border-[#1fc7b6]/20 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-64 bg-[#1fc7b6]/10 blur-[100px] pointer-events-none" />
        
        <div className="wrap relative z-10 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            We are selecting pilot partners for Q2 2026.
          </h2>
          <p className="text-[#aab8ca] text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Pilot shelters get full platform access at no cost — and become part of building the national infrastructure for animal welfare. Applications are reviewed individually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=shelter_rescue" className="btn-primary px-8">
              Apply as Pilot Partner
            </Link>
            <Link to="/contact?type=investor" className="btn-secondary px-8">
              Request Investor Brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
