import { Brain, CodeXml, Sigma } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const categories = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    icon: Brain,
    skills: [
      'PyTorch',
      'Physics-Informed Neural Networks (PINNs)',
      'Gated Recurrent Unit (GRU)',
      'XGBoost',
      'Scikit-Learn',
      'Topological Data Analysis (TDA)',
      'Optuna (TPE Tuning)',
      'Time-Series Forecasting',
    ],
  },
  {
    title: 'Python Ecosystem & Data',
    icon: CodeXml,
    skills: [
      'Python',
      'NumPy & SciPy',
      'Pandas',
      'SQL (MySQL)',
      'Pygame',
      'Git / GitHub',
    ],
  },
  {
    title: 'Mathematics & Quantitative Modeling',
    icon: Sigma,
    skills: [
      'Mathematical Modeling',
      'Numerical Methods',
      'Operations Research',
      'Linear Programming',
      'Graph Theory',
      'Wolfram Mathematica',
      'LaTeX',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section section-shell">
      <SectionHeading number="07" label="THE TOOLKIT" title="Focused on math, Python, and AI.">
        Core technical proficiencies applied across research, machine learning pipelines, and quantitative models.
      </SectionHeading>
      <div className="skills-grid">
        {categories.map(({ title, icon: Icon, skills }) => (
          <div className="skill-category liquid-glass reveal" key={title}>
            <Icon size={24} className="accent-text" />
            <h3>{title}</h3>
            <ul className="tags">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
