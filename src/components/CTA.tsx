import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, CodeXml, BriefcaseBusiness, MessageCircle } from 'lucide-react';
const email = 'mkhairs10@gmail.com';
export function CTA() {
  const [copyState, setCopyState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const mounted = useRef(true);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(timer.current); }; }, []);
  async function copyEmail() {
    clearTimeout(timer.current); setCopyState('pending');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      if (!mounted.current) return;
      setCopyState('success'); timer.current = setTimeout(() => setCopyState('idle'), 3000);
    } catch { if (mounted.current) setCopyState('error'); }
  }
  return <section id="contact" className="contact-section"><div className="section-shell"><p className="eyebrow"><span className="section-number">08</span>LET'S CONNECT</p><div className="contact-layout liquid-glass reveal"><div><h2>Good questions.<br /><span>Better possibilities.</span></h2><p>Open to full-time Data Analyst, Data Science & AI/ML positions, as well as freelance projects and research collaborations.</p></div><div className="contact-actions"><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={24} /></a><div className="button-row"><a className="button primary" href={`mailto:${email}`}><Mail size={17} />Say hello</a><button className="button secondary" onClick={copyEmail} disabled={copyState === 'pending'}>{copyState === 'success' ? <Check size={17} /> : <Copy size={17} />}{copyState === 'success' ? 'Email copied' : copyState === 'pending' ? 'Copying…' : 'Copy email'}</button></div><p role="status" className="copy-status">{copyState === 'error' ? `Couldn’t copy automatically. Select ${email} above to copy it, or use Say hello.` : copyState === 'success' ? 'Email address copied to your clipboard.' : ''}</p><div className="social-links"><a href="https://wa.me/6281809426000" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a><a href="https://www.linkedin.com/in/muhammad-khair-syawaludin-a31739279/" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={18} />LinkedIn</a><a href="https://github.com/mkhairs" target="_blank" rel="noopener noreferrer"><CodeXml size={18} />GitHub</a></div></div></div></div></section>;
}
