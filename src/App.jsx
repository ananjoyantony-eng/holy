import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Gift, Share2, ChevronDown, Cross, Sparkles, Copy, Check, Loader2 } from 'lucide-react';

// --- Custom Graphics Components ---

const ChaliceGraphic = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Host */}
    <motion.g initial={{ y: 5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
      <circle cx="50" cy="20" r="12" className="fill-white/50" />
      <path d="M50 14 L50 26 M44 20 L56 20" strokeOpacity="0.5" />
    </motion.g>
    {/* Chalice */}
    <path d="M30 40 C30 40, 30 75, 50 75 C70 75, 70 40, 70 40" />
    <path d="M30 40 L70 40" />
    <path d="M50 75 L50 90" />
    <path d="M35 90 L65 90" />
    <path d="M35 45 C35 45, 35 65, 50 65 C65 65, 65 45, 65 45" opacity="0.5" />
  </svg>
);

// --- Components ---

const Section = ({ children, className = "" }) => (
  <section className={`min-h-screen flex flex-col justify-center items-center p-6 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Google Calendar Link Generator
  const addToCalendar = () => {
    const event = {
      text: "First Holy Communion Celebration: Anaia Mary Joy",
      dates: "20251227T160000/20251227T183000",
      details: "Join us for the First Holy Communion Celebration of Anaia Mary Joy.",
      location: "St. Joseph's Metropolitan Cathedral, Palayam, Thiruvananthapuram",
    };
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#FDFBF7] text-[#1B365D] overflow-x-hidden selection:bg-[#1B365D] selection:text-[#D4AF37]">
      {/* Global Styles for Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        /* Updated: Using Playfair Display for everything for consistency */
        body { font-family: 'Playfair Display', serif; }
        h1, h2, h3, .serif-font { font-family: 'Playfair Display', serif; }
        
        .gold-text {
          color: #D4AF37;
          background: linear-gradient(45deg, #D4AF37, #F2D06B, #D4AF37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        .gold-border {
            border: 1px solid #D4AF37;
            box-shadow: 0 0 0 4px #FDFBF7, 0 0 0 5px #D4AF37;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>

      {/* HERO SECTION */}
      <Section className="relative bg-[#FDFBF7]">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50"></div>
        
        <div className="z-10 text-center space-y-6 max-w-2xl mx-auto p-8 md:p-12 bg-white shadow-2xl gold-border relative">
          
          <FadeIn>
            <p className="text-xs md:text-base tracking-[0.3em] uppercase text-[#D4AF37] mb-2 font-bold">Welcome to the</p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#1B365D]">
              First Holy<br />Communion
            </h1>
          </FadeIn>

          {/* MAIN UPLOADED IMAGE - CIRCLE */}
          <FadeIn delay={0.3}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto my-8 group">
               {/* Decorative Borders (Circle) */}
               <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full transform rotate-3"></div>
               <div className="absolute inset-0 border-2 border-[#1B365D] rounded-full transform -rotate-3"></div>
               
               {/* Image - Reverted to object-cover for circle */}
               <img 
                 src="lllll.png" 
                 onError={(e) => {e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1544427920-24e832256f72?auto=format&fit=crop&q=80&w=600"}}
                 alt="Communion Elements" 
                 className="w-full h-full object-cover rounded-full shadow-lg relative z-10 bg-white" 
               />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl italic text-[#708090] serif-font">Celebration of</p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="py-2 px-2">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold gold-text serif-font leading-relaxed py-3">
                Anaia Mary Joy
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col items-center gap-3 text-[#1B365D] mt-4">
              <div className="w-16 h-px bg-[#D4AF37] mb-2"></div>
              <span className="text-xl uppercase tracking-widest font-bold">December 27, 2025</span>
              <span className="text-sm uppercase tracking-widest text-[#D4AF37]">Saturday</span>
              <div className="w-16 h-px bg-[#D4AF37] mt-2"></div>
            </div>
          </FadeIn>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D4AF37]"
        >
          <ChevronDown size={32} />
        </motion.div>
      </Section>

      {/* CEREMONY DETAILS */}
      <Section className="bg-[#1B365D] relative text-white">
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full z-10">
          {/* Church Card */}
          <FadeIn direction="left">
            <div className="bg-[#FDFBF7] text-[#1B365D] p-8 md:p-12 shadow-2xl h-full flex flex-col items-center text-center group relative overflow-hidden border-t-4 border-[#D4AF37]">
              
              <div className="w-16 h-16 bg-[#1B365D] text-[#D4AF37] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500 z-10">
                <Cross size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 z-10">The Holy Mass</h3>
              <div className="space-y-4 text-lg text-[#4A5568] z-10 font-light">
                <div className="flex items-center gap-3 justify-center">
                  <Clock size={20} className="text-[#D4AF37]" />
                  <span>4:00 PM</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Calendar size={20} className="text-[#D4AF37]" />
                  <span>Saturday, 27 December</span>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <MapPin size={24} className="mb-1 text-[#D4AF37]" />
                  <p className="font-bold text-[#1B365D]">St. Joseph's Metropolitan Cathedral</p>
                  <p className="text-sm">Palayam, Thiruvananthapuram</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 border border-[#1B365D] text-[#1B365D] text-xs uppercase tracking-widest hover:bg-[#1B365D] hover:text-[#D4AF37] transition-all z-10"
                onClick={() => window.open("https://maps.app.goo.gl/fq3fnUGT4w8FBjjD8", "_blank")}
              >
                View Map
              </motion.button>
            </div>
          </FadeIn>

          {/* Reception Card */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-[#FDFBF7] text-[#1B365D] p-8 md:p-12 shadow-2xl h-full flex flex-col items-center text-center group relative overflow-hidden border-t-4 border-[#D4AF37]">
              
              <div className="w-16 h-16 bg-[#1B365D] text-[#D4AF37] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500 z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 z-10">Reception</h3>
              <div className="space-y-4 text-lg text-[#4A5568] z-10 font-light">
                <p className="italic mb-4 text-[#D4AF37] serif-font">"Reception to follow"</p>
                <div className="flex items-center gap-3 justify-center">
                  <Clock size={20} className="text-[#D4AF37]" />
                  <span>After Mass</span>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <MapPin size={24} className="mb-1 text-[#D4AF37]" />
                  <p className="font-bold text-[#1B365D]">Hotel Residency Tower</p>
                  <p className="text-sm">South Gate of Secretariat, Press Rd, Statue, Palayam, Thiruvananthapuram</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 border border-[#1B365D] text-[#1B365D] text-xs uppercase tracking-widest hover:bg-[#1B365D] hover:text-[#D4AF37] transition-all z-10"
                onClick={() => window.open("https://maps.app.goo.gl/tEmEy3dbvg84qz379", "_blank")}
              >
                View Map
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* BIBLE VERSE / QUOTE */}
      <Section className="bg-[#FDFBF7] text-[#1B365D] text-center border-y border-[#E2E8F0]">
        <FadeIn>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center">
              <ChaliceGraphic className="w-20 h-20 text-[#D4AF37]" />
            </div>
            
            <blockquote className="text-3xl md:text-5xl font-serif italic leading-relaxed text-[#1B365D]">
              "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-px bg-[#D4AF37]"></div>
               <p className="text-lg uppercase tracking-widest text-[#D4AF37]">John 6:35</p>
               <div className="w-12 h-px bg-[#D4AF37]"></div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* RSVP & ACTIONS */}
      <Section className="bg-[#FDFBF7]">
        <div className="max-w-4xl w-full text-center space-y-12">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1B365D] mb-2">Celebrate With Us</h2>
            <p className="text-[#708090] text-lg uppercase tracking-widest">We would be honored by your presence</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.2}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addToCalendar}
                className="w-full bg-white p-6 shadow-xl border border-[#E2E8F0] flex items-center justify-center gap-4 hover:border-[#D4AF37] transition-all group"
              >
                <div className="text-[#1B365D]">
                  <Calendar size={28} strokeWidth={1} />
                </div>
                <span className="text-lg font-bold text-[#1B365D] uppercase tracking-wider">Add to Calendar</span>
              </motion.button>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsRsvpOpen(true)}
                className="w-full bg-[#1B365D] p-6 shadow-xl flex items-center justify-center gap-4 text-white hover:bg-[#2C5282] transition-all"
              >
                <div className="text-[#D4AF37]">
                  <Gift size={28} strokeWidth={1} />
                </div>
                <span className="text-lg font-bold uppercase tracking-wider text-[#D4AF37]">RSVP Now</span>
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[#0F1F3D] text-white py-16 text-center border-t border-[#1B365D]">
        <p className="font-serif text-3xl mb-4 italic text-[#D4AF37]">With Love</p>
        <p className="text-xs opacity-60 uppercase tracking-[0.3em]">The Family</p>
      </footer>

      {/* RSVP MODAL */}
      <AnimatePresence>
        {isRsvpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F1F3D]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsRsvpOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#FDFBF7] p-8 md:p-12 max-w-md w-full shadow-2xl relative gold-border"
              onClick={e => e.stopPropagation()}
            >
              
              {!submitted ? (
                <>
                  <h3 className="text-3xl font-serif text-[#1B365D] mb-8 text-center">RSVP</h3>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#708090] mb-2">Your Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-white border border-[#E2E8F0] focus:border-[#D4AF37] outline-none transition-all" placeholder="Guest Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#708090] mb-2">Number of Guests</label>
                      <select className="w-full px-4 py-3 bg-white border border-[#E2E8F0] focus:border-[#D4AF37] outline-none">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full bg-[#1B365D] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#2C5282] transition-colors border border-[#1B365D]">
                        Confirm Attendance
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#1B365D] rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1B365D] mb-2">Thank You!</h3>
                  <p className="text-[#708090]">We look forward to celebrating with you.</p>
                  <button onClick={() => setIsRsvpOpen(false)} className="mt-8 text-xs font-bold uppercase tracking-widest text-[#1B365D] hover:text-[#D4AF37] underline decoration-[#D4AF37]">Close</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}