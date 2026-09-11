import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Bot, CreditCard, Gamepad2, TrendingUp, X, CodeXml } from 'lucide-react';
import { projects, projectFilters, filterProjects, type Project, type ProjectFilter } from '../data/projects';
import { useModal } from '../hooks/useModal';
import { useSlidingPill } from '../hooks/useSlidingPill';
import { SectionHeading } from './SectionHeading';

const icons = { 'credit-card-fraud': CreditCard, 'ihsg-forecasting': TrendingUp, 'resume-screening': Bot, 'alien-space-invader': Gamepad2 };

function ProjectDetails({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialog = useModal(Boolean(project));
  return <dialog ref={dialog} className="project-dialog liquid-glass" aria-labelledby="case-study-title" aria-describedby="case-study-summary" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) { const bounds = e.currentTarget.getBoundingClientRect(); if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) onClose(); } }}>
    <div className="dialog-top"><span className="eyebrow">PROJECT CASE STUDY</span><button autoFocus className="icon-button" aria-label="Close case study" onClick={onClose}><X size={22} /></button></div>
    {project && <div className="dialog-content">
      <p className="eyebrow accent-text">{project.categoryLabel}</p><h2 id="case-study-title">{project.title}</h2><p id="case-study-summary" className="case-summary">{project.summary}</p>
      <div className="case-highlight"><strong>{project.highlight.value}</strong><span>{project.highlight.label}</span></div>
      <div className="case-sections">{project.items.map((item, i) => <section key={item.label}><span className="mono">0{i + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></section>)}</div>
      <h3 className="toolkit-label">Technology & methods</h3><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <a className="button primary case-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><CodeXml size={18} />View source on GitHub<ArrowUpRight size={17} /></a>
    </div>}
  </dialog>;
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filterProjects(filter);
  const { containerRef, style: pillStyle } = useSlidingPill(filter);
  return <section id="projects" className="section section-shell">
    <SectionHeading number="03" label="SELECTED WORK" title="Built with purpose.">From imbalanced datasets to market forecasting. Explore the problems, methods, and results behind my work.</SectionHeading>
    <div className="project-toolbar"><div className="project-filters liquid-nav" ref={containerRef} role="group" aria-label="Filter projects"><span className="sliding-pill" style={pillStyle} aria-hidden="true" />{projectFilters.map(({ id, label }) => <button key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}<span>{filterProjects(id).length}</span></button>)}</div><p className="result-count mono" role="status">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p></div>
    <div className="project-grid">{filtered.map((project, index) => {
      const Icon = icons[project.id as keyof typeof icons];
      return <article key={project.id} className="project-card liquid-glass reveal" style={{ transitionDelay: `${index * 80}ms` }}>
        <div className="project-topline"><span className="project-icon"><Icon size={23} /></span><span className="mono">0{projects.indexOf(project) + 1}</span></div>
        <p className="eyebrow project-category">{project.categoryLabel}</p>
        <h3>{project.shortTitle}</h3><p className="project-summary">{project.summary}</p>
        <div className="project-metric"><strong>{project.highlight.value}</strong><span>{project.highlight.label}</span></div>
        <div className="tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-card-footer"><button className="explore-button" aria-label={`Explore project: ${project.title}`} onClick={() => setSelected(project)}>Explore project<ArrowRight size={18} /></button><a className="icon-button" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={20} /></a></div>
      </article>;
    })}</div>
    <ProjectDetails project={selected} onClose={() => setSelected(null)} />
  </section>;
}
