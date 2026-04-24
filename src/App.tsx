/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Award,
  Terminal,
  Database,
  Cloud,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const SectionTitle = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`font-display text-4xl md:text-6xl mb-16 tracking-tight ${color}`}
  >
    {children}
  </motion.h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`rounded-[2.5rem] p-10 shadow-sm border ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-natural-bg text-natural-text font-sans selection:bg-natural-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-md px-6 py-4 rounded-full border border-natural-border shadow-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-display font-bold tracking-tight text-natural-sidebar"
          >
            BEREKET.A
          </motion.div>
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-natural-muted">
            {['About', 'Experience', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-natural-sidebar transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="px-6 py-2 bg-natural-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:brightness-110 transition-all shadow-md">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 bg-natural-sidebar p-12 md:p-16 rounded-[3rem] flex flex-col justify-between text-white relative group"
          >
            <div className="space-y-12">
              <div className="w-16 h-1 bg-natural-accent" />
              <div className="space-y-4">
                <h1 className="font-display text-7xl md:text-8xl font-black leading-[1] tracking-tight">
                  BEREKET<br />ANTENEH
                </h1>
                <p className="text-lg opacity-80 font-medium tracking-wide border-l-2 border-natural-accent pl-6 py-1">
                  Health Insurance IT Professional
                </p>
              </div>
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="relative aspect-[3/4] w-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-natural-accent/20 bg-natural-card flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/KzyM5gCG/profile.jpg" 
                  alt="Bereket profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974";
                  }}
                />
              </div>
              <div className="space-y-2 opacity-60 text-xs uppercase tracking-[0.2em]">
                <p>Born: 25/1/1995 (E.C.)</p>
                <p>Location: Ethiopia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12"
          >
            <span className="text-natural-accent font-bold uppercase tracking-[0.3em] text-xs mb-6">Introduction</span>
            <p className="text-3xl md:text-5xl font-display text-natural-text leading-tight mb-10">
              Transforming insurance operations through <span className="text-natural-sidebar underline decoration-natural-accent decoration-4 underline-offset-8">strategic IT management</span> and specialized educational technology.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="space-y-2">
                <p className="text-natural-muted font-bold uppercase tracking-widest text-[10px]">Education</p>
                <p className="font-bold">Mattu University</p>
              </div>
              <div className="space-y-2">
                <p className="text-natural-muted font-bold uppercase tracking-widest text-[10px]">Experience</p>
                <p className="font-bold">2+ Years in Professional IT</p>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
              <button className="px-8 py-4 bg-natural-sidebar text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all shadow-lg active:scale-95">
                Download CV
              </button>
              <div className="flex items-center gap-2">
                {[Github, Linkedin].map((Icon, i) => (
                  <div key={i} className="w-14 h-14 rounded-2xl border border-natural-border flex items-center justify-center hover:bg-natural-card transition-colors cursor-pointer text-natural-muted">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle color="text-natural-sidebar">PROFESSIONAL JOURNEY</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white border-natural-border">
              <h3 className="font-display text-3xl mb-6">Vision & Values</h3>
              <p className="text-natural-muted leading-relaxed mb-8">
                With a Bachelor's degree in Educational Technology and Information Management from Mattu University, 
                I focus on creating systems that are not just technically sound, but practically efficient for complex environments like health insurance.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-natural-card rounded-xl flex items-center justify-center border border-natural-border">
                    <Terminal className="text-natural-sidebar" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">System Integrity</h5>
                    <p className="text-xs text-natural-muted">Ensuring data accuracy and system reliability.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-natural-card rounded-xl flex items-center justify-center border border-natural-border">
                    <Database className="text-natural-accent" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Knowledge Management</h5>
                    <p className="text-xs text-natural-muted">Optimizing how information flows through the organization.</p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-natural-sidebar p-8 rounded-[2rem] text-white flex flex-col justify-between">
                <Award className="text-natural-accent mb-4" size={32} />
                <div>
                  <h4 className="text-4xl font-display mb-1">2+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Years Professional Exp</p>
                </div>
              </div>
              <div className="bg-natural-accent p-8 rounded-[2rem] text-white flex flex-col justify-between">
                <GraduationCap className="text-white mb-4" size={32} />
                <div>
                  <h4 className="text-lg font-bold leading-tight">Mattu University Graduate</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-2">Bsc Ed-Tech & IM</p>
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2 bg-natural-card border border-natural-border p-8 rounded-[2rem]">
                <h4 className="font-bold mb-4 flex items-center gap-2"><MapPin size={18} className="text-natural-accent" /> Location</h4>
                <p className="text-sm text-natural-muted">Originally from Itang Special District, currently applying my expertise across Ethiopia's growing tech landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white border-y border-natural-border">
        <div className="max-w-7xl mx-auto">
          <SectionTitle color="text-natural-text">RELEVANT EXPERIENCE</SectionTitle>
          <div className="space-y-8">
            <div className="p-8 md:p-12 bg-natural-bg rounded-[3rem] border border-natural-border flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 bg-natural-sidebar rounded-3xl flex items-center justify-center text-white shrink-0">
                <Briefcase size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold">Health Insurance IT Professional</h4>
                    <p className="text-natural-accent font-bold uppercase tracking-widest text-[10px] mt-1">Full-time • Ethiopia</p>
                  </div>
                  <span className="px-4 py-2 bg-natural-sidebar text-white rounded-full text-[10px] font-bold uppercase tracking-widest">2024 — Present</span>
                </div>
                <p className="text-natural-muted leading-relaxed max-w-3xl">
                  Specializing in IT operations within the health insurance sector. My role involves managing complex data structures, ensuring system security, and bridging technical infrastructure with operational needs to provide seamless insurance services.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["System Admin", "Data Security", "IT Support", "Insurance Tech"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-natural-border rounded-full text-[10px] font-bold text-natural-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle color="text-natural-sidebar">ACADEMIC FOUNDATION</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-natural-card rounded-2xl flex items-center justify-center border border-natural-border text-natural-accent shrink-0 group-hover:bg-natural-sidebar group-hover:text-white transition-all">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Bachelor of Science</h4>
                  <p className="text-natural-sidebar font-display text-lg">Mattu University</p>
                  <p className="text-natural-muted text-sm mt-2">Educational Technology And Information Management</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group pt-8 border-t border-natural-border/50">
                <div className="w-16 h-16 bg-natural-card rounded-2xl flex items-center justify-center border border-natural-border text-natural-sidebar shrink-0 group-hover:bg-natural-accent group-hover:text-white transition-all">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">General Education (1-12)</h4>
                  <p className="text-natural-sidebar font-display text-lg">Itang Special District</p>
                  <p className="text-natural-muted text-sm mt-2">Completed full primary and secondary education with a focus on core sciences and mathematics.</p>
                </div>
              </div>
            </div>
            <div className="bg-natural-sidebar p-12 rounded-[3rem] text-white h-full">
              <h4 className="font-display text-2xl mb-6">Key Areas of Study</h4>
              <ul className="space-y-4 opacity-80 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-natural-accent" /> Information Systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-natural-accent" /> Educational Psychology
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-natural-accent" /> Database Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-natural-accent" /> System Analysis & Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-natural-accent" /> Network Infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <SectionTitle color="text-natural-text">TECHNICAL ARSENAL</SectionTitle>
              <p className="text-natural-muted">A versatile set of skills ranging from system administration to educational tech strategies.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-natural-border flex items-center justify-center text-natural-muted"><Terminal size={20} /></div>
              <div className="w-12 h-12 rounded-full border border-natural-border flex items-center justify-center text-natural-muted"><Database size={20} /></div>
              <div className="w-12 h-12 rounded-full border border-natural-border flex items-center justify-center text-natural-muted"><Cloud size={20} /></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Information Systems", color: "bg-emerald-500" },
              { name: "Health IT Systems", color: "bg-indigo-500" },
              { name: "Database Design", color: "bg-rose-500" },
              { name: "Educational Technology", color: "bg-amber-500" },
              { name: "System Support", color: "bg-blue-500" },
              { name: "Network Admin", color: "bg-purple-500" },
              { name: "Knowledge Mgmt", color: "bg-orange-500" },
              { name: "Digital Security", color: "bg-cyan-500" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${skill.color} p-6 rounded-3xl text-black font-bold flex flex-col justify-between aspect-square md:aspect-auto md:h-40 cursor-default`}
              >
                <div className="text-xs uppercase tracking-widest opacity-60">Skill 0{index + 1}</div>
                <div className="text-lg md:text-xl leading-tight">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-natural-sidebar">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="text-white">
              <h2 className="font-display text-6xl md:text-8xl mb-8 leading-[0.9]">LET'S<br />CONNECT.</h2>
              <p className="text-white/60 text-xl max-w-md mb-12">
                Bringing modern IT solutions to Ethiopia's health sector. Reach out for collaboration or inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-natural-accent group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest opacity-40">Email Me</h5>
                    <p className="text-xl">antenehbereket04@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-natural-sidebar transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest opacity-40">Call Me</h5>
                    <p className="text-xl">+251 --- --- ---</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-natural-muted px-2">Your Name</label>
                  <input type="text" className="w-full bg-natural-bg border border-natural-border rounded-2xl p-4 focus:outline-none focus:border-natural-accent transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-natural-muted px-2">Email Address</label>
                  <input type="email" className="w-full bg-natural-bg border border-natural-border rounded-2xl p-4 focus:outline-none focus:border-natural-accent transition-colors" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-natural-muted px-2">Message</label>
                  <textarea rows={4} className="w-full bg-natural-bg border border-natural-border rounded-2xl p-4 focus:outline-none focus:border-natural-accent transition-colors" placeholder="How can I help you?" />
                </div>
                <button className="w-full py-5 bg-natural-accent text-white font-bold uppercase tracking-[0.2em] rounded-2xl hover:brightness-110 transition-all active:scale-95 shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-natural-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-natural-muted">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 Bereket Anteneh Teklu
          </div>
          <p className="text-[10px] uppercase tracking-widest italic opacity-60">Designing the future of health-tech in Ethiopia</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest hover:text-natural-sidebar transition-colors cursor-pointer group px-4 py-2 border border-natural-border rounded-full">
            <span>Scroll to Top</span>
            <ChevronRight size={14} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </footer>
    </div>
  );
}
