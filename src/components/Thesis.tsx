import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, Database, Network, SlidersHorizontal } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    title: 'Data Preparation',
    subtitle: 'Build the sequence',
    icon: Database,
    heading: 'Start with the right window.',
    text: '4,000+ Bitcoin closing prices from 2014–2025 were transformed into 7-day lag windows. Autocorrelation Function (ACF) analysis informed the window to capture autoregressive temporal dependencies.',
    tags: ['4,000+ closing prices', '7-day lag', 'ACF'],
    detail: 'Closing prices → Lag windows → Sequential inputs',
  },
  {
    title: 'Optuna Tuning',
    subtitle: 'Search the architecture',
    icon: SlidersHorizontal,
    heading: 'Let the search refine the model.',
    text: 'Optuna’s Tree-Structured Parzen Estimator (TPE) explored 100 trials, optimizing hidden unit counts, batch sizes, and learning rates for the sequential forecasting pipeline.',
    tags: ['100 trials', 'Hidden units', 'Batch size', 'Learning rate'],
    detail: 'Trial configuration → Model training → Parameter selection',
  },
  {
    title: 'GRU Training',
    subtitle: 'Learn the pattern',
    icon: Network,
    heading: 'Model the signal through volatility.',
    text: 'The GRU architecture uses Nesterov-accelerated Adaptive Moment Estimation (NADAM) and Huber Loss. Small errors receive quadratic penalties, while outliers receive linear penalties to mitigate severe market volatility spikes.',
    tags: ['GRU', 'NADAM', 'Huber Loss'],
    detail: 'Sequential inputs → GRU model → Price prediction',
  },
  {
    title: 'Model Comparison',
    subtitle: 'Benchmark vs. literature',
    icon: BarChart3,
    heading: 'Outperforming literature benchmarks.',
    text: 'Comparative evaluation of the proposed TPE-GRU model against recent state-of-the-art cryptocurrency forecasting architectures, achieving the lowest MAPE (1.73%) and competitive RMSE ($1,803.47).',
    tags: ['Literature Benchmark', 'TPE-GRU', 'NADAM', '1.73% MAPE', '$1,803.47 RMSE'],
    detail: 'Comparative analysis → Benchmark validation → State-of-the-art performance',
  },
];

export function Thesis() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Icon = current.icon;

  return (
    <section id="thesis" className="section research-section">
      <div className="section-shell">
        <SectionHeading number="03" label="FEATURED RESEARCH" title="From sequence to insight.">
          Undergraduate thesis · Bitcoin price prediction using GRU &amp; the NADAM optimizer.
        </SectionHeading>
        <div className="research-layout">
          <div className="research-workspace liquid-glass reveal">
            <div className="research-steps" role="group" aria-label="Research walkthrough">
              {steps.map((item, i) => (
                <button
                  key={item.title}
                  aria-pressed={step === i}
                  aria-controls="research-panel"
                  onClick={() => setStep(i)}
                >
                  <span className="step-index mono">0{i + 1}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                </button>
              ))}
            </div>
            <div id="research-panel" className="research-panel" role="region" aria-label={current.title} aria-live="polite">
              <Icon size={30} className="accent-text" />
              <h3>{current.heading}</h3>
              <p>{current.text}</p>

              {step === 3 && (
                <>
                  <div className="thesis-table-container">
                    <table className="thesis-table">
                      <thead>
                        <tr>
                          <th>Study</th>
                          <th>Model Architecture</th>
                          <th>Optimizer</th>
                          <th>RMSE (USD)</th>
                          <th>MAPE (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.1109/ICE3IS66769.2025.11281196" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Widodo et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>CNN-BiLSTM</td>
                          <td>Adam</td>
                          <td>—</td>
                          <td>4.84</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.1109/ICE3IS66769.2025.11281196" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Widodo et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>CNN-GRU</td>
                          <td>Adam</td>
                          <td>—</td>
                          <td>4.35</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.1109/ICE3IS66769.2025.11281196" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Widodo et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>CNN-LSTM</td>
                          <td>Adam</td>
                          <td>3,309.00</td>
                          <td>3.77</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.1109/ICDSIS65355.2025.11070535" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Varalakshmi et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>Standalone GRU</td>
                          <td>Adam</td>
                          <td>2,505.84</td>
                          <td>2.79</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.3390/bdcc10070200" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Walugembe et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>Plain LSTM</td>
                          <td>Adam</td>
                          <td>4,030.10</td>
                          <td>4.40</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.3390/bdcc10070200" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Walugembe et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>Spiking LSTM (SLSTM)</td>
                          <td>Adam</td>
                          <td>3,501.48</td>
                          <td>3.86</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.3390/bdcc10070200" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Walugembe et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>GWO-LSTM</td>
                          <td>GWO + Adam</td>
                          <td>2,217.24</td>
                          <td>2.46</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://doi.org/10.3390/bdcc10070200" target="_blank" rel="noopener noreferrer" className="table-doi-link">
                              Walugembe et al. <ArrowUpRight size={13} />
                            </a>
                          </td>
                          <td>GWO-SLSTM</td>
                          <td>GWO + Adam</td>
                          <td>1,840.97</td>
                          <td>1.76</td>
                        </tr>
                        <tr className="highlight-row">
                          <td><strong>Proposed Model</strong></td>
                          <td><strong>TPE-GRU</strong></td>
                          <td><strong>NADAM</strong></td>
                          <td><strong>1,803.47</strong></td>
                          <td><strong>1.73</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="thesis-references">
                    <h4 className="eyebrow">BENCHMARK REFERENCES (DIRECT DOI)</h4>
                    <div className="doi-reference-cards">
                      <a href="https://doi.org/10.3390/bdcc10070200" target="_blank" rel="noopener noreferrer" className="doi-card">
                        <span className="mono doi-tag">Walugembe et al. (2026)</span>
                        <span className="doi-title">Bio-inspired spiking recurrent networks with evolutionary optimization for non-stationary cryptocurrency forecasting</span>
                        <span className="doi-url">doi: 10.3390/bdcc10070200 <ArrowUpRight size={14} /></span>
                      </a>
                      <a href="https://doi.org/10.1109/ICDSIS65355.2025.11070535" target="_blank" rel="noopener noreferrer" className="doi-card">
                        <span className="mono doi-tag">Varalakshmi et al. (2025)</span>
                        <span className="doi-title">Deploying a multi-model forecasting system for Bitcoin prices: Bridging statistical forecasting and deep learning innovations</span>
                        <span className="doi-url">doi: 10.1109/ICDSIS65355.2025.11070535 <ArrowUpRight size={14} /></span>
                      </a>
                      <a href="https://doi.org/10.1109/ICE3IS66769.2025.11281196" target="_blank" rel="noopener noreferrer" className="doi-card">
                        <span className="mono doi-tag">Widodo et al. (2025)</span>
                        <span className="doi-title">Multi-model deep learning architecture for cryptocurrency forecasting: A comparative evaluation of CNN-LSTM, CNN-Bidirectional LSTM, and CNN-GRU</span>
                        <span className="doi-url">doi: 10.1109/ICE3IS66769.2025.11281196 <ArrowUpRight size={14} /></span>
                      </a>
                    </div>
                  </div>
                </>
              )}

              <div className="tags">{current.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <p className="pipeline-note mono">{current.detail}</p>
            </div>
          </div>
          <aside className="research-results liquid-glass reveal" aria-label="Reported thesis results">
            <p className="eyebrow">REPORTED RESULTS</p>
            <div className="primary-result">
              <strong>1.73<span>%</span></strong>
              <span>Mean absolute percentage error</span>
            </div>
            <dl>
              <div><dt>Reported model accuracy</dt><dd>98.27%</dd></div>
              <div><dt>Root mean squared error</dt><dd>$1,803.47</dd></div>
              <div><dt>Validated horizon</dt><dd>2014–2025</dd></div>
            </dl>
            <a href="#projects">Explore related projects<ArrowRight size={17} /></a>
          </aside>
        </div>
      </div>
    </section>
  );
}
