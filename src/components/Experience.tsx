import { useState } from 'react';
import { Plus, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
const roles = [
  { title: 'Private Coding Tutor', organization: 'Prodigi Academy', date: 'Jan 2026 – Present', location: 'Mataram', description: ['Delivering 1-on-1 programming lessons teaching computational logic, algorithms, and modular reasoning via ScratchJr and Scratch 3.'] },
  { title: 'Practical Assistant', organization: 'Mathematics Study Program, FMIPA Universitas Mataram', date: '2024 – 2026', location: 'Mataram', description: ['Algorithms, Linear Programming, Operations Research & Databases.', 'Collaborated directly with faculty lecturers to develop laboratory curriculum and code test cases.', 'Mentored 200+ undergraduate students in Python, SQL, Wolfram Mathematica, and Tora optimization suite.'] },
  { title: 'Operations Internship', organization: 'PT. Bank Rakyat Indonesia (Persero) Tbk Unit Gerung', date: 'Jun 2025 – Jul 2025', location: 'Gerung', description: ['Supported daily operational data flows, financial reconciliation, and branch database workflows.'] },
];
function ExperienceRole({ role, initialOpen }: { role: typeof roles[number]; initialOpen: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return <details className="timeline-item liquid-glass reveal" open={open} onToggle={e => setOpen(e.currentTarget.open)}><summary><div><p className="mono timeline-date">{role.date} · {role.location}</p><h3>{role.title}</h3><p className="timeline-organization">{role.organization}</p></div><Plus size={22} aria-hidden="true" /></summary><div className="timeline-description">{role.description.map(text => <p key={text}>{text}</p>)}</div></details>;
}
export function Experience() {
  return <section id="experience" className="section section-shell"><SectionHeading number="05" label="EXPERIENCE & IMPACT" title="Knowledge, put into practice.">Teaching, leadership, and hands-on experience beyond the notebook.</SectionHeading>
    <div className="experience-layout"><div className="timeline">{roles.map((role, i) => <ExperienceRole key={role.title} role={role} initialOpen={i === 0} />)}</div><aside className="leadership liquid-glass reveal"><h3>Community & leadership</h3><div><p className="mono">2024</p><h4>Head of Human Resources (PPSDM)</h4><p className="organization">GAMATIKA Coding Club (GCC) FMIPA UNRAM</p><p>Led technical workshops, peer programming clinics, and competitive coding preparation for 30+ club members.</p></div><div><p className="mono">2023</p><h4>Secretary of Achievement Department</h4><p className="organization">GAMATIKA FMIPA UNRAM</p><p>Administered academic documentation and student study groups for mathematical competitions.</p></div></aside></div>
    <div className="awards-strip liquid-glass reveal" aria-label="Honors and conference awards">{[
      ['Best Paper', 'FORSTAT Int. Conf. UNRAM', '2026'], ['Presenter', 'ICST UNRAM', '2025'], ['Presenter', 'UNDIKSHA Bali Semnas', '2025'], ['3rd Place PKM-AI', 'Scientific Article UNRAM', '2024'],
    ].map(([title, organization, date]) => <div key={organization}><Award size={19} /><div><h3>{title}</h3><p>{organization}</p><span className="mono">{date}</span></div></div>)}</div>
  </section>;
}
