import React from 'react';
import { Award, Briefcase, Eye, ShieldCheck, Target, Users, Linkedin, Mail } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      title: 'Ethical Stewardship',
      desc: 'We operate with strict adherence to OECD guidelines, actively eliminating conflict gold and child labor from our supply lines.',
      icon: ShieldCheck
    },
    {
      title: 'Institutional Grade Integrity',
      desc: 'All trading, smelting, assaying, and tax settlements are fully recorded and audited in cooperation with the Ministry and URA.',
      icon: Award
    },
    {
      title: 'Global Supply Excellence',
      desc: 'We execute high-value transactions with the speed, precision, and safety standards expected by international bullion houses.',
      icon: Users
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Corporate Inception',
      desc: 'Registered as Afrimex Mineral Dealers Limited in Kampala, establishing primary relationships with authorized artisanal gold cooperatives.'
    },
    {
      year: '2017',
      title: 'Laboratory Smelting Expansion',
      desc: 'Commissioned our state-of-the-art smelting and non-destructive XRF spectrum assay lab in central Kampala to optimize mineral processing.'
    },
    {
      year: '2020',
      title: 'OECD Compliance Alignment',
      desc: 'Successfully structured our five-step due diligence process to align with the OECD Guidelines, establishing a conflict-free sourcing guarantee.'
    },
    {
      year: '2024',
      title: 'Sovereign Delivery Network',
      desc: 'Signed rolling delivery SPA contracts with major institutional refiners in Zurich and Dubai, boosting local mining communities.'
    }
  ];

  const leaders = [
    {
      name: 'Ssenyonga Hakimu',
      role: 'Director of International Trade',
      desc: 'Supervises global physical precious metals sales, corporate trade desk operations, sovereign allocations, and strategic escrow accounts.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      linkedin: 'https://ug.linkedin.com/in/ssenyonga-hakimu-a217b5370',
      email: 'sales@afrimexmineraldealers.com'
    },
    {
      name: 'Andrew S. Kabunga',
      role: 'Chief Executive Officer',
      desc: 'Over 20 years of experience in precious metals trade and geological operations across the East African Community.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Sarah N. Lwanga',
      role: 'Chief Compliance Officer',
      desc: 'Formerly an AML risk specialist, she oversees all corporate KYC procedures, OECD supply audits, and legal compliance structures.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Dr. Michael Ssemogerere',
      role: 'Chief Metallurgist',
      desc: 'With a doctorate in minerals science, he directs the fire assay and smelting laboratory, guaranteeing flawless bullion specifications.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&h=300&q=80'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-slate-50 border border-slate-100/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
            Corporate Pedigree
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Setting the Benchmark for Ugandan Precious Metals Export
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            Afrimex Mineral Dealers Limited is a licensed precious metals company operating out of Kampala. Our business philosophy centers on strict compliance, ethical mining community partnerships, and transparent gold trading frameworks.
          </p>
        </div>

        {/* Vision & Mission Bento-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-teal-dark/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-teal-dark" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-xl">Our Vision</h3>
            <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
              To remain the most trusted, compliant, and reliable supplier of ethical African gold bullion, driving the formalization of the precious metals sector and creating premium value for both institutional buyers and local miners.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-gold-dark" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-xl">Our Mission</h3>
            <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
              To source, smelt, assay, and export high-purity gold and precious metals in strict adherence to national mining acts and OECD Sourcing Guidelines, ensuring a secure and transparent gold trading pipeline for global markets.
            </p>
          </div>
        </div>

        {/* Core values block */}
        <div className="mb-20">
          <h3 className="text-center font-display font-bold text-slate-900 text-2xl mb-12">Institutional Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50 hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-base">{v.title}</h4>
                <p className="text-slate-500 mt-2 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal/Vertical Timeline Split */}
        <div className="mb-20">
          <h3 className="text-center font-display font-bold text-slate-900 text-2xl mb-12">Our Journey of Growth</h3>
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:grid md:grid-cols-4 md:border-l-0 md:border-t-2 md:pt-8 md:gap-6 space-y-8 md:space-y-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 md:-top-[41px] md:-left-1.5 w-4 h-4 rounded-full bg-teal-dark border-4 border-white shadow-sm" />
                
                <span className="font-mono font-extrabold text-gold-dark text-lg block">{item.year}</span>
                <h4 className="font-display font-bold text-slate-900 text-sm mt-1">{item.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Board */}
        <div>
          <h3 className="text-center font-display font-bold text-slate-900 text-2xl mb-12">Executive Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="glass-panel rounded-2xl overflow-hidden border border-slate-200/50 hover:shadow-md flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="aspect-square w-full relative bg-slate-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95 object-top"
                    />
                  </div>
                  <div className="p-6 pb-2">
                    <h4 className="font-display font-bold text-slate-900 text-base">{leader.name}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal-dark font-bold block mt-0.5">
                      {leader.role}
                    </span>
                    <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </div>
                
                {/* Contact Links Footer for Leader */}
                <div className="p-6 pt-0">
                  {('linkedin' in leader || 'email' in leader) ? (
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-teal-dark transition-colors flex items-center gap-1.5 text-[10px] font-mono font-bold"
                          title="View LinkedIn Profile"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-teal-dark" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {leader.email && (
                        <a
                          href={`mailto:${leader.email}`}
                          className="text-slate-400 hover:text-gold-dark transition-colors flex items-center gap-1.5 text-[10px] font-mono font-bold ml-auto"
                          title="Send Email"
                        >
                          <Mail className="w-3.5 h-3.5 text-gold-dark" />
                          <span className="truncate max-w-[80px]" title={leader.email}>Email</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-slate-100/50 text-[10px] font-mono text-slate-400 italic">
                      Executive Desk
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
