import { Database, LineChart, Sigma, Languages } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
const categories = [
  { title: 'Machine Learning & Data Science', icon: LineChart, skills: ['Python', 'PyTorch', 'XGBoost', 'Scikit-Learn', 'Optuna (TPE)', 'Time-Series Forecasting', 'Regression Analysis', 'Data Preprocessing', 'SMOTE / Imbalance', 'GRU / Neural Networks'] },
  { title: 'Data, SQL & Infrastructure', icon: Database, skills: ['SQL (MySQL)', 'Pandas & NumPy', 'Microsoft Excel', 'Relational Databases', 'Docker', 'Git / GitHub', 'FastAPI', 'LaTeX'] },
  { title: 'Quantitative & Mathematical Analysis', icon: Sigma, skills: ['Operations Research', 'Linear Programming', 'Mathematical Modeling', 'Numerical Methods', 'Graph Theory', 'SPSS', 'Wolfram Mathematica', 'Tora Software'] },
  { title: 'Communication & Languages', icon: Languages, skills: ['English (Professional Working)', 'Indonesian (Native)', 'Microsoft PowerPoint', 'KPI & Metric Reporting', 'Technical Documentation'] },
];
export function Skills() {
  return <section id="skills" className="section section-shell"><SectionHeading number="07" label="THE TOOLKIT" title="Tools for thoughtful work.">The languages, frameworks, and methods I use to move from a question to an answer.</SectionHeading><div className="skills-grid">{categories.map(({ title, icon: Icon, skills }) => <div className="skill-category liquid-glass reveal" key={title}><Icon size={24} className="accent-text" /><h3>{title}</h3><ul className="tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></section>;
}
