import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { RevealLayer } from './RevealLayer';
import { useHeroReveal } from '../hooks/useHeroReveal';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

export function Hero() {
  const { heroRef, cursor } = useHeroReveal();
  return (
    <section ref={heroRef} id="hero" className="original-hero" aria-labelledby="hero-title">
      <div className="hero-base-image" style={{ backgroundImage: `url("${BG_IMAGE_1}")` }} aria-hidden="true" />
      <RevealLayer image={BG_IMAGE_2} cursorX={cursor.x} cursorY={cursor.y} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-heading">
        <p className="hero-status liquid-nav"><span className="availability-dot" />Open to AI / Data Science &amp; Quantitative Roles</p>
        <h1 id="hero-title"><span className="font-playfair">Analytical rigor</span><span>with artificial intelligence</span></h1>
      </div>
      <div className="hero-information">
        <div className="hero-bio liquid-glass">
          <p className="eyebrow">Muhammad Khair Syawaludin</p>
          <p>Mathematics graduate (GPA 3.61/4.00) specializing in statistical analysis, physics-informed neural networks, time-series forecasting, and applied AI systems.</p>
        </div>
        <div className="hero-actions liquid-glass">
          <p>Explore 98.27% accuracy Bitcoin GRU research, inverse PINNs, topological market analysis, and peer-reviewed publications.</p>
          <div className="button-row"><a href="#thesis" className="button primary">Explore Research<ArrowRight size={17} /></a><a href="#projects" className="button secondary">Projects<ArrowUpRight size={17} /></a></div>
        </div>
      </div>
    </section>
  );
}
