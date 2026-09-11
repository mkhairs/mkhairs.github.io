import { Brain, Calculator, MapPin } from 'lucide-react';
import portrait from '../assets/images/profile-transparent.png';
import { SectionHeading } from './SectionHeading';
export function About() {
  return <section id="about" className="section section-shell">
    <SectionHeading number="02" label="A LITTLE ABOUT ME" title="A mathematical mindset."><span className="location-label"><MapPin size={16} />Mataram, West Nusa Tenggara</span></SectionHeading>
    <div className="about-layout">
<div className="about-portrait liquid-glass reveal">
  <div className="about-photo"><img src={portrait} alt="Muhammad Khair Syawaludin" width="1086" height="1448" loading="lazy" /></div>
  <div className="about-photo-caption"><strong>Muhammad Khair Syawaludin</strong><span className="mono">Mathematics · GPA 3.61/4.00</span></div>
</div><div className="about-narrative reveal"><div className="about-statement">Curious about the <span>why.</span><br />Careful with the <span>how.</span></div><p>I’m Muhammad Khair Syawaludin, a Mathematics graduate from Universitas Mataram (GPA 3.61/4.00), working at the intersection of statistical analysis, machine learning, and quantitative modeling.</p><p>I’ve guided more than 200 students in programming, relational databases, and mathematical modeling, supported credit data processing during a banking internship, and built predictive models with XGBoost and GRU to support data-driven business decisions.</p><div className="about-pillars"><div className="liquid-glass"><Brain size={21} /><h3>Predictive modeling</h3><p>Classification, time-series forecasting, regression, and Optuna tuning.</p></div><div className="liquid-glass"><Calculator size={21} /><h3>Quantitative analysis</h3><p>Operations research, SQL, statistical testing, and KPI dashboards.</p></div></div></div></div>
    <div className="about-stats reveal"><div><strong>3.61<span>/4.00</span></strong><p>Mathematics GPA</p></div><div><strong>200<span>+</span></strong><p>Students mentored</p></div><div><strong>98.27<span>%</span></strong><p>Reported Bitcoin GRU accuracy</p></div><div><strong>1</strong><p>Registered copyright</p></div></div>
  </section>;
}
