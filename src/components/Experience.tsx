import { useState } from 'react';
import { Plus, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const roles = [
  {
    title: 'Private Coding Tutor',
    organization: 'Prodigi Academy',
    date: 'Jan 2026 – Present',
    location: 'Mataram, West Nusa Tenggara',
    description: [
      'Delivered 1-on-1 face-to-face programming lessons using ScratchJr and Scratch 3.',
      'Taught core computational thinking, algorithmic logic building, and interactive project design.',
    ],
  },
  {
    title: 'Practical Assistant (LP, Algorithms, OR & Database)',
    organization: 'Mathematics Study Program, FMIPA Universitas Mataram',
    date: '2024 – 2026',
    location: 'Mataram',
    description: [
      'Collaborated with lecturers to create course materials, laboratory exercises, coding challenges, and test cases.',
      'Guided over 200 students in mathematical model formulation, algorithmic problem-solving, code debugging, and error analysis.',
      'Instructed students in using Python, MySQL, Wolfram Mathematica, and Tora to execute numerical algorithms, design relational databases, and run operations research simulations.',
    ],
  },
  {
    title: 'Credit Document Registration (Internship)',
    organization: 'PT. Bank Rakyat Indonesia (Persero) Tbk Unit Gerung',
    date: 'Jun 2025 – Jul 2025',
    location: 'Gerung',
    description: [
      'Scanned, verified, and inputted new customer credit application data into the BRIMEN banking system.',
      'Ensured accuracy and compliance across financial documentation and database records.',
    ],
  },
];

const awards = [
  { title: 'Best Paper', organization: 'FORSTAT Int. Conference, UNRAM', date: '2026' },
  { title: 'Presenter', organization: 'ICST, Universitas Mataram', date: '2025' },
  { title: 'Presenter', organization: 'UNDIKSHA Semnas Matematika & Kombinatorika', date: '2025' },
  { title: '3rd Place PKM-AI', organization: 'Student Scientific Article, UNRAM', date: '2024' },
  { title: 'Presenter', organization: 'SEMNAS Merdeka Belajar & Merdeka Fair UNRAM', date: '2024' },
  { title: 'Achievement Scholarship', organization: 'PT Sumbawa Timur Mining (STM)', date: '2023' },
  { title: '2nd Place Debate', organization: 'argUEFest by argUMent Championship', date: '2023' },
];

function ExperienceRole({ role, initialOpen }: { role: typeof roles[number]; initialOpen: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <details className="timeline-item liquid-glass reveal" open={open} onToggle={e => setOpen(e.currentTarget.open)}>
      <summary>
        <div>
          <p className="mono timeline-date">{role.date} · {role.location}</p>
          <h3>{role.title}</h3>
          <p className="timeline-organization">{role.organization}</p>
        </div>
        <Plus size={22} aria-hidden="true" />
      </summary>
      <div className="timeline-description">
        {role.description.map(text => <p key={text}>{text}</p>)}
      </div>
    </details>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section section-shell">
      <SectionHeading number="05" label="EXPERIENCE & IMPACT" title="Knowledge, put into practice.">
        Teaching, leadership, and hands-on experience beyond the notebook.
      </SectionHeading>
      <div className="experience-layout">
        <div className="timeline">
          {roles.map((role, i) => (
            <ExperienceRole key={role.title} role={role} initialOpen={i === 0} />
          ))}
        </div>
        <aside className="leadership liquid-glass reveal">
          <h3>Community &amp; leadership</h3>
          <div>
            <p className="mono">2024</p>
            <h4>Head of Human Resources Development (PPSDM)</h4>
            <p className="organization">GAMATIKA Coding Club (GCC) FMIPA UNRAM</p>
            <p>Led skill development initiatives for 30+ members, organizing workshops and competitive programming preparation.</p>
          </div>
          <div>
            <p className="mono">2023</p>
            <h4>Secretary of Achievement Department</h4>
            <p className="organization">GAMATIKA FMIPA UNRAM</p>
            <p>Managed departmental correspondence, archiving, and organized regular Study Sessions to boost academic performance.</p>
          </div>
        </aside>
      </div>
      <div className="awards-strip liquid-glass reveal" aria-label="Honors and conference awards">
        {awards.map(({ title, organization, date }) => (
          <div key={`${title}-${organization}`}>
            <Award size={19} />
            <div>
              <h3>{title}</h3>
              <p>{organization}</p>
              <span className="mono">{date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
