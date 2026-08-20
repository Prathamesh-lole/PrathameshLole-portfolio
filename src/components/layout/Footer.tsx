import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, Github, Linkedin, Code2, ArrowUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { HandwrittenNote } from '../common/HandwrittenNote';
import { MagneticButton } from '../common/MagneticButton';

interface FooterProps {
  soundEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ soundEnabled }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 }
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      try {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.75 } });
      } catch {}
    } catch (err) {
      setSendError('Something went wrong. Please try emailing directly.');
    } finally {
      setIsSending(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#1A1A1A] text-[#F5F3EE] pt-24 pb-12 overflow-hidden">
      {/* Editorial top border line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-[#2D6A4F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Editorial Header */}
        <div className="border-b border-white/10 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
                LET'S BUILD<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-100">
                  TOGETHER.
                </span>
              </h2>
            </div>

            <div className="space-y-2">
              <HandwrittenNote rotate={-3} color="orange" className="text-xl">
                have an idea or open role? let's talk →
              </HandwrittenNote>
              <p className="text-sm text-neutral-400 max-w-sm">
                Whether you have an interesting software project, an engineering opening, or just want to discuss tech—my inbox is always open.
              </p>
            </div>
          </div>

          {/* Quick Copyable Email Banner */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono-code text-xs text-neutral-400 block uppercase tracking-wider">
                  DIRECT EMAIL INBOX
                </span>
                <span className="font-mono-code text-lg sm:text-xl font-bold text-white tracking-wide">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                data-cursor="copy"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#1A1A1A] hover:bg-orange-500 hover:text-white font-mono-code text-xs font-bold tracking-wider transition-all shadow-md"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-orange-400 text-white font-mono-code text-xs tracking-wider transition-colors"
              >
                <span>OPEN MAIL APP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two Column Grid: Interactive Note Form & Social Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          {/* Left Column: Direct Note Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-white tracking-tight">
                Send a Direct Message
              </h3>
              <HandwrittenNote rotate={2} color="orange" className="text-sm">
                instant dispatch ⚡
              </HandwrittenNote>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-white/5 border border-emerald-500/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif-editorial italic text-2xl text-white">Thank you for reaching out!</h4>
                <p className="text-sm text-neutral-300 font-serif-editorial italic">
                  Your message has been initiated. I usually reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 text-xs font-mono-code text-orange-400 underline underline-offset-4"
                >
                  Send another note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-1.5">
                    Your Message / Project Idea
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm font-sans resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-neutral-500 font-mono-code">
                    {sendError
                      ? <span className="text-rose-400">{sendError}</span>
                      : '* your message lands directly in my inbox'
                    }
                  </span>
                  <MagneticButton
                    variant="pill"
                    soundEnabled={soundEnabled}
                    className="!bg-orange-600 !text-white hover:!bg-orange-500 !border-orange-500 flex items-center gap-2"
                    disabled={isSending}
                  >
                    <span>{isSending ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <Send className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Social Links & Footnotes */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono-code text-xs text-neutral-400 uppercase tracking-widest block">
                [ SOCIAL DIRECTORY ]
              </span>

              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-neutral-300 group-hover:text-orange-400 transition-colors">
                        {link.platform === 'GitHub' && <Github className="w-4 h-4" />}
                        {link.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                        {link.platform === 'Email' && <Mail className="w-4 h-4" />}
                        {link.platform === 'LeetCode' && <Code2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="font-bold text-white text-sm block group-hover:text-orange-300 transition-colors">
                          {link.platform}
                        </span>
                        <span className="font-mono-code text-xs text-neutral-400">
                          {link.handle}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-hand text-xs text-amber-300 block">
                        {link.handwrittenNote}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote stamp */}
            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 relative">
              <div className="absolute -top-3 right-6">
                <span className="px-2 py-0.5 bg-orange-500 text-white font-mono-code text-[10px] font-bold rounded uppercase">
                  STATUS: ONLINE
                </span>
              </div>
              <p className="font-serif-editorial italic text-lg text-neutral-300 leading-snug">
                "see you around :) thanks for exploring the digital notebook."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-mono-code text-neutral-500">
                <span>PRATHAMESH LOLE</span>
                <span>MUMBAI, IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono-code gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 PRATHAMESH LOLE.</span>
            <span>DESIGNED + BUILT WITH CURIOSITY.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-neutral-500">
              REACT • TYPESCRIPT • TAILWIND
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
