import { useState } from 'react';
import { ArrowRight, Database, SlidersHorizontal, Network } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  { title: 'Data Preparation', subtitle: 'Build the sequence', icon: Database, heading: 'Start with the right window.', text: '4,000+ Bitcoin closing prices from 2014–2025 were transformed into 7-day lag windows. Autocorrelation Function (ACF) analysis informed the window to capture autoregressive temporal dependencies.', tags: ['4,000+ closing prices', '7-day lag', 'ACF'], detail: 'Closing prices → Lag windows → Sequential inputs' },
  { title: 'Optuna Tuning', subtitle: 'Search the architecture', icon: SlidersHorizontal, heading: 'Let the search refine the model.', text: 'Optuna’s Tree-Structured Parzen Estimator (TPE) explored 100 trials, optimizing hidden unit counts, batch sizes, and learning rates for the sequential forecasting pipeline.', tags: ['100 trials', 'Hidden units', 'Batch size', 'Learning rate'], detail: 'Trial configuration → Model training → Parameter selection' },
  { title: 'GRU Training', subtitle: 'Learn the pattern', icon: Network, heading: 'Model the signal through volatility.', text: 'The GRU architecture uses Nesterov-accelerated Adaptive Moment Estimation (NADAM) and Huber Loss. Small errors receive quadratic penalties, while outliers receive linear penalties to mitigate severe market volatility spikes.', tags: ['GRU', 'NADAM', 'Huber Loss'], detail: 'Sequential inputs → GRU model → Price prediction' },
];
export function Thesis() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Icon = current.icon;
  return <section id="thesis" className="section research-section"><div className="section-shell">
    <SectionHeading number="04" label="FEATURED RESEARCH" title="From sequence to insight.">Undergraduate thesis · Bitcoin price prediction using GRU & the NADAM optimizer.</SectionHeading>
    <div className="research-layout">
      <div className="research-workspace liquid-glass reveal">
        <div className="research-steps" role="group" aria-label="Research walkthrough">{steps.map((item, i) => <button key={item.title} aria-pressed={step === i} aria-controls="research-panel" onClick={() => setStep(i)}><span className="step-index mono">0{i + 1}</span><span><strong>{item.title}</strong><small>{item.subtitle}</small></span></button>)}</div>
        <div id="research-panel" className="research-panel" role="region" aria-label={current.title} aria-live="polite"><Icon size={30} className="accent-text" /><h3>{current.heading}</h3><p>{current.text}</p><div className="tags">{current.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p className="pipeline-note mono">{current.detail}</p></div>
      </div>
      <aside className="research-results liquid-glass reveal" aria-label="Reported thesis results"><p className="eyebrow">REPORTED RESULTS</p><div className="primary-result"><strong>1.73<span>%</span></strong><span>Mean absolute percentage error</span></div><dl><div><dt>Reported model accuracy</dt><dd>98.27%</dd></div><div><dt>Root mean squared error</dt><dd>$1,803.47</dd></div><div><dt>Validated horizon</dt><dd>2014–2025</dd></div></dl><a href="#projects">Explore related projects<ArrowRight size={17} /></a></aside>
    </div>
  </div></section>;
}
