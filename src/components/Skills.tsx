import { Database, LineChart, Sigma, Languages } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const categories = [
  {
    title: 'Machine Learning & AI Engineering',
    icon: LineChart,
    skills: [
      'Python',
      'PyTorch',
      'PINNs (Physics-Informed)',
      'XGBoost',
      'Scikit-Learn',
      'Optuna (TPE Tuning)',
      'Time-Series (GRU)',
      'LangChain & RAG',
      'LLMs & Prompt Engineering',
      'Topological Data Analysis (TDA)',
      'SMOTE / Imbalanced Learning',
    ],
  },
  {
    title: 'Data, SQL & Tools',
    icon: Database,
    skills: [
      'SQL (MySQL)',
      'Pandas & NumPy',
      'Microsoft Excel',
      'Relational Databases',
      'Docker & AI Deployment',
      'Git / GitHub',
      'LaTeX',
      'Workflow Automation',
    ],
  },
  {
    title: 'Mathematical & Quantitative Modeling',
    icon: Sigma,
    skills: [
      'Operations Research',
      'Linear Programming',
      'Mathematical Modeling',
      'Numerical Methods',
      'Graph Theory & Algorithms',
      'Genetic Algorithms',
      'SPSS',
      'Wolfram Mathematica',
      'Tora Software',
    ],
  },
  {
    title: 'Communication & Languages',
    icon: Languages,
    skills: [
      'English (Professional Working)',
      'Indonesian (Native)',
      'Technical Documentation',
      'Academic Writing & Research',
      'Microsoft PowerPoint',
      'Course Curriculum Development',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section section-shell">
      <SectionHeading number="07" label="THE TOOLKIT" title="Tools for thoughtful work.">
        The languages, frameworks, and mathematical methods I use to move from a question to an answer.
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
